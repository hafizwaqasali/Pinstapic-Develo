import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { height, width } from '~utills/Dimension'
import AppColors from '~utills/AppColors'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    TabscontainerStyles: {
        width: width(100),
        alignItems: "center"
    },
    tabItemWrapperStyles: {
        marginHorizontal: 0,
        alignItems: "center",
        justifyContent: "center",
        width: width(30),
    },
    storiesWrapper: {
        height: height(12),
        width: width(100),
        marginTop: height(1)
    },
    storiesContentContainer: {
        marginHorizontal: width(1.5),
        marginVertical: height(1),
        flexDirection: "column",
        height: height(6),
        alignItems: "center"
    },
    seprator: {
        height: height(6),
        width: width(.5),
        backgroundColor: AppColors.darkOrange,
        marginLeft: width(3)
    },
    horizontalSeprator: {
        height: height(.2),
        width: width(88),
        alignSelf: "center",
        backgroundColor: AppColors.seprator_Grey_20,
    },
    pinStarContainer: {
        flex: 1
    },
    flatListWrapper: {
        alignItems: "center"
    },
    flatListItemWrapper: {
        marginHorizontal: width(3.5),
        marginBottom: height(2),
    },
})

export default styles