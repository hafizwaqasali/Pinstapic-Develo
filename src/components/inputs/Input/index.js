import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import styles from './styles'
import AppColors from '../../../utills/AppColors';
import { height, width } from '~utills/Dimension';
import AppFonts from '../../../utills/AppFonts';
import { Controller } from 'react-hook-form';

export const InputField = ({
    containerStyles,
    inputContainerStyles,
    labelStyles,
    keyboardType,
    placeholder,
    label,
    placeholderColor = AppColors.white,
    rightIcon,
    leftIcon,
    secureTextEntry,
    onBlur,
    onChangeText,
    onFocus,
    multiline,
    numberOfLines,
    onSubmitEditing,
    returnKeyType,
    returnKeyLabel,
    editable = true,
    onPress,
    activeOpacity = 0.9,
    maxLength,
    value,
    inverted,
    labelBackgroundColor,
    labelColor,

}) => {
    return (
        <TouchableOpacity style={[styles.container, inverted && styles.invertedContainer, containerStyles]} onPress={onPress} activeOpacity={activeOpacity}>
            {leftIcon}
            <TextInput
                style={[styles.inputContainer, inverted && styles.invertedInputContainer, inputContainerStyles]}
                placeholderTextColor={inverted ? AppColors.darkblue : placeholderColor}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                onBlur={onBlur}
                onChangeText={onChangeText}
                onFocus={onFocus}
                multiline={multiline}
                numberOfLines={numberOfLines}
                keyboardType={keyboardType}
                onSubmitEditing={onSubmitEditing}
                returnKeyType={returnKeyType}
                returnKeyLabel={returnKeyLabel}
                editable={editable}
                maxLength={maxLength}
                value={value}

            />
            <Text style={[styles.labelText, inverted && styles.invertedLabel, labelStyles, labelBackgroundColor && { backgroundColor: labelBackgroundColor, color: labelColor ?? AppColors.white }]}>{label}</Text>
            {rightIcon}
        </TouchableOpacity >

    )
}

export const InputFieldValidate = ({
    containerStyles,
    inputContainerStyles,
    labelStyles,
    keyboardType,
    placeholder,
    label,
    placeholderColor = AppColors.white,
    rightIcon,
    leftIcon,
    secureTextEntry,
    Blur,
    onChangeText,
    Value,
    onFocus,
    multiline,
    numberOfLines,
    onSubmitEditing,
    returnKeyType,
    returnKeyLabel,
    editable = true,
    onPress,
    activeOpacity = 0.9,
    formControl,
    name,
    maxLength,
    errorMsg,
    inverted,
    errorTextColor,
    labelBackgroundColor,
    labelColor

}) => {
    return (
        <View>
            <TouchableOpacity style={[styles.container, inverted && styles.invertedContainer, containerStyles]} onPress={onPress} activeOpacity={activeOpacity}>
                {leftIcon}
                <Controller
                    control={formControl}
                    name={name}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={[styles.inputContainer, inverted && styles.invertedInputContainer, inputContainerStyles]}
                            placeholderTextColor={inverted ? AppColors.darkblue : placeholderColor}
                            placeholder={placeholder}
                            secureTextEntry={secureTextEntry}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            onFocus={onFocus}
                            multiline={multiline}
                            numberOfLines={numberOfLines}
                            keyboardType={keyboardType}
                            onSubmitEditing={onSubmitEditing}
                            returnKeyType={returnKeyType}
                            returnKeyLabel={returnKeyLabel}
                            editable={editable}
                            maxLength={maxLength}
                            value={value}
                        />
                    )}

                />
                <Text style={[styles.labelText, inverted && styles.invertedLabel, labelStyles, labelBackgroundColor && { backgroundColor: labelBackgroundColor, color: labelColor ?? AppColors.white }]}>{label}</Text>
                {rightIcon}
            </TouchableOpacity >
            <Text style={[styles.errorText, { color: errorTextColor ?? '#CBEDD5' }]}>
                {errorMsg?.message && errorMsg.message}
            </Text>
        </View>



    )
}
