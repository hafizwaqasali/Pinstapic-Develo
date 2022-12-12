import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { height, width } from '~utills/Dimension'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputsWrapper: {
        alignItems: "center",
        marginTop: height(6),
    },
    termsAndConditions: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: width(5)
    },
    bottomSectionContainer: {
        alignItems: "center"
    },
    socialIconsWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: width(65),
        marginVertical: height(2)
    }
})

export default styles