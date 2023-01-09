import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { height, width } from '~utills/Dimension'

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    Itemswrapper: {
        width: width(20),
        alignItems: "flex-end",
        justifyContent: "center"
    },
    menuSvgContainer: {
    },
    imgStyles: {
        height: height(90),
        width: width(100)
    }
})

export default styles