import { StatusBar, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 50,
    paddingVertical: StatusBar.currentHeight + 10,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  inputContainer: {
    height: 48,
    flexDirection: 'row',
    width: '95%',
    paddingHorizontal: 8,
    backgroundColor: 'white',
  },
  input: {
    height: 47,
    width: '95%',
    paddingHorizontal: 8,
    backgroundColor: 'white',
    fontSize: 18,
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 20,
    paddingHorizontal: 8,
    color: 'black',
  },
  footer: {
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: "#CED0CE"
  }
});