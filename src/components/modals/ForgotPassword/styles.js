import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { height, width } from '~utills/Dimension';
import AppColors from '../../../utills/AppColors'
import AppFonts from '../../../utills/AppFonts'


const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.white,
        height: height(34),
        borderRadius: width(8),
        paddingHorizontal: width(5),
        paddingVertical: height(4),
        alignItems: "center"
    },
    forgotPassword: {
        color: AppColors.darkblue,
        fontFamily: AppFonts.segoe_ui_bold,
        fontSize: width(4.5),
    },
    resetText: {
        color: AppColors.darkblue,
        fontFamily: AppFonts.segoe_ui_regular,
        fontSize: width(3.5),
        width: width(60),
        textAlign: "center",
        marginTop: height(2)
    },
    btnStyles: {
        marginTop: width(5)
    },
})


export default styles