import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { height, width } from '~utills/Dimension'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainWrapper: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center"
    },
    imgStyle: {
        width: width(30),
        height: height(15),
    }
})

export default styles