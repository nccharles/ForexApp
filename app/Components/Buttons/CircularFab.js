
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons'
import ActionButton from 'react-native-circular-action-menu';

import { styles } from '.';


class CircularFAB extends Component {

  constructor(props) {
    super(props);

    this.state = {
      iconColor: 'rgba(0, 255, 255,1)'
    }
  }
  handleIcon = () => {
    const { iconColor } = this.state
    return (
      <Entypo size={50} name='app-store' color={iconColor}
      />
    )
  }
  render() {
    return (
      <ActionButton
        buttonColor="rgba(0, 151, 0,1)"
        radius={90} position='right'
        icon={this.handleIcon()}
        onPress={() => this.setState({ iconColor: '#fff' })}
        offsetX={30}
        offsetY={30}
      >
        <ActionButton.Item buttonColor='#9b59b6'
          onPress={() => console.log("notes tapped!")}
          degrees={300}
        >
          <Entypo name="beamed-note"
            style={styles.actionButtonIcon}
            size={20}
          />
        </ActionButton.Item>
        <ActionButton.Item buttonColor='#3498db'
          onPress={() => { }}
        >
          <Entypo name="bell"
            style={styles.actionButtonIcon}
            size={20}
          />
        </ActionButton.Item>
        <ActionButton.Item buttonColor='#1abc9c'
          onPress={() => { }}
        >
          <Entypo name="battery"
            style={styles.actionButtonIcon}
            size={20}
          />
        </ActionButton.Item>
      </ActionButton>
    );
  }
}

export default CircularFAB;
