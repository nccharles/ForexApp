
import React, { Component } from 'react';
import { Platform, StyleSheet, StatusBar } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons'
import ActionButton from 'react-native-action-button';

import { styles } from '.';


class HorizontalFAB extends Component {

  constructor(props) {
    super(props);

    this.state = {
      iconColor: 'rgba(0, 255, 255,1)',
      fabActive: false
    }
  }
  handleIcon = () => {
    const { iconColor } = this.state
    return (
      <Entypo size={50} name='app-store' color={iconColor}
      />
    )
  };

  render() {
    let iconProps = {
      task: {
        name: Platform.OS === 'ios' ? `${Platform.OS}-create` : 'md-create',
        size: 25,
        color: 'white',
      },
      notify: {
        name: Platform.OS === 'ios' ? `${Platform.OS}-notifications` : 'md-notifications',
        size: 25,
        color: 'white',
      },
      tasks: {
        name: Platform.OS === 'ios' ? `${Platform.OS}-done-all` : 'md-done-all',
        size: 25,
        color: 'white',
      }
    }
    return (
      <ActionButton buttonColor="rgba(0, 152, 0,1)"
        position='right' offsetX={10} offsetY={StatusBar.currentHeight + 60}
        active={this.state.fabActive}
        verticalOrientation="down"
        onPress={}
        renderIcon={() => <Ionicons {...iconProps.tasks} />}
      >
        {/* <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
          <Ionicons {...iconProps.task} />
        </ActionButton.Item>
        <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => { }}>
          <Ionicons {...iconProps.notify} />
        </ActionButton.Item>
        <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => { }}>
          <Ionicons {...iconProps.tasks} />
        </ActionButton.Item> */}
      </ActionButton>
    );
  }
}

export default HorizontalFAB;
