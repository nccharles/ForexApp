import React, { Component } from 'react';
import {Image} from 'react-native'
import { Location, Permissions } from 'expo';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions'
import {
  Platform, Text, View, StyleSheet, Dimensions
} from 'react-native';

import UserLocation from '../Assets/MapImage/user.png'
import styles from './Style/MapStyle';
// import { RunInfo, RunInfoNumeric } from '../components/footer';


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
    selectedMarker: ''
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
      {
        latitude: -1.9349459,
        longitude: 30.0937492,
      },
      {
        latitude: -2.0373686,
        longitude: 30.3132083,
      },
      {
        latitude: -1.9444369,
        longitude: 30.0529602,
      },
      {
        latitude: -1.953317,
        longitude: 30.1007112,
      },
      {
        latitude: -1.949344,
        longitude: 30.060989,
      },
      {
        latitude: -1.945372,
        longitude: 30.125211,
      },
      {
        latitude: -1.943378,
        longitude: 30.059138,
      },
      {
        latitude: -1.941366,
        longitude: 30.128402,
      }
      ,
      {
        latitude: -1.943371,
        longitude: 30.058922,
      },
      {
        latitude: -1.944948,
        longitude: 30.061040,
      }
    ]
   
    return (
      <View>
        <MapView.Marker coordinate={coordinates[0]} title={"Your location"} image={UserLocation}/>
          {/* <Image source={UserLocation} style={{width: 200, height: 200}}/>
        </MapView.Marker> */}
        <MapView.Marker coordinate={coordinates[1]} onPress={() => {this.setState({selectedMarker:coordinates[1]})}} title={"Bravia Forex Bureau"} />
        <MapView.Marker coordinate={coordinates[2]} onPress={() => {this.setState({selectedMarker:coordinates[2]})}} title={"Diamonds Forex Bureau"} />
        <MapView.Marker coordinate={coordinates[3]} onPress={() => {this.setState({selectedMarker:coordinates[3]})}} title={"RG Forex Bureau"} />
        <MapView.Marker  coordinate={coordinates[4]} onPress={() => {this.setState({selectedMarker:coordinates[4]})}} title={"Prime Forex Bureau"}/>
        <MapView.Marker coordinate={coordinates[5]} onPress={() => {this.setState({selectedMarker:coordinates[5]})}} title={"La Fortune Forex Bureau"} />
        <MapView.Marker coordinate={coordinates[6]} onPress={() => {this.setState({selectedMarker:coordinates[6]})}} title={"Welcome Forex Bureau"} />
        <MapView.Marker coordinate={coordinates[7]} onPress={() => {this.setState({selectedMarker:coordinates[7]})}} title={"Muhabura Forex Bureau"} />
        <MapView.Marker coordinate={coordinates[8]} onPress={() => {this.setState({selectedMarker:coordinates[8]})}} title={"Rebex Forex Bureau"} />
        <MapView.Marker coordinate={coordinates[9]} onPress={() => {this.setState({selectedMarker:coordinates[9]})}} title={"Shahanshah Forex Bureau Ltd"} />
        <MapView.Marker coordinate={coordinates[10]} onPress={() => {this.setState({selectedMarker:coordinates[10]})}} title={"Dahabshiil"} />
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
    console.log(this.state.selectedMarker)
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
export default MapScreen