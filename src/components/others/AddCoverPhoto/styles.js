import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppColors from '../../../utills/AppColors'
import { height, width } from '~utills/Dimension';


const styles = StyleSheet.create({
    container: {
        borderColor: "rgba(255, 255, 255, .2)",
        backgroundColor: AppColors.white_20,
        borderWidth: width(.2),
        height: height(15.625),
        width: height(15.625),
        borderRadius: height(7.8125),
        alignItems: "center",
        justifyContent: "center",
    },
    imgStyle: {
        height: height(4),
        width: width(8)
    },
    selectedImage: {
        height: "100%",
        width: "100%",
        borderRadius: height(7.8125),
    },
    imageSelected: {
        borderColor: AppColors.sky_Blue,
        borderWidth: width(.5),
    },
    cameraStyles: {
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: height(4)
    },
    blackEffect: {
        height: height(15),
        width: height(15),
        backgroundColor: "rgba(0,0,0,.4)",
        borderRadius: height(7.8125),
        position: "absolute",
        bottom: 0,
    },
    squareShape: {
        height: height(14.5),
        width: height(15),
        borderRadius: width(2)
    },
    squareBlackEffect: {
        height: height(14.5),
        width: height(15),
        backgroundColor: "rgba(0,0,0,.4)",
        borderRadius: width(2),
        position: "absolute",
        bottom: 0,
    },
    btnStyles: {
        backgroundColor: AppColors.white_30,
        marginTop: height(4)
    },
})
export default styles