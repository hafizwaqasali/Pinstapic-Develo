import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { height, width } from "~utills/Dimension";
import { BackArrowSvg, CloseiconSvg } from "~assets/Svg";
import AppColors from "~utills/AppColors";
import { CustomText } from "~components/texts";
import AppFonts from "~utills/AppFonts";
import CommonStyles from "~utills/CommonStyles";

export default function HeaderWithBtn({
    containerStyles,
    leftElement,
    rightElement,
    centerElement,
    leftWrapperStyles,
    centerWrapperStyles,
    rightWrapperStyles,
    backButtonStyles,
    onPressBackBtn,
    centerText = "",
    centerTxtStyles,
    isCenterTitle = false,
    enableCloseButton = false
}) {
    return (
        <View style={[styles.container, containerStyles]}>
            <View style={[styles.leftWrapper, leftWrapperStyles]}>
                {leftElement ?? (
                    <TouchableOpacity
                        style={[styles.backButton, backButtonStyles]}
                        onPress={onPressBackBtn}
                    >
                        {enableCloseButton ? <CloseiconSvg /> : <BackArrowSvg />}
                    </TouchableOpacity>
                )}
            </View>
            <View style={[styles.centerWrapper, centerWrapperStyles, isCenterTitle && CommonStyles.marginLeft_5]}>
                {centerElement ?? (
                    <CustomText
                        children={centerText}
                        size={3.7}
                        fontFamily={AppFonts.segoe_ui_bold}
                        textStyles={centerTxtStyles}
                    />
                )}
            </View>
            <View style={[styles.rightWrapper, rightWrapperStyles]}>
                {rightElement}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: height(8),
        width: width(100),
        flexDirection: "row",
    },
    leftWrapper: {
        width: width(20),
        alignItems: "center",
        justifyContent: "center",
    },
    centerWrapper: {
        width: width(50),
        alignItems: "center",
        justifyContent: "center",
    },
    rightWrapper: {
        width: width(30),
        alignItems: "center",
        justifyContent: "center",
    },
    backButton: {
        backgroundColor: AppColors.white_30,
        height: height(4),
        width: height(4),
        borderRadius: height(2),
        alignItems: "center",
        justifyContent: "center",
    },
});
