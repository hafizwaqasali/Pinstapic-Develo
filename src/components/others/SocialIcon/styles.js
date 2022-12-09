import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { height, width } from '~utills/Dimension';
import AppColors from '../../../utills/AppColors'


const styles = StyleSheet.create({
    container: {
        height: height(6.5),
        width: width(14),
        borderRadius: width(2),
        borderWidth: width(.25),
        borderColor: AppColors.darkOrange,
        backgroundColor: AppColors.white,
        justifyContent: "center",
        alignItems: "center"

    },
    imgStyle: {
        height: height(5),
        width: width(10),
    }
})
export default styles