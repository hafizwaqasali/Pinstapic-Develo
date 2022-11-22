import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { height, width } from '~utills/Dimension';
import AppColors from '../../../utills/AppColors'
import AppFonts from '../../../utills/AppFonts'

const styles = StyleSheet.create({
    container: {
        height: height(10),
        width: width(100),
        flexDirection: "row",
        backgroundColor: AppColors.blue,
        paddingTop: height(2)
    },
    bottomLine: {
        borderBottomWidth: width(.1),
        borderBottomColor: AppColors.white,
    },
    leftContainer: {
        width: width(25),
        justifyContent: "center",
        alignItems: "center"
    },
    middleContainer: {
        width: width(50),
        justifyContent: "center",
        alignItems: "center"
    },
    rightContainer: {
        width: width(25),
        justifyContent: "center",
        alignItems: "center"
    },
    backBtnWrapper: {
        backgroundColor: "rgba(255, 255, 255, .20)",
        width: width(8),
        height: width(8),
        borderRadius: width(8),
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontFamily: AppFonts.segoe_ui_bold,
        color: AppColors.white,
        fontSize: width(3.5),
        width: width(50),
        textAlign: "center",
    }
})
export default styles