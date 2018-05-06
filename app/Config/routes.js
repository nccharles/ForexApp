import React from 'react'
import {TouchableOpacity} from 'react-native'
import { StackNavigator } from 'react-navigation'
import { FontAwesome } from '@expo/vector-icons'

import ListScreen from '../Screens/ListScreen'
import TabNavScreen from './tabNav'
import CurrencyList from '../Screens/CurrencyList'
import Details from '../Screens/Details'
import MapView from '../Screens/Map'
import International from '../Screens/International'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
    MapView: {screen: MapView},
    ListScreen: {screen: ListScreen},
    TabNavScreen: { screen: TabNavScreen },
    International: {screen: International},
    CurrencyList: {screen: CurrencyList},
    Details: { screen: Details}
}, {
    // headerMode: 'screen',
    initialRouteName: 'TabNavScreen',
    mode: 'modal',
    navigationOptions: {
        headerTitle: 'Forex App',
        headerStyle: {
            backgroundColor: '#00b174',
            // shadowColor: 'transparent',
            // shadowRadius: 0,
            shadowOffset: {
                height: 0,
            },
            elevation: 0,
            borderBottomWidth: 0,
            borderBottomColor: '#ffffff', 
        },
        
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
})

export default PrimaryNav
