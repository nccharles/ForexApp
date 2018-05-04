import PropTypes from 'prop-types';
import React from 'react';
import { View, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'

import styles from './Style/ListItemStyle'

const Icon = ({ visible, checkmark, iconBackground }) => {
  if (visible) {
    const iconStyles = 'transparent';
    if (visible) {
      iconStyles.replace('transparent', '#4F6D7A');
    }
    // if (iconBackground) {
    //   iconStyles.push({ backgroundColor: iconBackground });
    // }
    return (
      <View>
        {checkmark
          ? <FontAwesome
            name="check-circle"
            size={30}
            color={iconStyles}
            // style={styles.checkIcon}
            resizeMode="contain"
          />
          : null}
      </View>
    );
  }

  return <View style={styles.icon} />;
};

Icon.propTypes = {
  visible: PropTypes.bool,
  checkmark: PropTypes.bool,
  iconBackground: PropTypes.string,
};

export default Icon;