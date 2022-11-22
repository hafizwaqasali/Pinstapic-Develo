import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppFonts from '../../../utills/AppFonts'
import AppColors from '../../../utills/AppColors'
import { height, width } from '~utills/Dimension';


const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.white,
        height: height(23),
        borderRadius: width(8),
        paddingHorizontal: width(5),
        paddingVertical: height(4),
        alignItems: "center",
        width: width(82),
        alignSelf: "center"
    },
    btnStyles: {
        marginTop: width(5),
        width: width(72)
    },
    linkText: {
        color: AppColors.darkblue,
        fontFamily: AppFonts.segoe_ui_bold,
        fontSize: width(4.5),
        marginTop: height(1)
    },
    logoWrapper: {
        backgroundColor: AppColors.darkOrange,
        height: width(8),
        width: width(8),
        borderRadius: width(4),
        alignItems: "center",
        justifyContent: "center",
    },
    iconImg: {
        height: height(2),
        width: width(4)
    }
})
export default styles