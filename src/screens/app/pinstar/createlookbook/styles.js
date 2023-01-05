import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { height, width } from '~utills/Dimension'
import AppColors from '~utills/AppColors'

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerText: {
        marginLeft: width(8)
    },
    headerContainer: {
        borderBottomWidth: width(.2),
        borderBottomColor: AppColors.seprator_Grey_20
    },
    coverPhotoContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: height(1),
    },
    photoWrapperStyles: {
        height: height(14.5),
        width: height(15),
        borderRadius: width(2)
    },
    bottomSection: {
        alignItems: "center",
        marginTop: height(2),
    },
    btnStyles: {
        backgroundColor: AppColors.white_30,
        marginTop: height(4)
    }

})

export default styles