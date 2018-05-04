import { StyleSheet } from 'react-native';
import { Constants } from 'expo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    height: '100%',
    width: '100%',
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  infoWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    flex: 1
  },
});

export default styles;