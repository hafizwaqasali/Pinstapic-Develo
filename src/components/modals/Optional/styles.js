import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppColors from '~utills/AppColors';
import { height, width } from '~utills/Dimension';
import AppFonts from '~utills/AppFonts';


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    modalWrapper: {
        flex: 1,
    },
    wrapper: {
        backgroundColor: AppColors.white,
        height: height(17),
        borderRadius: width(4),
        alignItems: "center",
        paddingVertical: height(2),
        overflow: "hidden"
    },
    btnContainer: {
        paddingHorizontal: width(3),
        justifyContent: "space-between",
        width: width(80),
        marginVertical: height(1.5)
    },
    nobtnContainerStyles: {
        width: width(35),
        backgroundColor: AppColors.white,
        borderWidth: width(.4),
        borderColor: AppColors.red,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    yesbtnContainerStyles: {
        width: width(35),
        backgroundColor: AppColors.darkblue,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    nobtnTextStyles: {
        color: AppColors.red,
        fontFamily: AppFonts.segoe_ui_bold,
        fontSize: width(3.75)
    },
    yesbtnTextStyles: {
        color: AppColors.white,
        fontFamily: AppFonts.segoe_ui_bold,
        fontSize: width(3.75)
    },
});


export default styles