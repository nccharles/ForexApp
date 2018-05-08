import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native'
import { Location, Permissions } from 'expo';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions'
import {
  Platform, Text, View, StyleSheet, Dimensions
} from 'react-native';
import {withApollo, graphql, compose} from 'react-apollo'
import gql from 'graphql-tag';
import UserLocation from '../Assets/MapImage/user.png'
import styles from './Style/MapStyle';


let { width, height } = Dimensions.get('window')
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.07003
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO
const locOptions = {
  enableHighAccuracy: true,
  distanceInterval: 3
}
const APIKEY = 'AIzaSyB2L8kbuQG1j0XAeDuYoHm_Ql-8fwRGSms';
class MapScreen extends Component {
  state = {
    coords: {},
    selectedMarker: '',
    data:[],
    loading: false
  }
  logData = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status === 'granted') {
      const APIKEY = await Location.setApiKey('AIzaSyB2L8kbuQG1j0XAeDuYoHm_Ql-8fwRGSms');
      await Location.setApiKey('AIzaSyB2L8kbuQG1j0XAeDuYoHm_Ql-8fwRGSms');
      await Location.watchPositionAsync(
        locOptions,
        (coords) => this.setState(coords)
      );
    } else {
      return alert('Enable to Access your location');
    }
  }
  async componentWillMount() {
    const response = await this.props.client.query(
      {
        query: fetchAllLocations,
    //     variables:{
    //       latitude:latitude,
    // longitude:longitude,
    // user:{
    //   companyName:companyName
    // }
    //     }
      }
    )
    if (response) {
      this.setState({
        data: response.data.allLocations,
        loading: response.data.loading,
      })
    }
    console.log(this.state.data)
  }
  componentWillUnmount() {
    Location.watchHeadingAsync().remove()
  }
  renderUserLocation = () => {
    const { longitude, latitude } = this.state.coords
    const coordinates = [
      {
        latitude: latitude,
        longitude: longitude,
      },
      // {
      //   latitude: -1.9349459,
      //   longitude: 30.0937492,
      // },
      // {
      //   latitude: -2.0373686,
      //   longitude: 30.3132083,
      // },
      // {
      //   latitude: -1.9444369,
      //   longitude: 30.0529602,
      // },
      // {
      //   latitude: -1.953317,
      //   longitude: 30.1007112,
      // },
      // {
      //   latitude: -1.949344,
      //   longitude: 30.060989,
      // },
      // {
      //   latitude: -1.945372,
      //   longitude: 30.125211,
      // },
      // {
      //   latitude: -1.943378,
      //   longitude: 30.059138,
      // },
      // {
      //   latitude: -1.941366,
      //   longitude: 30.128402,
      // }
      // ,
      // {
      //   latitude: -1.943371,
      //   longitude: 30.058922,
      // },
      // {
      //   latitude: -1.944948,
      //   longitude: 30.061040,
      // }
    ]
    const DbCordinate=[
      {
        latitude: this.state.data[0].latitude,
        longitude: this.state.data[0].longitude
      }
    ]

    return (
      <View>
        <MapView.Marker coordinate={coordinates[0]} title={"Your location"} image={UserLocation} />
        
        <MapView.Marker coordinate={DbCordinate[0]} onPress={() => { this.setState({ selectedMarker: DbCordinate[0] }) }} title={"Bravia Forex Bureau"} />
       <MapViewDirections
          origin={coordinates[0]}
          destination={this.state.selectedMarker}
          strokeWidth={5}
          apikey={APIKEY}
          strokeColor="#006442"
        />
      </View>
    );
  }
  render() {
    this.logData();
    const { longitude, latitude, speed } = this.state.coords
    return (
      <View style={styles.container} >
        {
          latitude &&
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: latitude,
              longitude: longitude,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            }}
          >
            {this.renderUserLocation()}
          </MapView>
        }
      </View>
    );
  }
}
MapScreen.propType = {
  data: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.object,
    allLocations: PropTypes.object,
  }).isRequired,
}
const fetchAllLocations = gql`
query{
  allLocations{
    latitude
    longitude
    user{
      companyName
    }
  }
}
`
export default withApollo(MapScreen)