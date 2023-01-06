import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { height, width } from '~utills/Dimension';
import AppColors from '~utills/AppColors';


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    modalWrapper: {
        flex: 1,
    },
    wrapper: {
        backgroundColor: AppColors.white,
        height: height(48),
        borderRadius: width(4),
        alignItems: "center",
        paddingVertical: height(2),
        paddingHorizontal: width(4),
    },
    inputsWrapper: {
        marginTop: height(2)
    },
    inputContainer: {
        width: width(80),
        borderColor: AppColors.darkblue,
        marginVertical: height(1.5)
    },
    inputStyles: {
        color: AppColors.black,
    },
    bottomWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: width(3.5),
        alignItems: "center",
        paddingVertical: height(2),
        width: "100%"
    },
    CancelbtnContainer: {
        width: width(35),
        borderRadius: width(3),
        height: height(6),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 8,
        elevation: 4,
        borderWidth: width(.3),
        borderColor: AppColors.red,
        backgroundColor: AppColors.white
    },
    AddbtnContainer: {
        width: width(35),
        borderRadius: width(3),
        height: height(6),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 8,

        elevation: 4,
        backgroundColor: AppColors.blueBackground,
    },
    CancelbtnText: {
        lineHeight: height(2),
        height: height(2),
        alignSelf: "center",
        color: AppColors.red,
    },
    AddbtnText: {
        lineHeight: height(2),
        height: height(2),
        alignSelf: "center",
    }
});

export default styles