import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { height, width } from '~utills/Dimension';
import AppColors from '../../../utills/AppColors'

const styles = StyleSheet.create({
    container: {
        height: width(5),
        width: width(5),
        borderRadius: width(2),
        borderColor: AppColors.white,
        borderWidth: width(.2),
        alignItems: "center",
        justifyContent: "center"
    },
    checkedContainer: {
        backgroundColor: AppColors.white,
        alignSelf: "center"
    },
})
export default styles