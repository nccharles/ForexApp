import React,{Component} from 'react';
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, Button, TouchableHighlight, FlatList, Image, Animated } from 'react-native';

import styles from './styles'

class Category extends Component {

  render() {
      const {onPressBuy, onPressSell, btnBuyStyle, btnSellStyle, buyTextStyle, sellTextStyle} = this.props
    return (
        <View style={styles.buttonContainer}>
          <TouchableHighlight 
              onPress={onPressBuy} 
              style={btnBuyStyle}>
            <Text style={buyTextStyle}>
                Buy
            </Text>
          </TouchableHighlight>
          {/* <View style={{width: 2, backgroundColor: '#3498DB'}}/> */}
          <TouchableHighlight
              onPress={onPressSell} 
              style={btnSellStyle}>
            <Text style={sellTextStyle}>
              Sell
            </Text>
          </TouchableHighlight>
        </View> 
    );
  }
}

Category.propTypes = {
    onPressBuy: PropTypes.func,
    onPressSell: PropTypes.func,
    btnBuyStyle: PropTypes.any,
    btnSellStyle: PropTypes.any,
    buyTextStyle: PropTypes.any,
    sellTextStyle: PropTypes.any,
}
  

export default Category