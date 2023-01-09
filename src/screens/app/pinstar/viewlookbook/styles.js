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

    },
    imgContainer: {
        alignSelf: "center",
        height: height(13),
        width: height(13),
    },
    coverImgStyles: {
        height: "100%",
        width: "100%"
    },
    tagsIconsWrappers: {
        flexDirection: "row",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: width(2),
        paddingVertical: height(1),
        marginVertical: height(4),
        flexWrap: "wrap"
    },
    contentContainerStyle: {
        alignItems: "center",
        paddingBottom: height(2)
    },
    flatListItemWrapper: {
        marginHorizontal: width(1.5)
    },
    itemImgContainer: {
        alignSelf: "center",
        height: height(17),
        width: height(13),
    },
    tagItemWrapper: {
        backgroundColor: AppColors.darkOrange,
        position: "absolute",
        right: 5,
        bottom: 5,
        height: height(3.5),
        width: height(3.5),
        borderRadius: height(3.5),
        alignItems: "center",
        justifyContent: "center",
    },
    seprator: {
        height: height(.25),
        width: "80%",
        backgroundColor: AppColors.seprator_Grey_20,
        alignSelf: "center",
        marginVertical: height(2)
    }
})

export default styles