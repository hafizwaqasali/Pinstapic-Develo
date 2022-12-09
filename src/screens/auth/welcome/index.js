import { View } from "react-native";
import React from "react";
import { OnBoardingSwiper, ScreenWrapper } from "~components";
import { PrimaryBtn } from "~components/buttons/primary";
import AppColors from "~utills/AppColors";
import CommonStyles from "~utills/CommonStyles";
import styles from "./styles";
import ScreenNames from "~routes/routes";
const DATA = [
    {
        img: require("../../../assets/images/Swipeable1.png"),
    },
    {
        img: require("../../../assets/images/Swipeable2.png"),
    },
    {
        img: require("../../../assets/images/Swipeable3.png"),
    },
    {
        img: require("../../../assets/images/Swipeable4.png"),
    },
];

export default function Welcome({ navigation }) {
    return (
        <ScreenWrapper statusBarColor={AppColors.blueBackground}>
            <View style={styles.container}>
                <View style={styles.swipperContainer}>
                    <OnBoardingSwiper
                        fullScreenImages={DATA}
                        showDots={false}
                        resizeMode={"cover"}
                        horizontal={true}
                    />
                </View>
                <View style={styles.bottomButtons}>
                    <PrimaryBtn
                        title="Login"
                        transparentBtn={true}
                        containerStyle={CommonStyles.marginVertical_2}
                        onPress={() => navigation.navigate(ScreenNames.LOGIN)}
                    />
                    <PrimaryBtn title="Join Now" />
                </View>
            </View>
        </ScreenWrapper>
    );
}
