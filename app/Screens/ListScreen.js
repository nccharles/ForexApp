import React,{Component} from 'react';
import PropTypes from 'prop-types'

// apollo things
import {withApollo, graphql, compose} from 'react-apollo'
import gql from 'graphql-tag'
import { StyleSheet, Text, View, Button, TouchableHighlight, FlatList, Image, Animated } from 'react-native';
import {Header} from 'react-native-elements'
import { FontAwesome } from '@expo/vector-icons'

// import HeaderIcon from '../Components/HeaderIcon'
import Card from '../Components/Card'
import InputButton from '../Components/InputButton'
import styles from './Style/ListStyle'

const colors= [
  '#7FB3D5','#A569BD','#F7DC6F','#E74C3C','#EB9CA8', '#7C878E',
  '#8A004F','#000000','#10069F','#00a3e0','#4CC1A1'
]
const initailState = {
  data: [],
  loading: true,
  inputedValue: 0,
  baseCurrency: 'EUR',
  backgroundColor: '#3498DB'
}

class ListScreen extends Component {

  constructor(props) {
    super(props);
    this.state = initailState
  };

  changeColor=()=>{
    this.setState({backgroundColor: '#F1948A'})
    // console.log(this.state.backgroundColor)
    // alert('boom clicking')
  }
 
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
      <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.buttonContainer}>
          <TouchableHighlight 
              onPress={this.changeColor} 
              style={{flex: 1, backgroundColor: this.state.backgroundColor, alignSelf: 'center', alignContent: 'center'}}>
            <Text style={styles.textHead}>Buy</Text>
          </TouchableHighlight>
          <View style={{width: 2, backgroundColor: 'skyblue'}}/>
          <TouchableHighlight
              onPress={this.changeColor} 
              style={{flex: 1, backgroundColor: this.state.backgroundColor, alignSelf: 'center', alignContent: 'center'}}>
            <Text style={styles.textHead}>Sell</Text>
          </TouchableHighlight>
        </View>  
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
            keyExtractor={this.keyExtractor}
            renderItem={({ item, index }) => (
              <Card 
                title={item.user.companyName.substring(0, 2)}
                containerStyle={{backgroundColor: colors[index%colors.length]}}
                // source={item.image} 
                onPress={() => this.props.navigation.navigate('Details', {data: this.state.data, currentItem: [item] })}
                text={item.user.companyName} 
                text2={parseInt(item.rates)}
                baseCurrency={item.base}
                equivalent={parseInt(item.rates) * parseInt(inputedValue)}/>
            )}
            numColumns={1}
            initialNumToRender={this.oneScreensWorth}
            ListEmptyComponent={this.renderEmpty}
            // ItemSeparatorComponent={this.renderSeparator}
          />
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