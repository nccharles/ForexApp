// eslint-disable 
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FlatList, StatusBar, View } from 'react-native';

import { ListItem, Separator } from '';

import { rates, currencies } from '../Assets/resources/data';


class CurrencyList extends Component {

  handlePress = (currency) => {
    this.props.navigation.navigate('Converter', { currency })
    console.log(currency)
  };

  render() {

    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent={false} barStyle="default" />
        <FlatList
          data={abrev}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              // selected={item === comparisonCurrency}
              onPress={() => this.handlePress(item)}
              iconBackground='#ff5587'
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

export default CurrencyList;
