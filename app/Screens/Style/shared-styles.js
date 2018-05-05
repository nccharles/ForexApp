import { StatusBar, StyleSheet, Dimensions } from 'react-native';

const screenwidth = Dimensions.get('window').width
const screenheight = Dimensions.get('window').height

// export const sharedSytles = {
//   backgroundColor: 'rgba(0, 190, 0,1)',
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: sharedSytles.backgroundColor,
  },
  inputContainer: {
    height: screenheight /7,
    paddingTop: StatusBar.currentHeight,
    flexDirection: 'row',
    width: '99%',
    paddingHorizontal: 8,
    backgroundColor: 'white',
  },
  input: {
    height: 47,
    width: '99%',
    paddingHorizontal: 8,
    backgroundColor: 'white',
    fontSize: 18,
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 20,
    color: 'black',
  },
  buttonContainer: {
    height: 48,
    paddingRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  separator: {
    height: '100%',
    width: StyleSheet.hairlineWidth,
    backgroundColor: "black",
  },
  list: {
    width: '99%',
    paddingTop: 10,
    backgroundColor: 'white'
  }
});

export default styles