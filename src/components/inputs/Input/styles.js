import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { height, width } from '~utills/Dimension';
import AppColors from '../../../utills/AppColors'
import AppFonts from '../../../utills/AppFonts'

const styles = StyleSheet.create({
    container: {
        width: width(80),
        paddingHorizontal: width(4),
        borderColor: AppColors.white,
        borderWidth: width(.2),
        borderRadius: width(3),
        marginTop: height(1),
        flexDirection: "row",
        alignItems: "center"
    },
    invertedContainer: {
        borderColor: AppColors.darkblue
    },
    inputContainer: {
        flex: 1,
        color: AppColors.white,
        fontFamily: AppFonts.segoe_ui_regular,
        fontSize: width(3.75),
    },
    invertedInputContainer: {
        color: AppColors.darkblue,
    },
    labelText:
    {
        position: 'absolute',
        left: width(4),
        top: -10,
        backgroundColor: AppColors.blue,
        paddingHorizontal: width(1.5),
        fontFamily: AppFonts.segoe_ui_regular,
        color: AppColors.white,
        fontSize: width(3)

    },
    invertedLabel: {
        backgroundColor: AppColors.white,
        color: AppColors.darkblue,
    },
    errorText: {
        color: AppColors.red,
        fontFamily: AppFonts.segoe_ui_regular,
        fontSize: width(2.5),
        // alignSelf: "center"
    },


})
export default styles