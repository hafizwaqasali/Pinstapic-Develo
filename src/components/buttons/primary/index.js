import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import AppColors from "../../../utills/AppColors";
import React from "react";
import styles from "./styles";
import { height, width } from "~utills/Dimension";

export const PrimaryBtn = ({
  title = "",
  onPress,
  disabled = false,
  isLoading = false,
  loaderColor = AppColors.white,
  activeOpacity = 0.7,
  containerStyle = {},
  textStyle = {},
  transparentBtn,
  btnHeight,
  btnWidth,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || isLoading}
      activeOpacity={activeOpacity}
      style={[
        styles.container,
        transparentBtn && styles.transparent,
        containerStyle,
        btnHeight && { height: height(btnHeight) },
        btnWidth && { width: width(btnWidth) },
      ]}
    >
      {isLoading ? (
        <ActivityIndicator color={loaderColor} size="small" />
      ) : (
        <Text style={[styles.text, textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};
