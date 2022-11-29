import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import AppColors from '../../../utills/AppColors';
import React from 'react'
import styles from "./styles"

export const PrimaryBtn = ({
  title = '',
  onPress,
  disabled = false,
  isLoading = false,
  loaderColor = AppColors.white,
  activeOpacity = 0.7,
  containerStyle = {},
  textStyle = {},
  transparentBtn
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || isLoading}
      activeOpacity={activeOpacity}
      style={[styles.container, transparentBtn && styles.transparent, containerStyle]}>
      {isLoading ? (
        <ActivityIndicator color={loaderColor} size="small" />
      ) : (
        <Text style={[styles.text, textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  )
}
