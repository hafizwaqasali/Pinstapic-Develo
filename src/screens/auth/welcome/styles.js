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
        flex: 0.78,
    },
    bottomButtons: {
        alignItems: "center",
        flex: 0.22
    },
})

export default styles