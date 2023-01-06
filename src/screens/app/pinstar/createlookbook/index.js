import { Text, View } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import {
    AddCoverPhoto,
    HeaderWithBtn,
    ScreenWrapper,
    InputField,
    PrimaryBtn,
    CustomGallery,
} from "~components";
import AppColors from "~utills/AppColors";
import { EmptyBoxSvg } from "~assets/Svg";
import CommonStyles from "~utills/CommonStyles";
import ScreenNames from "~routes/routes";

export default function CreateLookbook({ navigation }) {
    const [visibleGallery, setVisibleGallery] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [coverImg, setcoverImg] = useState(null)
    const [LookImg, setLookImg] = useState(null)
    const ToggleGallery = () => setVisibleGallery(!visibleGallery);
    const Toggle = () => setIsVisible(!isVisible);
    const getSelectedImg = (val) => {
        setcoverImg(val)
        ToggleGallery()
    }
    const getCoverPhoto = (val) => {
        setLookImg(val)
        Toggle()
        navigation.navigate(ScreenNames.ADDPHOTOSTOLOOKBOOK, { lookImg: val })
    }

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
            <CustomGallery
                isVisible={visibleGallery}
                onPressBackBtn={ToggleGallery}
                headerTitle={"Lookbook Cover"}
                onSave={getSelectedImg}
            />
            <CustomGallery
                isVisible={isVisible}
                onPressBackBtn={Toggle}
                headerTitle={"Add a look"}
                onSave={getCoverPhoto}
                btnTitle={"Save"}
            />
            <View style={styles.container}>
                <View style={styles.coverPhotoContainer}>
                    <AddCoverPhoto isSquare onPress={ToggleGallery} image={coverImg} />
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
                        onPress={Toggle}
                    />
                </View>
            </View>
        </ScreenWrapper>
    );
}
