import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { height, width } from '~utills/Dimension';
import AppColors from '../../../utills/AppColors'
import AppFonts from '../../../utills/AppFonts'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    swipperContainer: {
        alignItems: "center",
        justifyContent: "center"
    },
    imgStyle: {
        height: "100%",
        width: "100%",
        alignSelf: "center",
    },
    description: {
        textAlign: "center",
        color: AppColors.white,
        fontFamily: AppFonts.segoe_ui_regular,
        fontSize: width(3)
    },

})
export default styles