import { FlatList, Image, ScrollView, Text, TouchableOpacity, View, Platform } from "react-native";
import React from "react";
import styles from "./styles";
import {
    CustomText,
    ScreenWrapper,
    HeaderWithBtn,
    UserStories,
} from "~components";
import AppColors from "~utills/AppColors";
import ScreenNames from "~routes/routes";
import { height, width } from "~utills/Dimension";
import { useDummyData } from "~hooks";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
import AppFonts from "~utills/AppFonts";

export default function PinstarDashboard({ navigation }) {
    let isIos = Platform.OS == "ios" ? true : false
    let stories = Array(10).fill(0);
    const { myLookbookImgs } = useDummyData();
    const renderFlatList = ({ item, index }) => {
        console.log(item)
        return (
            <View style={styles.itemWrapper}>
                <Image
                    source={{ uri: item }}
                    resizeMode={'cover'}
                    style={styles.imgStyling}
                />
            </View>
        );
    };
    return (
        <ScreenWrapper
            scrollEnabled
            statusBarColor={AppColors.blueBackground}
            backgroundColor={AppColors.blueBackground}
            barStyle="light-content"
            headerUnScrollable={() => (
                <HeaderWithBtn centerText={"Home"} isCenterTitle hideBackBtn />
            )}
        >
            <View style={styles.container}>
                <View style={styles.storiesWrapper}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {stories.map((i, index) => {
                            return (
                                <View
                                    key={index}
                                    style={[
                                        styles.storiesContentContainer,
                                        index == 0 && { marginLeft: width(5) },
                                    ]}
                                >
                                    <UserStories
                                        isNewStory={index == 0 ? true : false}
                                        isStoryTitle={index == 0 ? "Add" : "Winter"}
                                    />
                                    {index == 0 && <View style={styles.seprator} />}
                                </View>
                            );
                        })}
                    </ScrollView>
                </View>
                <View style={styles.flatlistContainer}>
                    <FlatList
                        pagingEnabled
                        data={myLookbookImgs ?? []}
                        keyExtractor={(e, i) => i}
                        renderItem={renderFlatList}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.contentContainerStyle}
                    />
                    <View style={styles.activityWrapper}>
                        <TouchableOpacity style={styles.roundContainer}>
                            <SimpleLineIcons name="heart" size={isIos ? width(7.5) : width(6.5)} color={AppColors.white} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.roundContainer}>
                            <Ionicons name="ios-chatbubble-ellipses-sharp" size={isIos ? width(7.5) : width(6.5)} color={AppColors.white} />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.roundContainer, styles.profileContainer]}>
                            <Image source={{ uri: myLookbookImgs[0] }} resizeMode={"cover"} style={styles.userProfileimgStyling} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bottomSection}>
                        <Text style={styles.userNameTextStyles} >
                            Ali Sharper
                        </Text>
                        <Text style={styles.userDetailsTextStyles}>
                            All red for today ...
                        </Text>
                        <Text style={styles.userDetailsTextStyles}>
                            Lipstick: @NYXcosmetic
                        </Text>
                    </View>
                </View>
            </View>
        </ScreenWrapper>
    );
}
