import React from 'react'
import {View, Text, TouchableOpacity, TextInput} from 'react-native'
import PropTypes from 'prop-types'

import styles from './Style/InputButtonStyle'

const InputWithButton = (props) => {
    const {
        onPress, 
        buttonText, 
        editable = true, 
        text, 
        onChangeText, 
        value, 
        name, 
        BtnTextStyle, 
        BtnStyle} = props

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                    // style={styles.buttonContainer}
                    style={BtnStyle}
                    onPress={onPress}>
                <Text 
                    // style={styles.buttonText}
                    style={BtnTextStyle}
                >
                    {buttonText}
                </Text>
            </TouchableOpacity>
            <View style={styles.border}/>
            <TextInput  
            style={styles.input}
            placeholder={text}
            autoCapitalize={'none'}
            returnKeyType={'done'}
            autoCorrect={false}
            placeholderTextColor='#99A3A4'
            underlineColorAndroid='transparent'
            onChangeText = {onChangeText}
            value = {value} 
            {...props}/>
        </View>
    )
}

InputWithButton.propTypes = {
    onPress: PropTypes.func,
    BtnStyle: PropTypes.any,
    BtnTextStyle: PropTypes.any,
    ButtonText: PropTypes.string,
    editable: PropTypes.bool,
    text: PropTypes.string,
    onChangeText: PropTypes.func,
    value: PropTypes.any,
    name: PropTypes.any
}

export default InputWithButton