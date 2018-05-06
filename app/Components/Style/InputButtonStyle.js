import {StyleSheet, Dimensions} from 'react-native'

const INPUT_HEIGHT = 48
const BORDER_RADIUS= 4
const screenwidth = Dimensions.get('window').width
const screenheight = Dimensions.get('window').height

export default StyleSheet.create({
    // $buttonBackgroundColorBase: '$white',
    // $buttonBackgroundColorModifier: 0.1,

    container:{
        // backgroundColor: '#CCD1D1',
        width: screenwidth -20,
        height: INPUT_HEIGHT,
        borderRadius: BORDER_RADIUS,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center'
        // marginVertical: 10,
        // margin: 10,
        // marginHorizontal: 20
    },
    // buttonContainer:{
    //     height: INPUT_HEIGHT,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     borderWidth: 1,
    //     borderColor: '#CCD1D1',
    //     borderRadius: 10
    //     // borderTopLeftRadius: BORDER_RADIUS,
    //     // borderBottomLeftRadius: BORDER_RADIUS,
    //     // backgroundColor: '#CCD1D1'
    // },
    // buttonText:{
    //     fontWeight: '600',
    //     fontSize: 20,
    //     paddingHorizontal: 16,
    //     color: '#5499C7'
    // },
    input:{
        height: INPUT_HEIGHT,
        flex: 1,
        fontSize: 18,
        paddingHorizontal: 8,
        color: 'grey',
        borderWidth: 1,
        borderColor: '#CCD1D1',
        borderRadius: 10
        // borderWidth: 2
    },
    border:{
        height: INPUT_HEIGHT,
        width: StyleSheet.hairlineWidth,
        borderColor: 'black'
    },
    ContainerStylesDisabled: {
        backgroundColor: 'grey'
    },

})