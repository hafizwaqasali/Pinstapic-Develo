import { StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'
import { height, width } from '~utills/Dimension'
import AppColors from '~utills/AppColors'
import AppFonts from '~utills/AppFonts'

let isIos = Platform.OS == "ios" ? true : false

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    storiesWrapper: {
        // height: height(8),
        width: width(100),
        marginTop: height(1),
    },
    storiesContentContainer: {
        marginHorizontal: width(1.5),
        marginVertical: height(1),
        flexDirection: "row",
        // height: height(6),
        alignItems: "center",
    },
    seprator: {
        height: "70%",
        width: width(.5),
        backgroundColor: AppColors.darkOrange,
        marginLeft: width(3),
        alignSelf: "flex-start",
        marginTop: height(.5)
    },
    itemWrapper: {
        height: !isIos ? height(73) : height(70),
        width: width(100)
    },
    imgStyling: {
        height: "100%",
        width: "100%"
    },
    contentContainerStyle: {
    },
    flatlistContainer: {},
    activityWrapper: {
        position: "absolute",
        right: width(5),
        bottom: height(25),
        height: height(26),
        width: width(17),
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: height(1)
    },
    roundContainer: {
        height: height(6),
        width: height(6),
        borderRadius: height(5),
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: AppColors.black_25
    },
    profileContainer: {
        borderColor: AppColors.sky_Blue,
        borderWidth: width(.3),
    },
    userProfileimgStyling: {
        height: "100%",
        width: "100%",
        borderRadius: height(5)
    },
    bottomSection: {
        position: "absolute",
        bottom: !isIos ? height(2) : height(5),
        width: width(100),
        height: height(20),
        paddingVertical: height(1),
        backgroundColor: AppColors.black_60,
        left: 0,
        zIndex: 1,
        borderTopLeftRadius: width(5),
        borderTopRightRadius: width(5),
        paddingHorizontal: width(3)
    },
    userNameTextStyles: {
        color: AppColors.white,
        fontFamily: AppFonts.segoe_ui_semibold,
        fontSize: width(3),
        marginBottom: height(.5)
    },
    userDetailsTextStyles: {
        color: AppColors.white_50,
        fontFamily: AppFonts.segoe_ui_semibold,
        fontSize: width(3)
    },
})

export default styles