import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "./styles";
import { CustomSwipper, CustomText, ScreenWrapper, } from "~components";
import { PrimaryBtn } from "~components/buttons/primary";
import AppColors from "~utills/AppColors";
import AppFonts from "~utills/AppFonts";
const DATA = [
    {
        text: "First Item",
        img: require('../../../assets/images/GoogleIcon.png')
    },
    {
        text: "Second Item",
        img: require('../../../assets/images/GoogleIcon.png')
    },
    {
        text: "third Item",
        img: require('../../../assets/images/GoogleIcon.png')
    },
];

export default function Welcome() {
    return (
        <ScreenWrapper statusBarColor={AppColors.blueBackground}>
            <View style={styles.container}>
                <CustomSwipper data={DATA} />
                <View style={styles.bottomButtons}>
                    <PrimaryBtn title="Login" transparentBtn={true} />
                    <PrimaryBtn title="Join Now" />
                </View>
            </View>
        </ScreenWrapper>
    );
}
