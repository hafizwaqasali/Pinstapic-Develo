import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { height, width } from "~utills/Dimension";
import AppColors from "../../../utills/AppColors";
import AppFonts from "../../../utills/AppFonts";

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.blueBackground,
    },
    underLine: {
        height: height(0.45),
        width: width(13),
        borderRadius: width(2),
        marginTop: height(0.5),
    },
});
export default styles;
