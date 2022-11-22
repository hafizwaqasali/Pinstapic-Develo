import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { height, width } from '~utills/Dimension';
import AppColors from '../../../utills/AppColors'

const styles = StyleSheet.create({
    container: {
        height: height(18),
        width: height(18),
        borderRadius: height(9),
        borderWidth: width(.75),
        alignItems: "center",
        justifyContent: 'center',
        marginVertical: height(2)
    },
    imgStyle: {
        height: height(10),
        width: width(20),
        alignSelf: "center"
    }
})
export default styles