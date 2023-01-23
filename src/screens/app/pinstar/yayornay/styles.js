import { StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'
import { height, width } from '~utills/Dimension'
import AppColors from '~utills/AppColors'

let isIos = Platform.OS === "ios" ? true : false

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    yayOrNayImagesStyling: {
        height: "100%",
        width: "100%",
    },
    flatlistContainer: {
        height: !isIos ? height(85) : height(80),
        width: width(100),
    },
    innerFlatlistContainer: {
        width: width(100),
        height: !isIos ? height(85) : height(80),
    },
    activityWrapper: {
        position: "absolute",
        right: width(5),
        bottom: isIos ? height(5) : height(5),
        height: height(18),
        width: width(17),
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: height(1),
    },
    roundContainer: {
        height: height(6),
        width: height(6),
        borderRadius: height(5),
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: AppColors.white_20
    },
    profileContainer: {
        borderColor: AppColors.white,
        borderWidth: width(.3),
    },
    userProfileimgStyling: {
        height: "100%",
        width: "100%",
        borderRadius: height(5)
    },
    imagesCountContainer: {
        position: "absolute",
        left: width(5),
        top: isIos ? height(2) : height(2),
        height: height(4),
        width: width(12),
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: height(1),
        backgroundColor: AppColors.white_20,
        borderRadius: width(3)
    }
})

export default styles