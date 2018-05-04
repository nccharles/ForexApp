import { StatusBar, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingBottom: 50,
    // paddingVertical: StatusBar.currentHeight + 10,
    // alignContent: 'center',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  inputContainer: {
    height: 48,
    flexDirection: 'row',
    width: '100%',
    // paddingHorizontal: 8,
    backgroundColor: 'white',
  },
  input: {
    height: 47,
    width: '100%',
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
    // paddingRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  footer: {
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: "#CED0CE"
  },
  separator: {
    height: '100%',
    width: StyleSheet.hairlineWidth,
    backgroundColor: "black",
  },
  list: { width: '100%', marginTop: 2, backgroundColor: 'white' }
});


export default styles;