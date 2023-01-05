import { Image, Text, View } from "react-native";
import React from "react";
import { HeaderWithBtn, PrimaryBtn, ScreenWrapper } from "~components";
import AppColors from "~utills/AppColors";
import styles from "./styles";

export default function AddPhotosToLookbook({ navigation }) {
    const imgUri =
        "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    return (
        <ScreenWrapper
            scrollEnabled
            statusBarColor={AppColors.blueBackground}
            backgroundColor={AppColors.blueBackground}
            barStyle="light-content"
            headerUnScrollable={() => (
                <HeaderWithBtn
                    centerText={"Add tags to your looks"}
                    centerTxtStyles={styles.headerText}
                    onPressBackBtn={() => navigation.goBack()}
                />
            )}
        >
            <View style={styles.container}>
                <View style={styles.imgContainer}>
                    <Image
                        source={{ uri: imgUri }}
                        resizeMode="cover"
                        style={styles.imgStyles}
                    />
                </View>
                <View style={styles.bottomWrapper}>
                    <PrimaryBtn
                        title="Add tags"
                        containerStyle={[
                            styles.btnContainer,
                            { backgroundColor: AppColors.white_30 },
                        ]}
                        textStyle={[styles.btnText]}
                    />
                    <PrimaryBtn
                        title="Save"
                        containerStyle={styles.btnContainer}
                        textStyle={styles.btnText}
                    />
                </View>
            </View>
        </ScreenWrapper>
    );
}
