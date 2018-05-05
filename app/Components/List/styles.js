import { StyleSheet, Dimensions } from 'react-native';

const screenwidth = Dimensions.get('window').width
const screenheight = Dimensions.get('window').height

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  parent: {
    width: '100%',
    height: screenheight /12,
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 5,
    // paddingVertical: 1.5
    // justifyContent: 'center'
  },
  leftRound: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
    marginLeft: 5,
    marginVertical: 2.5,
    justifyContent: 'center',
  },
  leftHide: {
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    marginLeft: 5,
    justifyContent: 'center',
  },
  leftRectangular: {
    flex: 1, 
    // alignSelf: 'stretch',
    height: null, 
    width: null
  },
  center: {
    height: '100%',
    flex: 0.90,
    flexDirection: 'column',
    paddingHorizontal: 5,
    backgroundColor: 'white',
  },
  right: {
    height: '100%',
    position: 'absolute',
    paddingRight: 8,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  titleContainer: {
    justifyContent: 'center'
  },
  subTitleContainer: {
    justifyContent: 'center'
  },
  title: {
    fontWeight: '500',
    color: 'black',
    fontSize: 14
  },
  subTitle: {
    fontWeight: '500',
    color: 'gray',
    fontSize: 12
  },
  amount: {
    fontSize: 16,
    fontWeight: '600',
    color: 'rgba(0,150,0,1)'
  },
  imageContainer: {
    borderWidth: 0.5,
    width: screenwidth/ 6,
    height: screenheight /17,
    // height: 38,
    marginLeft: 5,
    marginVertical: 5,
    justifyContent: 'center'
  },
  separator: {
    height: 1,
    width: screenwidth,
    backgroundColor: "#CED0CE",
    // marginLeft: "14%"
  },

});

export default styles;