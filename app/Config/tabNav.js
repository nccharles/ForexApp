import React from 'react'
import {Platform, Image} from 'react-native'
import { TabNavigator, TabBarBottom } from 'react-navigation'
import { FontAwesome } from '@expo/vector-icons'

import MapView from '../Screens/Map'
import CurrencyList from '../Screens/Home'
import ListScreen from '../Screens/ListScreen'

import location from '../Assets/TabImage/location-map.png'
import listBureaus from '../Assets/TabImage/bank.png'
import globe from '../Assets/TabImage/grid.png'

const TabNavigationScreen = TabNavigator({
    MapView: {screen: MapView},
    ListScreen: {screen: ListScreen},
    CurrencyList: {screen: CurrencyList},
    },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        if (routeName === 'MapView') {
          iconName = location
        } 
        else if(routeName === 'ListScreen') {
          iconName = listBureaus
        }
        else if (routeName === 'CurrencyList'){
            iconName = globe
        }
    
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Image 
                    source={iconName} 
                    tintColor={tintColor} 
                    resizeMode='center' 
                    style={{width: 40, height: 40, flex: 1}}/>
      }
    }),
    tabBarOptions: {
      activeTintColor: '#005464',
      inactiveTintColor: Platform.OS === 'ios' ? '#00b174' : 'white',
      labelStyle: {
        fontSize: 10,
        color: 'transparent',
        textAlign: 'center'
      },
      style: {
        backgroundColor: Platform.OS === 'ios' ? '#EFEFF2' : '#00b174',
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        justifyContent: 'center'
      }
    },
    tabBarComponent: TabBarBottom,
    // tabBarPosition: 'bottom'
  })
export default TabNavigationScreen