import React, { Component } from 'react';
import { Location, Permissions } from 'expo';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions'
import {
  Platform, Text, View, StyleSheet, Dimensions
} from 'react-native';
import styles from './Style/MapStyle';
// import { RunInfo, RunInfoNumeric } from '../components/footer';


let { width, height } = Dimensions.get('window')
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.00772
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

const locOptions = {
  enableHighAccuracy: true,
  distanceInterval: 3
}
const APIKEY= 'AIzaSyB2L8kbuQG1j0XAeDuYoHm_Ql-8fwRGSms';
class MapScreen extends Component {

  state = {
    coords: {},
  }

  logData = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status === 'granted') {
      const APIKEY= await Location.setApiKey('AIzaSyB2L8kbuQG1j0XAeDuYoHm_Ql-8fwRGSms');
      await Location.setApiKey('AIzaSyB2L8kbuQG1j0XAeDuYoHm_Ql-8fwRGSms');
      await Location.watchPositionAsync(
        locOptions,
        (coords) => this.setState(coords)
      );
    }else{
      return alert('Enable to Access your location');
    }
  }

  componentWillUnmount() {
    Location.watchHeadingAsync().remove()
  }

  renderUserLocation = () => {

    const { longitude, latitude } = this.state.coords
    const coordinates=[
      {
        latitude: -1.9793953,
        longitude: 30.1053328,
      },
      {
        latitude: latitude,
        longitude: longitude,
      }

    ]
    return (
      <View>
      <MapView.Marker coordinate={coordinates[0]} title={"Isange Group Ltd, Kigali"}/>
      <MapView.Marker coordinate={coordinates[1]} title={"Your location"}/>
      <MapViewDirections 
      origin={coordinates[1]}
      destination={coordinates[0]}
      strokeWidth= {3}
      apikey={APIKEY}
      strokeColor="#006442"
      />
     </View>
    );
  }


  render() {
    this.logData();
    const { longitude, latitude,speed } = this.state.coords
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
        {/* <View style={styles.infoWrapper}>
          <RunInfoNumeric title='Distance' unit='Km'
            ref={(info) => this.state.distanceInfo = info}
          />
          <RunInfoNumeric title='Speed' unit='Km/h'
            ref={(info) => this.state.speedInfo = info}
          />
          <RunInfo title='Direction' value='NE'
            ref={(info) => this.directionInfo = info}
          />
        </View> */}
      </View>

    );
  }
}

export default MapScreen;