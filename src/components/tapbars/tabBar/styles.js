import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { height, width } from '~utills/Dimension'
import AppColors from '~utills/AppColors'

const styles = StyleSheet.create({
    container: {
        width: width(100),
        backgroundColor: AppColors.lightBlue,
        paddingVertical: height(0.5),
        justifyContent: "space-between",
        alignItems: "center",
    },
    Wrapper: {
        marginHorizontal: width(4),
        alignItems: "center",
        justifyContent: "center"
    },
    selected: {
        backgroundColor: AppColors.blueBackground,
        paddingVertical: height(0.3),
        paddingHorizontal: width(4),
        borderRadius: width(6),
        borderWidth: width(0.3),
        borderColor: AppColors.white,
        alignItems: "center"
    }
})

export default styles