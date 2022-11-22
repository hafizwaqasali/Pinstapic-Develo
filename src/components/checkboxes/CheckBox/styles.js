import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { height, width } from '~utills/Dimension';
import AppColors from '../../../utills/AppColors'

const styles = StyleSheet.create({
    container: {
        height: height(3),
        width: width(6),
        borderRadius: width(1.7),
        borderColor: AppColors.white,
        borderWidth: width(.2),
        alignItems: "center",
        justifyContent: "center"
    },
    checkedContainer: {
        backgroundColor: AppColors.white
    },
})
export default styles