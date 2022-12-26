import { View, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./styles";
import { height, width } from "~utills/Dimension";
import AppColors from "../../../utills/AppColors";
import { CustomText } from "~components/texts";
import AppFonts from "~utills/AppFonts";

export default function Category({
    Icon,
    iconSize = 20,
    iconColor,
    iconName,
    containerStyles,
    onPress,
    imageStyles,
    imgSrc,
    resizeMode = "contain",
    activeOpacity = 0.7
}) {
    return (
        <>
            <TouchableOpacity
                style={[styles.container, containerStyles]}
                onPress={onPress}
                activeOpacity={activeOpacity}
            >
                {Icon ? (
                    <Icon name={iconName} size={width(iconSize)} color={iconColor} />
                ) : (
                    imgSrc && (
                        <Image
                            source={imgSrc}
                            style={[styles.imgStyle, imageStyles]}
                            resizeMode={resizeMode}
                        />
                    )
                )}
            </TouchableOpacity>
        </>
    );
}
