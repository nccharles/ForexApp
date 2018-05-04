import React, {Component} from 'react'
import {Text, FlatList, View, StatusBar} from 'react-native'
import PropTypes from 'prop-types'

//graphcool things
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import ListItem from '../Components/ListItem'
// import Currencies from '../Assets/Data/Currencies'

const TEMP_CURRENT_CURRENCY = 'CAD';

class CurrencyList extends Component {

    constructor(props) {
        super(props);
        this.state = {
          // showModal: false,
          refreshing: false,
          dataloaded: false,
          data:[],
          text: '',
          countries: []
    
        };
      this.onRefresh = this.onRefresh.bind(this);
      this.onEnd = this.onEnd.bind(this);
    
    }


    //Luc's code handling dabase filtering
      goBack =(baseCurrency) =>{
        const {navigation} = this.props
        navigation.goBack();
        navigation.state.params.setBaseCurrency({baseCurrency: baseCurrency })
        //console.log(navigation)
      }

    // end of luc's code


     onEnd() {
      if(this.state.dataloaded)
      {
       alert("hi");
       this.setState({dataloaded:false});
      }
     }
       componentDidMount() {
        this.fetchData();
      }

      
      fetchData() {
        fetch('https://restcountries.eu/rest/v2/all')
          .then((response) => response.json())
          .then((responseData) => {
            this.setState({
                data:responseData,  
              dataSource: responseData,
              loaded: true,   
              refreshing: false,
              countries: responseData
    
            });
          })
          .done();
      }
    
  // fetchData = async () => {
  //       const response = await fetch("https://restcountries.eu/rest/v2/all")
  //       const json = await response.json();
  //       this.setState({data: json});
       
  //     };

     onRefresh() {
        this.setState({
              refreshing: true,
        });
    
    
    setTimeout( () => {
    
      this.setState({
          refreshing: false,
          dataloaded:true,
        });
    
          },200);
          this.fetchData();
    
    }

renderSeparator = () =>
  <View
  style={{
    height: 1,
    width: "100%",
    backgroundColor: "#CED0CE",
    // marginLeft: "14%"
  }}
/>
keyExtractor = (item, index) => index.toString()
    oneScreensWorth = 30
  render() {
    return (
      <View style={{ flex: 1, marginTop: 25 }}>
        <StatusBar translucent={false} barStyle="default" />
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <ListItem
              text={item.currencies[0].code}
            //   selected={item === TEMP_CURRENT_CURRENCY}
              onPress={() =>this.goBack(item.currencies[0].code)}
            />
          )}
          keyExtractor={this.keyExtractor}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    );
  }
}

export default CurrencyList;