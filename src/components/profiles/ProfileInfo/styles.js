import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { height, width } from '~utills/Dimension'
import AppColors from '~utills/AppColors'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "row",
        paddingHorizontal: width(2),
        paddingVertical: height(1)
    },
    leftContainer: {
        backgroundColor: AppColors.white,
        height: height(11),
        width: height(11),
        borderRadius: height(6),
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center"
    },
    rightContainer: {
        flex: 1,
        marginLeft: width(3)
    },
    imgStyles: {
        height: "93%",
        width: "93%",
        borderRadius: height(6)
    },
    UserNameWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        overflow: "hidden",
        alignItems: "center",
    },
    textStyles: {
        textAlign: "center",
        alignSelf: "center"
    },
    userTypeContainer: {
        backgroundColor: AppColors.white,
        borderRadius: width(3),
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: width(2),
        height: height(2),
        width: width(16),

    },
    followersSection: {
    },
    followersSection: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        width: width(40)
    },
    followers: {
        alignItems: "center",
        marginTop: height(1)
    },
})

export default styles