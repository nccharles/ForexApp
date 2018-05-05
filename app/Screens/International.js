import React, { Component } from 'react';
import {
  View, Text, TextInput, FlatList, ActivityIndicator,
  StatusBar, StyleSheet, ScrollView, Platform
} from 'react-native';
import { SearchBar } from "react-native-elements";
import { Ionicons, Entypo } from '@expo/vector-icons'
import ActionButton from 'react-native-action-button';

import InputButton from '../Components/InputButton'
import { Separator } from '../Components/List';
import ListItem from '../Components/List/ListItem';
import { currencies, rates, flagUrl, BTC } from '../Assets/resources/data';
import { LastConverted } from '../Components/Text';
import styles from './Style/shared-styles';


let results = [];
class International extends Component {
 constructor(props) {
   super(props);
   this.state = {
     baseCurrency: currencies[0].code,
     userEntered: 1,
     currencies,
     rates
   };
 };

 componentWillMount() {
   this.convertCurrency(this.state.userEntered, this.state.baseCurrency);
 };

 convertCurrency(userEntered, baseCurrency) {
   const { rates } = this.state.rates
   results = [];
   if (this.state.rates) {
     Object.keys(rates).forEach((quoteCurrency) => {
       results.push((rates[quoteCurrency] / rates[baseCurrency]) * userEntered);
     })
     for (let index in currencies) {
       currencies[index].res = results[index].toFixed(2)
     }
   }
   this.setState({ currencies, userEntered, baseCurrency })
 };

  render() {
    let tasks = {
      name: Platform.OS === 'ios' ? `${Platform.OS}-done-all` : 'md-done-all',
      size: 25,
      color: 'white',
    }
    // console.log(currencies)
    return (
      <View style={styles.container}>
      <View style={styles.inputContainer}>
        <InputButton  
              ListScreenRealTimeFeedBack
              placeholder='Enter amount...'
              defaultValue='1.00'
              buttonText={this.state.baseCurrency}
              editable= {true}
              keyboardType="numeric"
              onChangeText={(value) => this.convertCurrency(value, this.state.baseCurrency)}
          />
      </View>
       <FlatList
         style={styles.list}
         data={this.state.currencies}
         renderItem={({ item }) => (
           <ListItem
             title={item.code}
             subtitle={item.name}
             hideAvatar={false}
             roundAvatar={false}
             avatar={item.code === 'BTC' ? { uri: BTC }
               : { uri: `${flagUrl}/${item.flag}.png` }}
             onPress={() => this.convertCurrency(this.state.userEntered, item.code)}
             rightComponentText={item.res}
           />
         )}
         keyExtractor={item => item.code}
         ItemSeparatorComponent={() => <Separator />}
         // ListFooterComponent={() => <Footer />}
         keyboardShouldPersistTaps='never'
         extraData={this.state}
         keyExtractor={(item) => item.code}
         initialNumToRender={50}
         onEndReachedThreshold={30}
       />
       <LastConverted lastUpdated={rates.date} />

      </View>
    );
  }
}

export default International;
