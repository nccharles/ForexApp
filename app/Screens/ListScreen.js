import React,{Component} from 'react';
import PropTypes from 'prop-types'

// apollo things
import {withApollo, graphql, compose} from 'react-apollo'
import gql from 'graphql-tag'
import { StyleSheet, Text, View, Button, TouchableOpacity, FlatList, Image, Animated } from 'react-native';
import {Header} from 'react-native-elements'
import { FontAwesome } from '@expo/vector-icons'

// import HeaderIcon from '../Components/HeaderIcon'
import Card from '../Components/Card'
import InputButton from '../Components/InputButton'
import styles from './Style/ListStyle'


const initailState = {
  data: [],
  loading: true,
  inputedValue: 0,
  baseCurrency: 'EUR'
}

class ListScreen extends Component {

  // componentWillReceiveProps(nextProps) {
  //   console.log(nextProps)
  // }
  constructor(props) {
    super(props);
    this.state = initailState
  };



  // static navigationOptions = ({navigation})=>{
  //   return{
  //       headerTitle: 'Forex App',
  //       headerLeft: (
  //         <HeaderIcon 
  //           onPress={()=> this.props.navigation.navigate('DrawerOpen')} 
  //           name="menu"
  //           color="black" />
  //       ),
  //       headerStyle: {
  //           paddingLeft: 10,
  //           paddingRight: 10
  //           // padding: 20
  //       },
  //       headerTitleStyle: {
  //           marginLeft: 50
  //       }
  //   }
  // };

 
  _handleCurrencyInput = (value) => {
    const currencyEntered = parseInt(value)
    if (currencyEntered) { 
      this.setState({
        inputedValue: currencyEntered
      })
      return
    }
    this.setState({
      inputedValue: 0
    })
  }
  // fetchData() {
  //   fetch('https://restcountries.eu/rest/v2/all')
  //     .then(response => response.json())
  //     .then(response => {
  //       this.setState({ 
  //         data: response,
  //         loaded: true,   
  //         refreshing: false,
  //         countries: response
  //       });
  //     })
  //     .done();
      
  // }


// back code written by Luc Dev
  async componentDidMount() {
    const base = this.state.baseCurrency
    const response = await this.props.client.query(
      {
        query: fetchAllCurrencies,
        variables:{
          base: base,
        }
      }
    )
    if (response) {
      this.setState({
        data: response.data.allCurrencies,
        loading: response.data.loading,
      })
    }
    // console.log(response)
  }

  setBaseCurrency = async (currency) => {
    const {baseCurrency} = currency
    this.setState({
      ...initailState,
      baseCurrency: baseCurrency,

    })
    const response = await this.props.client.query(
      {
        query: fetchAllCurrencies,
        variables:{
          base: baseCurrency,
        }
      }
    )
    if (response) {
      this.setState({
        data: response.data.allCurrencies,
        loading: response.data.loading,
      })
    }
  }

// end of Luc Dev codes

  keyExtractor = (item, index) => index.toString()

  oneScreensWorth = 20

  render() {
    const {inputedValue} = this.state
    if(this.state.loading){
      return(
        <View>
          <Text>Loading</Text>
        </View>
      )
    }
    return (
      <View style={{flex: 1}}>
      <View style={styles.container}>
      <View style={styles.headerContainer}>
            <Text style={styles.textHead}>type the amount that you want to convert</Text>
            {/* <Animated.View style={[styles.cardContainer, {opacity: this.state.fadeValue}]}>
            </Animated.View> */}
            <InputButton  
                ListScreenRealTimeFeedBack
                // onPress={() => console.log(inputedValue)}
                onPress={() => this.props.navigation.navigate('CurrencyList', {setBaseCurrency: this.setBaseCurrency})}
                buttonText={this.state.baseCurrency}
                editable= {true}
                keyboardType="numeric"
                onChangeText={(value) => this._handleCurrencyInput(value)}
            />
          </View>
        <FlatList
          contentContainerStyle={styles.listContent}
          data={this.state.data}
          extraData={this.state}
          renderItem={({ item }) => (
            <Card 
              // source={item.image} 
              onPress={() => this.props.navigation.navigate('Details', {data: this.state.data, currentItem: [item] })}
              text={item.user.companyName} 
              text2={parseInt(item.rates)}
              baseCurrency={item.base}
              equivalent={parseInt(item.rates) * parseInt(inputedValue)}/>
          )}
          numColumns={1}
          keyExtractor={this.keyExtractor}
          initialNumToRender={this.oneScreensWorth}
          ListEmptyComponent={this.renderEmpty}
          // ItemSeparatorComponent={this.renderSeparator}
          />
      </View>
      </View>
    );
  }
}

ListScreen.propType={
  data: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.object,
    allInfoBureauses: PropTypes.object,
  }).isRequired,
  }
  

const fetchAllCurrencies = gql`
 query($base: String!){
    allCurrencies(filter:{base: $base}){
      id
      category
      base
      rates
      user{
        id
        companyName
      }
    }
  }
`
export default withApollo(ListScreen)
// export default Listcreen