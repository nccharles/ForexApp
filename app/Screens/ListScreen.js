import React,{Component} from 'react';
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, Button, TouchableHighlight, FlatList, Image, Animated } from 'react-native';
import {Header} from 'react-native-elements'
import { FontAwesome } from '@expo/vector-icons'

// apollo things
import {withApollo, graphql, compose} from 'react-apollo'
import gql from 'graphql-tag'

// import HeaderIcon from '../Components/HeaderIcon'
import CategoryBtn from '../Components/ButtonCategory/BtnCategory'
import Card from '../Components/Card'
import InputButton from '../Components/InputButton'
import styles from './Style/ListStyle'

const initailState = {
  data: [],
  loading: true,
  inputedValue: 0,
  baseCurrency: 'EUR',
  buyBackgroundColor: 'transparent',
  buyTextColor: '#3498DB',
  sellBackgroundColor: 'transparent',
  sellTextColor: '#3498DB',
  category: 'Buy or Sell'
}

class ListScreen extends Component {

  constructor(props) {
    super(props);
    this.state = initailState
  };

  changeBuyColor=()=>{
    this.setState({
      buyBackgroundColor: '#3498DB',
      sellBackgroundColor: 'transparent',
      category: 'Buy',
      buyTextColor: 'white',
      sellTextColor: '#3498DB',
    })
  }

  changeSellColor=()=>{
    this.setState({
      sellBackgroundColor: '#3498DB',
      buyBackgroundColor: 'transparent',
      category: 'Sell',
      sellTextColor: 'white',
      buyTextColor: '#3498DB',
    })
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
          <Text>Loading...</Text>
        </View>
      )
    }
    return (
      <View style={styles.container}>
      <View>
        {/* <View style={styles.buttonContainer}> */}

          <CategoryBtn 
                onPressBuy={this.changeBuyColor}
                onPressSell={this.changeSellColor}
                btnBuyStyle={{
                  flex: 1, 
                  backgroundColor: this.state.buyBackgroundColor, 
                  alignSelf: 'center', 
                  height: '100%',
                  width: '100%', 
                  justifyContent: 'center', 
                  borderRadius: 20,}}
                buyTextStyle={{
                  color: this.state.buyTextColor,
                  fontSize: 20,
                  fontWeight: 'bold',
                  textAlign: 'center'}}
                  btnSellStyle={{
                    flex: 1, 
                    backgroundColor: this.state.sellBackgroundColor, 
                    alignSelf: 'center', 
                    height: '100%',
                    width: '100%', 
                    justifyContent: 'center', 
                    borderRadius: 20,}}
                  sellTextStyle={{
                    color: this.state.sellTextColor,
                    fontSize: 20,
                    fontWeight: 'bold',
                    textAlign: 'center'}}/>
        {/* </View>   */}
          <InputButton
              BtnStyle={styles.InputButton}
              BtnTextStyle={styles.buttonText}
              text='Enter Amount ...'
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
                // containerStyle={{backgroundColor: colors[index%colors.length]}}
                // source={item.image} 
                onPress={() => this.props.navigation.navigate('Details', {data: this.state.data, currentItem: [item] })}
                text={item.user.companyName} 
                text2={parseInt(item.rates)}
                baseCurrency={item.base}
                equivalent={parseInt(item.rates) * parseInt(inputedValue)}
                category={this.state.category}/>
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