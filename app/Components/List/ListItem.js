import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, Image,
  StyleSheet, TouchableOpacity
} from 'react-native';

import { Separator, styles } from '.';

class ListItem extends Component {

  static propTypes = {
    hideAvatar: PropTypes.bool,
    roundAvatar: PropTypes.bool,
    avatar: Image.propTypes.source,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    onPress: PropTypes.func,
    rightComponentText: PropTypes.string
  }

  renderAvatar = (hiden, round, source) => {
    if (!hiden) {
      if (round) {
        return (
          <Image style={styles.leftRound} resizeMethod='resize' source={source} />
        )
      } else {
        return (
          <View style={styles.imageContainer}>
            <Image style={styles.leftRectangular} resizeMode="stretch" source={source} />
          </View>
        )
      }
    } else { }
  };

  render() {
    return (
      <View style={styles.parent}>
        {this.renderAvatar(
          this.props.hideAvatar,
          this.props.roundAvatar, this.props.avatar
        )}
        <TouchableOpacity style={styles.center} onPress={this.props.onPress} >
          <View style={styles.titleContainer} >
            <Text style={styles.title}>
              {this.props.title}
            </Text>
          </View>
          <View style={styles.subTitleContainer} >
            <Text style={styles.subTitle}>
              {this.props.subtitle}
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.right} >
          <Text style={styles.amount} >
            {this.props.rightComponentText ? this.props.rightComponentText.toString()
              : null
            }
          </Text>
        </View>
      </View>
    );
  }
}

export default ListItem;