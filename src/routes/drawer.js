import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import React from "react";
import AppColors from "~utills/AppColors";
import { height, width } from "~utills/Dimension";
import { CustomText } from "~components";
import AppFonts from "~utills/AppFonts";
import Entypo from "react-native-vector-icons/Entypo"

export default function Appdrawer(props) {
    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <ScrollView showsVerticalScrollIndicator={false} >
                <View style={styles.container} >
                    {/* <View style={styles.profileInfoContainer}>
                        <TouchableOpacity
                            style={styles.profileRoundWrapper}
                        ></TouchableOpacity>
                        <View style={styles.profileDetailsWrapper}>
                            <CustomText
                                lineHeight={5}
                                size={3.2}
                                fontFamily={AppFonts.segoe_ui_bold}
                                textColor={AppColors.white}
                            >
                                Magno Scavo
                            </CustomText>
                            <CustomText
                                lineHeight={5}
                                size={3}
                                fontFamily={AppFonts.segoe_ui_medium}
                                textColor={AppColors.white_70}
                            >
                                New York City, USA
                            </CustomText>
                            <CustomText
                                lineHeight={5}
                                size={2.8}
                                fontFamily={AppFonts.segoe_ui_medium}
                                textColor={AppColors.white_70}
                                textwidth={40}
                            >
                                Lorem ipsum dolor sit amet, consecter adipiscing elit.
                            </CustomText>
                            <View style={styles.favouriteSection}>
                                <Entypo name="star" size={width(3)} color={AppColors.darkOrange} />
                                <CustomText
                                    lineHeight={5}
                                    size={2.8}
                                    fontFamily={AppFonts.segoe_ui_medium}
                                    textColor={AppColors.white_70}
                                    textwidth={40}
                                >
                                    481
                                </CustomText>
                                <Text>482</Text>
                                <Text>482</Text>
                            </View>
                            <View style={styles.followersSection}>
                                <Text>hu</Text>
                                <Text>hu</Text>
                            </View>
                            <TouchableOpacity>
                                <Text>Switch Profile</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.userType}>
                            <Text>pinstar</Text>
                        </View>
                    </View> */}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        backgroundColor: AppColors.purple,
    },
    container: {
        flex: 1,
    },
    profileInfoContainer: {
        overflow: "hidden",
        paddingVertical: height(2),
        paddingHorizontal: width(3),
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",

    },
    profileRoundWrapper: {
        height: height(9),
        width: height(9),
        borderRadius: height(5),
        borderColor: AppColors.white,
        borderWidth: width(1),
        alignSelf: "flex-start",
    },
    favouriteSection: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

    },
    followersSection: {
        flexDirection: "row",
    },
    profileDetailsWrapper: {
    },
    userType: {
        alignSelf: "flex-start",
    },
});
