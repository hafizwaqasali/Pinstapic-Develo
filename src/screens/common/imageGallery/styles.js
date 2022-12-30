import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { height, width } from '~utills/Dimension'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    flashListContainer: {
        paddingHorizontal: width(4),
        height: height(100),
        width: width(100),
        paddingBottom: height(8)

    },
    elementStyle: {
        marginVertical: height(1.3),
        marginLeft: width(2)
    }
})

export default styles