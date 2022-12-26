import { View } from "react-native";
import styles from "./styles";
import React from "react";
import { CustomText } from "~components/texts";
import AppColors from "~utills/AppColors";

export const ScreenNameHeader = ({
    title = "",
    underline = false,
    textSize = 4.9,
    underLineStyles,
    containerStyles,
    textColor = AppColors.white,
    underLineColor = AppColors.white,
}) => {
    return (
        <View style={[styles.container, containerStyles]}>
            <CustomText children={title} size={textSize} textColor={textColor} />
            {underline && (
                <View
                    style={[
                        styles.underLine,
                        underLineStyles,
                        { backgroundColor: underLineColor },
                    ]}
                />
            )}
        </View>
    );
};
