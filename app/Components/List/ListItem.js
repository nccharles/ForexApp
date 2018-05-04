
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, Image,
  StyleSheet, TouchableOpacity
} from 'react-native';

import { Separator, styles } from '.';

class ListItem extends Component {

  state = {
    checked: false,
    roundAvatar: false,
    title: 'CAD',
    value: 3998.2897,
    subtitle: 'Canadian Dollar',
    chevronColor: 'red'
  }
  static propTypes = {
    checked: PropTypes.bool,
    hideAvatar: PropTypes.bool,
    roundAvatar: PropTypes.bool,
    avatar: Image.propTypes.source,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    onPress: PropTypes.func,
    chevronColor: PropTypes.string,
    rightComponentText: PropTypes.string
  }

  renderAvatar = (status, round, source) => {

    return status ? round ? //Show it round
      <Image style={styles.leftRound} resizeMethod='resize'
        source={source}
      /> :  //Show it rectangular
      <Image style={styles.leftRectangular} resizeMethod='resize'
        source={source}
      /> :  //Hide it
      <Image style={styles.leftHide} resizeMode='center'
        source={source}
      />
  }
  render() {
    return (
      <View style={styles.parent}>
        {this.renderAvatar(true, this.props.roundAvatar, this.props.avatar)}
        <TouchableOpacity style={styles.center} onPress={this.props.onPress} >
          <View style={styles.titleContainer} >
            <Text style={styles.title}>
              {this.props.title || this.state.title}
            </Text>
          </View>
          <View style={styles.subTitleContainer} >
            <Text style={styles.subTitle}>
              {this.props.subtitle || this.state.subtitle}
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.right} >
          <Text style={styles.amount} >
            {this.props.rightComponentText ? this.props.rightComponentText.toString() : null}
          </Text>
        </View>
      </View>
    );
  }
}

export default ListItem;