import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { width } from "~utills/Dimension";

const styles = StyleSheet.create({
    headerText: {
        marginLeft: width(8),
    },
    container: {
        flex: 1,
        marginHorizontal: width(5)
    }
});

export default styles;
