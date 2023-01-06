import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { height, width } from '~utills/Dimension'
import AppColors from '~utills/AppColors'


const styles = StyleSheet.create({
    headerText: {
        marginLeft: width(8)
    },
    container: {
        flex: 1
    },
    PlusIconStyles: {
        height: "45%",
        width: "45%"
    },
    plusBtnContainer: {
        backgroundColor: AppColors.darkOrange,
        height: height(4),
        width: height(4),
        borderRadius: height(3),
        alignItems: "center",
        justifyContent: "center"
    },
    Itemswrapper: {
        flexDirection: "row",
        marginLeft: width(5),
        paddingHorizontal: width(1),
        alignItems: "center",

    },
    menuSvgContainer: {
        marginLeft: width(.5),

    }
})

export default styles