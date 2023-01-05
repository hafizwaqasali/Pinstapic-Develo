import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { height, width } from '~utills/Dimension'

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerText: {
        marginLeft: width(8)
    },
    imgStyles: {
        height: "100%",
        width: "100%"
    },
    imgContainer: {
        height: height(75)
    },
    bottomWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: width(12),
        alignItems: "center",
        marginTop: height(2)
    },
    btnContainer: {
        width: width(35),
        borderRadius: width(15),
        height: height(4.5),
        shadowColor: "#000",
        shadowOffset: {
            width: 3,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 16,
    },
    btnText: {
        lineHeight: height(2),
        height: height(2),
        alignSelf: "center",
    }
})

export default styles