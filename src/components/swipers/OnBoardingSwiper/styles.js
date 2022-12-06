import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { height, width } from '~utills/Dimension'

const styles = StyleSheet.create({
    container: {
        width: width(100),
        height: height(73),
        backgroundColor: "red"
    },
    mainWrapper: {
        width: width(100),
        height: height(100)
    }
})

export default styles