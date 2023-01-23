import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { height, width } from '~utills/Dimension'
import AppColors from '~utills/AppColors'


const styles = StyleSheet.create({
    newStoryContainer: {
        height: height(6),
        width: height(6),
        backgroundColor: AppColors.darkOrange,
        borderRadius: height(5),
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden"
    },
    PlusIconStyles: {
        height: "45%",
        width: "45%"
    },
    displayStoryContainer: {
        height: height(6),
        width: height(6),
        backgroundColor: AppColors.sky_Blue,
        borderRadius: height(5),
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden"
    },
    storyImgStyles: {
        height: "100%",
        width: "100%"
    },
    StoriesWrapper: {
        // flexDirection: "column",
    },
    storyTitle: {

    },
    userStoriesWrapper: {
        alignItems: "center",
        // backgroundColor: "yellow",
    }
})

export default styles