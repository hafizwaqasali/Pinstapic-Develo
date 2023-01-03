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
    }
})

export default styles