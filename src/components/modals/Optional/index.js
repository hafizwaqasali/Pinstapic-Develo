import { Text, View } from "react-native";
import React, { useState, useImperativeHandle, forwardRef } from "react";
import Modal from "react-native-modal";
import styles from "./styles";
import { CustomText } from "~components/texts";
import AppColors from "~utills/AppColors";
import AppFonts from "~utills/AppFonts";
import { height } from "~utills/Dimension";
import { PrimaryBtn } from "~components/buttons/primary";

const Optional = (
    {
        titleText = "",
        titleTextStyles,
        enableButtons = false,
        horizontal = false,
        firstBtnContainerStyles,
        secondBtnContainerStyles,
        firstBtnText = "",
        firstBtnTextStyles,
        secondBtnText = "",
        secondBtnTextStyles,
        buttonsWrapperStyles,
        onPressFirstBtn = () => null,
        onPressSecondBtn = () => null,
        children,
        modalHeight,
        modalWidth,
        modalBackgroundColor,
        center,
    },
    ref
) => {
    const [isVisible, setisVisible] = useState(false);
    const toggleModal = () => setisVisible(!isVisible);
    useImperativeHandle(ref, () => ({
        show: () => {
            setisVisible(true);
        },
        hide: () => {
            setisVisible(false);
        },
    }));

    return (
        <View style={styles.container}>
            <Modal
                style={styles.modalWrapper}
                isVisible={isVisible}
                onBackdropPress={toggleModal}
                onBackButtonPress={toggleModal}
            >
                {children ? (
                    <View
                        style={[
                            styles.wrapper,
                            modalHeight && { height: modalHeight },
                            modalWidth && { width: modalWidth },
                            modalBackgroundColor && { backgroundColor: modalBackgroundColor },
                            center && { alignSelf: "center" }
                        ]}
                    >
                        {children}
                    </View>
                ) : (
                    <View style={styles.wrapper}>
                        <CustomText
                            children={titleText}
                            textColor={AppColors.darkblue}
                            size={3.8}
                            fontFamily={AppFonts.segoe_ui_bold}
                            marginTop={height(1)}
                            textStyles={titleTextStyles}
                        />
                        <View
                            style={[
                                styles.btnContainer,
                                buttonsWrapperStyles,
                                horizontal && { flexDirection: "row" },
                            ]}
                        >
                            <PrimaryBtn
                                title={firstBtnText}
                                onPress={onPressFirstBtn}
                                containerStyle={[styles.nobtnContainerStyles, firstBtnContainerStyles]}
                                textStyle={[styles.nobtnTextStyles, firstBtnTextStyles]}
                            />
                            <PrimaryBtn
                                title={secondBtnText}
                                onPress={onPressSecondBtn}
                                containerStyle={[styles.yesbtnContainerStyles, secondBtnContainerStyles]}
                                textStyle={[styles.yesbtnTextStyles, secondBtnTextStyles]}
                            />
                        </View>
                    </View>
                )}
            </Modal>
        </View>
    );
};

export default forwardRef(Optional);
