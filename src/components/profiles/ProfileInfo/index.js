import { Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import styles from "./styles";
import { CustomText } from "~components/texts";
import AppFonts from "~utills/AppFonts";
import AppColors from "~utills/AppColors";

export default function ProfileInfo({ profileImg, data, onPressFollowers = () => null }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.leftContainer}>
                {ProfileInfo && (
                    <Image
                        source={profileImg}
                        resizeMode="contain"
                        style={styles.imgStyles}
                    />
                )}
            </TouchableOpacity>
            <View style={styles.rightContainer}>
                {data && (
                    <>
                        <View style={styles.UserNameWrapper}>
                            <CustomText children={data.name} numberOfLines={1} fontFamily={AppFonts.segoe_ui_bold} size={4} />
                            <View style={styles.userTypeContainer}>
                                <CustomText
                                    lineHeight={3.5}
                                    textColor={AppColors.smoky_Grey}
                                    size={3}
                                    center
                                    fontFamily={AppFonts.segoe_ui_medium}
                                    textStyles={styles.textStyles}
                                    numberOfLines={1}
                                    children={
                                        data.type == "pinstar"
                                            ? "Pinstar"
                                            : data.type == "pinstylist"
                                                ? "Pinstylist"
                                                : data.type == "pinstore" && "Pinstore"
                                    }
                                />
                            </View>
                        </View>
                        <CustomText children={data.location}
                            numberOfLines={1}
                            size={2.5}
                            lineHeight={3.5}
                            fontFamily={AppFonts.segoe_ui_medium}
                        />
                        <CustomText children={data.description}
                            numberOfLines={1}
                            size={2.4}
                            lineHeight={3.5}
                            fontFamily={AppFonts.segoe_ui_medium}
                        />
                        <View style={styles.followersSection}>
                            <TouchableOpacity onPress={onPressFollowers} style={styles.followers}>
                                <CustomText children={data.noOfFollowers}
                                    numberOfLines={1}
                                    size={3}
                                    lineHeight={3.5}
                                    fontFamily={AppFonts.segoe_ui_semibold}
                                />
                                <CustomText children={"Followers"}
                                    numberOfLines={1}
                                    size={2}
                                    lineHeight={3.5}
                                    fontFamily={AppFonts.segoe_ui_medium}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onPressFollowers} style={styles.followers}>
                                <CustomText children={data.noOfFollowing}
                                    numberOfLines={1}
                                    size={3}
                                    lineHeight={3.5}
                                    fontFamily={AppFonts.segoe_ui_semibold}
                                />
                                <CustomText children={"Followings"}
                                    numberOfLines={1}
                                    size={2}
                                    lineHeight={3.5}
                                    fontFamily={AppFonts.segoe_ui_medium}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onPressFollowers} style={styles.followers}>
                                <CustomText children={data.noOfFavourites}
                                    numberOfLines={1}
                                    size={3}
                                    lineHeight={3.5}
                                    fontFamily={AppFonts.segoe_ui_semibold}
                                />
                                <CustomText children={"Favorites"}
                                    numberOfLines={1}
                                    size={2}
                                    lineHeight={3.5}
                                    fontFamily={AppFonts.segoe_ui_medium}
                                />
                            </TouchableOpacity>
                        </View>
                    </>

                )}
            </View>
        </View>
    );
}
