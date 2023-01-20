import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { height, width } from "~utills/Dimension";
import AppColors from "~utills/AppColors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    TabscontainerStyles: {
        width: width(100),
        alignItems: "center",
    },
    filterTabscontainerStyles: {
        width: width(100),
        alignItems: "center",
    },
    tabItemWrapperStyles: {
        marginHorizontal: 0,
        alignItems: "center",
        justifyContent: "center",
        width: width(30),
    },
    filterTabItemWrapperStyles: {
        marginHorizontal: width(2.1),
        alignItems: "center",
        justifyContent: "center",
        height: height(4),
    },
    storiesWrapper: {
        height: height(12),
        width: width(100),
        marginTop: height(1),
    },
    storiesContentContainer: {
        marginHorizontal: width(1.5),
        marginVertical: height(1),
        flexDirection: "column",
        height: height(6),
        alignItems: "center",
    },
    seprator: {
        height: height(6),
        width: width(0.5),
        backgroundColor: AppColors.darkOrange,
        marginLeft: width(3),
    },
    horizontalSeprator: {
        height: height(0.2),
        width: width(88),
        alignSelf: "center",
        backgroundColor: AppColors.seprator_Grey_20,
    },
    pinStarContainer: {
        flex: 1,
    },
    flatListWrapper: {
        alignItems: "center",
    },
    flatListItemWrapper: {
        marginHorizontal: width(3.5),
        marginBottom: height(2),
    },
    btnContainerStyles: {
        paddingVertical: 0,
        height: height(3.5),
        borderRadius: height(4),
        marginTop: -height(1),
        marginBottom: height(0.5),
    },
    cardContainerStyles: {
        width: width(90),
        paddingBottom: 0,
    },
    cardImageStyles: {
        width: width(90),
        height: height(14),
    },
    contentContainerStylePinstore: {
        paddingBottom: height(6),
        paddingTop: height(2),
    },
    tabsContainer: {
        width: width(100),
        marginTop: height(1),
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: width(1)
    },
    tabItemStyles: {
        marginHorizontal: width(2)
    }
});

export default styles;
