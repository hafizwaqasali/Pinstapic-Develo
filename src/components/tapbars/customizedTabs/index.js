import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import AppColors from "~utills/AppColors";
import { CustomText } from "~components/texts";
import AppFonts from "~utills/AppFonts";
import { width } from "~utills/Dimension";

export default function CustomizedTabs({
    text,
    textSize = 3,
    onPress,
    selectedColor,
    unSelectedColor,
    selectedBorderColor,
    UnSelectedBorderColor,
    selectedItem
}) {
    return (
        <TouchableOpacity style={[styles.container, selectedItem == text && { backgroundColor: selectedColor }]} onPress={onPress}>
            <CustomText style={styles.textStyles} size={textSize}>
                {text}
            </CustomText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: width(2),
        borderRadius: width(3),
        alignItems: "center"
    },
    textStyles: {
        backgroundColor: "red",
        fontFamily: AppFonts.segoe_ui_semibold,
        textAlign: "center"
    },
});
