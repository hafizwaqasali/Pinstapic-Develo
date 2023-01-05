import { Text, View } from "react-native";
import React from "react";
import styles from "./styles";
import {
    AddCoverPhoto,
    HeaderWithBtn,
    ScreenWrapper,
    InputField,
    PrimaryBtn,
} from "~components";
import AppColors from "~utills/AppColors";
import { EmptyBoxSvg } from "~assets/Svg";
import CommonStyles from "~utills/CommonStyles";
import ScreenNames from "~routes/routes";

export default function CreateLookbook({ navigation }) {
    return (
        <ScreenWrapper
            scrollEnabled
            statusBarColor={AppColors.blueBackground}
            backgroundColor={AppColors.blueBackground}
            barStyle="light-content"
            headerUnScrollable={() => (
                <HeaderWithBtn
                    centerText={"Add a Lookbook"}
                    centerTxtStyles={styles.headerText}
                    onPressBackBtn={() => navigation.goBack()}
                    containerStyles={styles.headerContainer}
                />
            )}
        >
            <View style={styles.container}>
                <View style={styles.coverPhotoContainer}>
                    <AddCoverPhoto isSquare />
                </View>
                <View style={styles.bottomSection}>
                    <InputField
                        label={"Lookbook Title"}
                        placeholder={"Write something ..."}
                        placeholderColor={AppColors.white_30}
                    />
                    <PrimaryBtn
                        title="Upload photos to your Lookbook"
                        containerStyle={styles.btnStyles}
                        onPress={() => navigation.navigate(ScreenNames.ADDPHOTOSTOLOOKBOOK)}
                    />
                </View>
            </View>
        </ScreenWrapper>
    );
}
