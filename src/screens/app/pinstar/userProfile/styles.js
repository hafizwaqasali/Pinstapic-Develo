import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { height, width } from '~utills/Dimension'
import AppColors from '~utills/AppColors'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    storiesContentContainer: {
        marginHorizontal: width(1.5),
        marginVertical: height(1),
        flexDirection: "row",
    },
    userProfileWrapper: {
        paddingHorizontal: width(5)
    },
    seprator: {
        height: "100%",
        width: width(.5),
        backgroundColor: AppColors.darkOrange,
        marginLeft: width(3)
    },
    storiesWrapper: {
        width: width(100),
    },
    containerStyles: {
        marginTop: height(2),
    },
    emptyBoxImg: {
        tintColor: AppColors.white_50,
        alignSelf: "center"
    },
    lookbookContainer: {
        height: height(60),
        justifyContent: "center",
        alignItems: "center"
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
    }
})

export default styles