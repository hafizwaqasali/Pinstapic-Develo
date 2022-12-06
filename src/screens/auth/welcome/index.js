import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "./styles";
import { CustomSwipper, CustomText, ScreenWrapper, } from "~components";
import { PrimaryBtn } from "~components/buttons/primary";
import AppColors from "~utills/AppColors";
import AppFonts from "~utills/AppFonts";

export default function Welcome() {
    return (
        <ScreenWrapper statusBarColor={AppColors.blueBackground}>
            <View style={styles.container}>
                <View style={styles.swipperContainer}>
                    <CustomSwipper />
                    {/* <CustomText size={12} lineHeight={12} >
                        POSTAFIT
                    </CustomText>
                    <CustomText size={3} fontFamily={AppFonts.robotoregular}>
                        The world best fashion platform
                    </CustomText> */}
                </View>
                <View style={styles.bottomButtons}>
                    <PrimaryBtn title="Login" transparentBtn={true} />
                    <PrimaryBtn title="Join Now" />
                </View>
            </View>
        </ScreenWrapper>
    );
}
