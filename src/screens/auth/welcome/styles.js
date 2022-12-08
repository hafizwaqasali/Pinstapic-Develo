import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { height } from '~utills/Dimension'
import AppColors from '~utills/AppColors'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.blueBackground
    },
    swipperContainer: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    bottomButtons: {
        alignItems: "center",
        justifyContent: "space-evenly",
        height: height(18)
    },
})

export default styles