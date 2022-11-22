import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import { height, width } from '~utills/Dimension';
import AppFonts from '../../utills/AppFonts';
import AppColors from '../../utills/AppColors';

export const CustomText = ({
    children = '?',
    size = 6,
    fontFamily = AppFonts.segoe_ui_bold,
    textColor = AppColors.white,
    backgroundColor,
    alignSelf = "baseline",
    letterSpacing = 0,
    lineHeight = 7,
    underLine,
    center,
    justify,
    right,
    italic = false,
    onPress = undefined,
    textStyles,
    numberOfLines = null,
    marginLeft = 0,
    marginRight = 0,
    marginTop = 0,
    marginBottom = 0,
    paddingVertical = 0,
    paddingHorizontal = 0,
    textwidth,

}) => {
    const styles = StyleSheet.create({
        text: {
            backgroundColor: backgroundColor,
            fontSize: width(size),
            fontFamily: fontFamily,
            color: textColor,
            lineHeight: width(lineHeight),
            letterSpacing: letterSpacing,
            fontStyle: italic ? 'italic' : 'normal',
            textDecorationLine: underLine ? 'underline' : 'none',
            textAlign: center
                ? 'center'
                : right
                    ? 'right'
                    : justify
                        ? 'justify'
                        : 'left',
            alignSelf: alignSelf,
            marginLeft: marginLeft,
            marginRight: marginRight,
            marginTop: marginTop,
            marginBottom: marginBottom,
            paddingVertical: paddingVertical,
            paddingHorizontal: paddingHorizontal,
            width: textwidth && width(textwidth)
        },
    });
    return (
        <Pressable disabled={typeof onPress == 'undefined'} onPress={onPress}>
            <Text
                style={[styles.text, textStyles ?? {}]}
                numberOfLines={numberOfLines}>
                {children}
            </Text>
        </Pressable>
    );
};
