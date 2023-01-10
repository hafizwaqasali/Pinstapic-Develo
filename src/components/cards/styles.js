import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { height, width } from '~utills/Dimension'
import AppColors from '~utills/AppColors'


const styles = StyleSheet.create({
    LooksCardContainer: {
        height: height(20),
        width: width(36),
        borderRadius: width(5),
        backgroundColor: AppColors.white
    },
    imgStyles: {
        height: height(15),
        width: width(36),
        borderTopLeftRadius: width(5),
        borderTopRightRadius: width(5)
    },
    lookBooksDescriptionWrapper: {
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: width(4),
    },
})

export default styles