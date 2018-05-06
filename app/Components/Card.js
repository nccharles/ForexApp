import React from 'react'
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

import styles from '../Screens/Style/ListStyle'

const Card= ({ 
    title, 
    text, 
    onPress, 
    style, 
    source, 
    text2, 
    text3, 
    baseCurrency, 
    equivalent=0, 
    containerStyle, 
    category,
    leftViewStyle
}) => (

    <TouchableOpacity style={styles.row} 
                      onPress={onPress}>
    <View style={{width: 20, backgroundColor: '#45B39D', borderRadius: 30, marginLeft: -12}}/>
    {/* <View style={{justifyContent: 'center', paddingLeft: 10}}>
        <Avatar
            medium
            rounded
            title={title}
            containerStyle={containerStyle}
            // onPress={() => console.log("Works!")}
            activeOpacity={0.7}
            style={styles.image}
            />
          <Image  style={styles.image}
                  source={source}/>
        </View> */}
        <View style={{flex: 1, marginLeft: 20, flexDirection: 'row'}}>
            <View style={{flex: 1, justifyContent: 'center'}}>
                <Text style={styles.boldLabel}>{text}</Text>
                <Text style={styles.label}>Buy: {`${text2} ${baseCurrency}`}</Text>
                <Text style={styles.label}>Sell: {`${text2} ${baseCurrency}`}</Text>
                {/* <Text style={styles.label}>{`Equivalent: ${equivalent} Rwf`}</Text> */}
            </View>
            <View style={{flex: 1, flexDirection: 'column',justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={{fontSize: 20, color: '#99A3A4', fontWeight:'bold', position: 'absolute',right: 25,}}>{category}</Text>
                <Text style={{fontSize: 18, color: '#52BE80', fontWeight:'bold', position: 'absolute',right: 25, marginTop: 45}}>{`${equivalent} Rwf`}</Text>
            </View>
        </View>
    </TouchableOpacity>
);

Card.propTypes = {
    title: PropTypes.string,
    text3: PropTypes.string,
    text2: PropTypes.number,
    category: PropTypes.string,
    equivalent: PropTypes.number,
    text: PropTypes.string,
    onPress: PropTypes.func,
    source: PropTypes.number,
    containerStyle: PropTypes.any,
    leftViewStyle: PropTypes.any,
    };
export default Card;