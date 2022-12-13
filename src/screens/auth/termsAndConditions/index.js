import { Text, View } from "react-native";
import React from "react";
import styles from "./styles";
import { CustomText, HeaderWithBtn, ScreenWrapper } from "~components";
import AppColors from "~utills/AppColors";
import ScreenNames from "~routes/routes";
import CommonStyles from "~utills/CommonStyles";
import { height } from "~utills/Dimension";
import { TermsAndCondition } from "~utills/Constants";
import AppFonts from "~utills/AppFonts";

export default function TermsAndConditions({ navigation }) {
    return (
        <ScreenWrapper
            scrollEnabled
            statusBarColor={AppColors.blueBackground}
            backgroundColor={AppColors.blueBackground}
            barStyle="light-content"
            headerUnScrollable={() => (
                <HeaderWithBtn
                    centerText={"Terms & Conditions"}
                    centerTxtStyles={styles.headerText}
                    onPressBackBtn={() => navigation.goBack()}
                />
            )}
        >
            <View style={styles.container}>
                <CustomText
                    children="Terms & Conditions"
                    size={4}
                    marginTop={height(1.8)}
                />
                <CustomText
                    children={TermsAndCondition}
                    size={3.75}
                    marginTop={height(1.8)}
                    fontFamily={AppFonts.segoe_ui_regular}
                    justify
                />
            </View>
        </ScreenWrapper>
    );
}
