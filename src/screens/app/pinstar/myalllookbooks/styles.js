import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppColors from '~utills/AppColors'
import { height, width } from '~utills/Dimension'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    plusBtnContainer: {
        backgroundColor: AppColors.darkOrange,
        height: height(4),
        width: height(4),
        borderRadius: height(3),
        alignItems: "center",
        justifyContent: "center"
    },
    PlusIconStyles: {
        height: "45%",
        width: "45%",
    },
    Itemswrapper: {
        flexDirection: "row",
        marginLeft: width(5),
        paddingHorizontal: width(1),
        alignItems: "center",

    },
    lookBookDetailsWrapper: {
        alignItems: "center"
    },
    lookBooksDescriptionWrapper: {
        flexDirection: "row",
        alignItems: "center"
    },
    flatListItemWrapper: {
        marginHorizontal: width(3.5),
        marginBottom: height(2),
    },
})

export default styles