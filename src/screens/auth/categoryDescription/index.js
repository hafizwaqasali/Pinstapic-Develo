import { Image, Text, View } from "react-native";
import React from "react";
import styles from "./styles";
import {
    CustomText,
    HeaderWithBtn,
    PrimaryBtn,
    ScreenNameHeader,
    ScreenWrapper,
} from "~components";
import AppColors from "~utills/AppColors";
import { height, width } from "~utills/Dimension";
import CommonStyles from "~utills/CommonStyles";
import { useDummyData } from "~hooks";
import {
    pinstar_Desc1,
    pinstar_Desc2,
    pinstore_Desc1,
    pinstore_Desc2,
    pinstylist_Desc1,
    pinstylist_Desc2,
} from "~utills/Constants";
import AppFonts from "~utills/AppFonts";

export default function CategoryDescription({ navigation, route }) {
    const type = route.params.title;
    const data = useDummyData();

    return (
        <ScreenWrapper
            scrollEnabled
            statusBarColor={AppColors.blueBackground}
            backgroundColor={AppColors.blueBackground}
            barStyle="light-content"
            headerUnScrollable={() => (
                <HeaderWithBtn onPressBackBtn={() => navigation.goBack()} />
            )}
        >
            <View style={styles.container}>
                <ScreenNameHeader
                    title={`Become a ${type}`}
                    underline
                    textSize={6}
                    containerStyles={styles.containerStyle}
                    underLineStyles={[{ width: width(15) }, CommonStyles.marginLeft_1]}
                    textColor={
                        type == "PINSTYLIST"
                            ? AppColors.sky_Blue
                            : type == "PINSTORE"
                                ? AppColors.darkOrange
                                : AppColors.white
                    }
                    underLineColor={
                        type == "PINSTYLIST"
                            ? AppColors.sky_Blue
                            : type == "PINSTORE"
                                ? AppColors.darkOrange
                                : AppColors.white
                    }
                />
                <View style={styles.logoContainer}>
                    <Image
                        source={
                            type == "PINSTYLIST"
                                ? data.categoryImages[1].img
                                : type == "PINSTORE"
                                    ? data.categoryImages[2].img
                                    : data.categoryImages[0].img
                        }
                        resizeMode="contain"
                        style={styles.logoStyle}
                    />
                </View>
                <CustomText
                    children={
                        type == "PINSTYLIST"
                            ? pinstylist_Desc1
                            : type == "PINSTORE"
                                ? pinstore_Desc1
                                : pinstar_Desc1
                    }
                    center
                    size={4}
                    fontFamily={AppFonts.segoe_ui_regular}
                    textStyles={styles.firstDescStyle}
                />
                <CustomText
                    children={
                        type == "PINSTYLIST"
                            ? pinstylist_Desc2
                            : type == "PINSTORE"
                                ? pinstore_Desc2
                                : pinstar_Desc2
                    }
                    center
                    size={4}
                    fontFamily={AppFonts.segoe_ui_regular}
                    textStyles={styles.secondDescStyle}
                />
                <PrimaryBtn
                    containerStyle={styles.btnContainer}
                    title={`JOIN AS ${type}`}
                    textStyle={styles.btnText}
                    onPress={() => alert("pressed")}
                />
            </View>
        </ScreenWrapper>
    );
}
