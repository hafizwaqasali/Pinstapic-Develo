import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { height, width } from "~utills/Dimension";
import AppColors from "../../../utills/AppColors";

const styles = StyleSheet.create({
    container: {
        height: height(17),
        width: height(17),
        borderRadius: height(8),
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
    },
    imgStyle: {
        height: height(17),
        width: height(17),
        alignSelf: "center",
    },
});
export default styles;
