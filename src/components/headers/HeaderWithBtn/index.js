import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { height, width } from "~utills/Dimension";
import { BackArrowSvg, CloseiconSvg } from "~assets/Svg";
import AppColors from "~utills/AppColors";
import { CustomText } from "~components/texts";
import AppFonts from "~utills/AppFonts";
import CommonStyles from "~utills/CommonStyles";
import { Icons } from "~assets";

export default function HeaderWithBtn({
    containerStyles,
    leftElement,
    rightElement,
    centerElement,
    leftWrapperStyles,
    centerWrapperStyles,
    rightWrapperStyles,
    backButtonStyles,
    rightButtonStyles,
    onPressBackBtn,
    centerText = "",
    centerTxtStyles,
    enableRightElement = false,
    isCenterTitle = false,
    enableCloseButton = false,
    hideBackBtn = false,
    onPressRightBtn = () => null,
    enableAddButton = false
}) {
    return (
        <View style={[styles.container, containerStyles]}>
            <View style={[styles.leftWrapper, leftWrapperStyles]}>
                {leftElement ?? (
                    <>
                        {!hideBackBtn ? (
                            <TouchableOpacity
                                style={[styles.backButton, backButtonStyles]}
                                onPress={onPressBackBtn}
                            >
                                {enableCloseButton ? <CloseiconSvg /> : enableAddButton ? <Image source={Icons.plusIcon} resizeMode={'contain'} style={styles.plusIconStyles} /> : <BackArrowSvg />}
                            </TouchableOpacity>
                        ) : null}
                    </>
                )}
            </View>
            <View
                style={[
                    styles.centerWrapper,
                    centerWrapperStyles,
                    isCenterTitle && CommonStyles.marginLeft_6,
                ]}
            >
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
                {enableRightElement && (
                    <TouchableOpacity
                        onPress={onPressRightBtn}
                        style={[styles.rightButton, rightButtonStyles]}
                    >
                        {rightElement}
                    </TouchableOpacity>
                )}
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
    rightButton: {
        backgroundColor: AppColors.lightBlue,
        height: height(4),
        width: height(4),
        borderRadius: height(2),
        alignItems: "center",
        justifyContent: "center",
    },
    plusIconStyles: {
        height: "50%",
        width: "80%",
        tintColor: AppColors.darkOrange,

    }
});
