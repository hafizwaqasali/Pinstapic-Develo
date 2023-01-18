import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import { CustomText, HeaderWithBtn, LooksCard, ScreenWrapper } from "~components";
import { EditPencilIconSvg } from "~assets/Svg";
import AppColors from "~utills/AppColors";
import { Icons } from "~assets";
import AppFonts from "~utills/AppFonts";
import Ionicons from "react-native-vector-icons/Ionicons"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { height, width } from "~utills/Dimension";
import { useDummyData } from "~hooks";
import ScreenNames from "~routes/routes";


export default function MyAllLookbooks({ navigation }) {
    const { myLookbooks } = useDummyData();
    const [totalTags, setTotalTags] = useState(0)
    const [totalImages, setTotalImages] = useState(0)

    useEffect(() => {
        loadData()
    }, [])

    const loadData = () => {
        let totalNoOfTags = 0
        let totalNoOfImages = 0
        myLookbooks.forEach(element => {
            totalNoOfTags = totalNoOfTags + element.totalNoOfTags
            totalNoOfImages = totalNoOfImages + element.totalImages
        });
        setTotalTags(totalNoOfTags)
        setTotalImages(totalNoOfImages)

    }


    const HeaderUnScrollable = () => {
        return (
            <>
                <HeaderWithBtn
                    centerText={`My Lookbooks`}
                    isCenterTitle
                    onPressBackBtn={() => {
                        navigation.goBack();
                    }}
                    rightElement={
                        <TouchableOpacity
                            style={styles.plusBtnContainer}
                            onPress={() => navigation.navigate(ScreenNames.CREATELOOKBOOK)}
                        >
                            <Image
                                source={Icons.plusIcon}
                                resizeMode="contain"
                                style={styles.PlusIconStyles}
                            />
                        </TouchableOpacity>
                    }
                    enableRightElement={true}

                />
                <View style={styles.lookBookDetailsWrapper}>
                    <CustomText children={`${myLookbooks?.length} Lookbooks`} fontFamily={AppFonts.segoe_ui_semibold} size={3} lineHeight={3} />
                    <View style={styles.lookBooksDescriptionWrapper}>
                        <Ionicons
                            name="ios-images-outline"
                            size={width(2.6)}
                            color={AppColors.white}
                        />
                        <CustomText
                            lineHeight={3.5}
                            size={2.5}
                            fontFamily={AppFonts.segoe_ui_semibold}
                            children={totalImages}
                            paddingHorizontal={width(1)}
                        />
                        <FontAwesome5 name="tags" size={width(2.6)} color={AppColors.white} />
                        <CustomText
                            size={2.5}
                            lineHeight={3.5}
                            fontFamily={AppFonts.segoe_ui_semibold}
                            children={totalTags}
                            paddingHorizontal={width(1)}
                        />
                    </View>
                </View>
            </>
        );
    };

    return (
        <ScreenWrapper
            scrollEnabled
            statusBarColor={AppColors.blueBackground}
            backgroundColor={AppColors.blueBackground}
            barStyle="light-content"
            headerUnScrollable={HeaderUnScrollable}
        >
            <View style={styles.container}>
                <FlatList
                    contentContainerStyle={{ paddingVertical: height(2) }}
                    data={myLookbooks}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(e, i) => i}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={styles.flatListItemWrapper}>
                                <LooksCard
                                    imgUri={item.coverimg}
                                    title={item.lookbookName}
                                    onPressCard={() => alert("pressed")}
                                    enableDescription
                                    totalImages={item.images.length}
                                    totalTags={item.totalNoOfTags}
                                    resizeMode={"contain"}
                                />
                            </View>
                        );
                    }}
                />
            </View>
        </ScreenWrapper>
    );
}
