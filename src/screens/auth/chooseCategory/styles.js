import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { height, width } from '~utills/Dimension'
const Ios = Platform.OS == "ios" ? true : false


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: height(9)
    },
    underLineStyles: {
        alignSelf: "flex-start",
        marginLeft: width(23.5),
        position: "absolute",
        top: Ios ? height(3) : height(2),
        backgroundColor: "transparent",
    },
    flashListContainer: {
        height: height(60),
        width: width(60),
        backgroundColor: "red"
    },
    ImgStyle: {

    }
})

export default styles