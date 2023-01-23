import { Text, View, FlatList, Image, TouchableOpacity, Platform } from "react-native";
import React from "react";
import styles from "./styles";
import { CustomText, HeaderWithBtn, ScreenWrapper } from "~components";
import AppColors from "~utills/AppColors";
import { useDummyData } from "~hooks";
import AntDesign from "react-native-vector-icons/AntDesign"
import { width } from "~utills/Dimension";
import AppFonts from "~utills/AppFonts";

export default function PinstarYayorNay() {
    let { yayOrNayImages } = useDummyData();
    let isIos = Platform.OS == "ios" ? true : false


    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.flatlistContainer}>
                <FlatList
                    data={item.yayOrNays}
                    keyExtractor={(x, index) => index}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={render_YayorNays}
                    pagingEnabled
                />
                <View style={styles.activityWrapper}>
                    <>
                        <TouchableOpacity style={styles.roundContainer}>
                            <AntDesign name="like1" size={isIos ? width(7.5) : width(6.5)} color={AppColors.white} />
                        </TouchableOpacity>
                    </>
                    <TouchableOpacity style={[styles.roundContainer, styles.profileContainer]}>
                        <Image source={{ uri: item?.userProfileImg }} resizeMode={"cover"} style={styles.userProfileimgStyling} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
    const render_YayorNays = ({ item, index }) => {

        return (
            <View style={styles.innerFlatlistContainer}>
                <Image
                    source={{ uri: item }}
                    resizeMode={"cover"}
                    style={styles.yayOrNayImagesStyling}
                />
                <View style={styles.imagesCountContainer}>
                    <CustomText size={4} fontFamily={AppFonts.segoe_ui_medium} textColor={AppColors.black} lineHeight={5}>
                        {index + 1}/3
                    </CustomText>
                </View>
            </View>
        );
    };
    return (
        <ScreenWrapper
            // scrollEnabled
            statusBarColor={AppColors.blueBackground}
            backgroundColor={AppColors.blueBackground}
            barStyle="light-content"
            headerUnScrollable={() => (
                <HeaderWithBtn
                    centerText={"Yay or Nay"}
                    isCenterTitle
                    enableAddButton
                />
            )}
        >
            <View style={styles.container}>
                <FlatList
                    data={yayOrNayImages ?? []}
                    keyExtractor={(ele, i) => i}
                    showsVerticalScrollIndicator={false}
                    renderItem={renderItem}
                    pagingEnabled
                />
            </View>
        </ScreenWrapper>
    );
}
