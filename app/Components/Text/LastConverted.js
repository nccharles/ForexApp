import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-native';
import moment from 'moment';

import styles from './styles';

const LastConverted = ({ date, base, quote, conversionRate }) => (
  <View
    style={{
      height: 20, backgroundColor: 'cyan', flex: 1,
      alignContent: 'center', justifyContent: 'center', marginTop: 20,
      borderRadius: 10
    }}
  >
    <Text
      style={styles.smallText}>
      1 {base} = {conversionRate} {quote} as of {moment(date).format('MMMM D, YYYY')}
    </Text>
  </View>
);

LastConverted.propTypes = {
  date: PropTypes.object,
  base: PropTypes.string,
  quote: PropTypes.string,
  conversionRate: PropTypes.number,
};

export default LastConverted;
