import { StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'
import { height, width } from '~utills/Dimension'
import AppColors from '~utills/AppColors'

const isIos = Platform.OS == "ios" ? true : false

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.blueBackground,
        width: width(100),
        height: height(100)
    },
    modalWrapper: {
        flex: 1,
        alignItems: "center",
    },
    flashListContainer: {
        paddingHorizontal: width(4),
        height: height(100),
        width: width(100),
        paddingBottom: height(8),
        alignItems: "center"

    },
    elementStyle: {
        marginVertical: height(1.3),
        marginHorizontal: width(2)
    },

    // image View 

    Imgcontainer: {
        height: 100,
        width: 100,
        backgroundColor: AppColors.white_30,
        borderRadius: width(5),
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
    },
    imgStyles: {
        height: 100,
        width: 100,
        borderRadius: width(5),
    },
    overLay: {
        position: "absolute",
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: AppColors.parrotGreen_20
    },
    bottomBtnContainer: {
        position: "absolute",
        bottom: isIos ? height(14) : height(10)
    },
    selectionBarContainer: {
        backgroundColor: AppColors.white_10,
        width: width(100),
        height: height(5),
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: width(7.5),
        justifyContent: "space-between"
    },
    LeftItemwrapper: {
        width: width(40),
        alignItems: "center",
        borderRadius: width(10),
        paddingVertical: height(.3)
    },
    RightItemwrapper: {
        width: width(40),
        alignItems: "center",
        borderRadius: width(10),
        paddingVertical: height(.3)
    },
})

export default styles