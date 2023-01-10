import { Platform, StyleSheet, Text, View } from 'react-native'
import AppColors from '~utills/AppColors'
import AppFonts from '~utills/AppFonts'
import { height, width } from '~utills/Dimension'
const Ios = Platform.OS == "ios" ? true : false


const styles = StyleSheet.create({
    container: {
        // height: height(100)
    },
    mapView: {
        height: Ios ? height(88) : height(92)
    },
    BottomSlider: {
        borderTopRightRadius: width(5),
        borderTopStartRadius: width(5),
        height: Ios ? height(20) : height(20),
        width: width(100),
        backgroundColor: "white",
        position: "absolute",
        bottom: 0,
        zIndex: 1000,
        shadowColor: "#000",
        shadowOffset: {
            width: 6,
            height: -6,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    kmTextStyles: {
        textAlign: "center",
        alignSelf: "center",
        marginTop: height(1),
        fontFamily: AppFonts.segoe_ui_medium,
        fontSize: width(3.75)
    },
    slider: {
        marginHorizontal: width(8),
    },
    thumbStyle: {
        backgroundColor: AppColors.darkOrange,
        borderColor: AppColors.white,
        borderWidth: width(.4),
    },
    trackStyle: {
        backgroundColor: AppColors.dark_Grey
    },
    topSearchBar: {
        alignSelf: "center",
        position: "absolute",
        zIndex: 10000
    },
    Searchbar: {
        backgroundColor: AppColors.blueBackground,
        borderRadius: width(4),
    },
    searchinputViewStyle: {
    }
})

export default styles