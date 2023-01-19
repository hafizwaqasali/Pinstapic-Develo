import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { height, width } from '~utills/Dimension'
import AppColors from '~utills/AppColors'


const styles = StyleSheet.create({
    LooksCardContainer: {
        // height: height(20),
        // width: width(36),
        borderRadius: width(5),
        backgroundColor: AppColors.white,
        paddingBottom: height(1.5)
    },
    imgStyles: {
        height: height(15),
        width: width(40),
        borderTopLeftRadius: width(5),
        borderTopRightRadius: width(5)
    },
    lookBooksDescriptionWrapper: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: width(4)
    },
    lookBookDeailsWrapper: {
        flexDirection: "row",
        alignItems: "center",
    },
    bottomContentWrapper: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: height(1)
    },
    userImgStyles: {
        height: height(3),
        width: height(3),
        borderRadius: height(2),
        marginLeft: width(3),
        borderWidth: width(.1)
    }
})

export default styles