import React from 'react'
import {View, Text, TouchableOpacity, TextInput} from 'react-native'
import PropTypes from 'prop-types'
// import color from 'color'

import styles from './Style/InputButtonStyle'

const InputWithButton = (props) => {
    const {onPress, buttonText, editable = true, text, onChangeText, value, name} = props
    // const underlayColor = '$lightGray'
    // const ContainerStyles = [styles.container]
    // if (editable === false){
    //     ContainerStyles.push(styles.ContainerStylesDisabled)
    // }
    // const buttonTextStyles = [styles.buttonText];
    // if (props.textColor) {
    //     buttonTextStyles.push({ color: props.textColor });
    // }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonContainer}
                                onPress={onPress}>
                <Text style={styles.buttonText}>
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
    ButtonText: PropTypes.string,
    editable: PropTypes.bool,
    text: PropTypes.string,
    onChangeText: PropTypes.func,
    value: PropTypes.any,
    name: PropTypes.any
}

export default InputWithButton