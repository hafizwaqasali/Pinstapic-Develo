import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { height, width } from '~utills/Dimension'
import AppColors from '~utills/AppColors'
import AppFonts from '~utills/AppFonts'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    storiesContentContainer: {
        marginHorizontal: width(1.5),
        marginVertical: height(1),
        flexDirection: "row",
        height: height(6)
    },
    userProfileWrapper: {
        paddingHorizontal: width(5),
        height: height(14),
    },
    seprator: {
        height: height(6),
        width: width(.5),
        backgroundColor: AppColors.darkOrange,
        marginLeft: width(3)
    },
    storiesWrapper: {
        height: height(8),
        width: width(100),
    },
    containerStyles: {
        marginTop: height(2),
    },
    emptyBoxImg: {
        tintColor: AppColors.white_50,
        alignSelf: "center",
        marginBottom: height(1.5)
    },
    lookbookContainer: {
        height: height(60),
        justifyContent: "center",
        alignItems: "center",
    },
    YayorNayContainer: {
        height: height(60),
        justifyContent: "center",
        alignItems: "center"
    },
    myClosetContainer: {
        height: height(60),
        justifyContent: "center",
        alignItems: "center"
    },
    btnStyles: {
        backgroundColor: AppColors.white_30,
        marginTop: height(3)
    },
    myLookbooksContainer: {
        flex: 1,
        alignItems: "center",
    },
    flatListItemWrapper: {
        marginHorizontal: width(3),
        marginBottom: height(1.5),
    },
    editLookbooksBtn: {
        position: "absolute",
        bottom: height(1.8),
        paddingVertical: height(.5)
    },
    btnTextStyle: {
        fontFamily: AppFonts.segoe_ui_bold,
    },
    myYayNayContainer: {
        height: height(60),
        alignItems: "center",
    },
    imgStyling: {
        height: "100%",
        width: "100%"
    },
    itemWrapper: {
        height: height(60),
        width: width(100)
    },
    contentContainerStyle: {
        backgroundColor: "red"
    },
    editYayorNayBtn: {
        position: "absolute",
        bottom: height(5),
        paddingVertical: height(.5)
    },
    likeContainer: {
        backgroundColor: AppColors.white,
        height: height(4),
        width: height(4),
        position: "absolute",
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: width(5),
        alignContent: "center",
        right: width(3.5),
        top: height(2)
    },
    likePercentText: {
        // fontFamily: AppFonts.segoe_ui_bold,
        // fontSize: width(3),
        // position: "absolute",

    }
})

export default styles