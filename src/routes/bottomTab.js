import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet,
    Platform,
    Image,
} from "react-native";
import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ScreenNames from "./routes";
import { PinstarDashboardScreen } from "~screens/app";
import AppColors from "~utills/AppColors";
import { height, width } from "~utills/Dimension";
// import { ChatIconSvg, HomeIconSvg, SearchSvg, ThreeLinesSvg, ThumbIconSvg, UsersIconSvg } from "~assets/Svg";
import { Icons } from "~assets";

const Tab = createBottomTabNavigator();

const CustomTabBar = ({ navigation }) => {
    const [focused, setFocused] = useState(-1)

    return (
        <SafeAreaView style={styles.tabbarContainer}>
            <View style={styles.ItemsWrapper}>
                <TouchableOpacity onPress={() => {
                    navigation.toggleDrawer()
                }}>
                    {/* <ThreeLinesSvg /> */}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setFocused(1)
                }}>
                    {/* <HomeIconSvg color={focused === 1 ? AppColors.darkOrange : AppColors.white} /> */}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setFocused(2)
                }}>
                    {/* <UsersIconSvg color={focused === 2 ? AppColors.darkOrange : AppColors.white} /> */}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setFocused(3)
                }}>
                    {/* <ThumbIconSvg color={focused === 3 ? AppColors.darkOrange : AppColors.white} /> */}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setFocused(4)
                }}>
                    {/* <SearchSvg color={focused === 4 ? AppColors.darkOrange : AppColors.white} /> */}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setFocused(5)
                }}>
                    {/* <ChatIconSvg color={focused === 5 ? AppColors.darkOrange : AppColors.white} /> */}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setFocused(6)
                }} style={styles.roundProfileContainer}>
                    <Image source={{ uri: "https://images.pexels.com/photos/6865918/pexels-photo-6865918.jpeg?auto=compress&cs=tinysrgb&w=800" }} resizeMode="cover" style={styles.imgStyles} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const Tabbar = ({ navigation }) => {
    return (
        <Tab.Navigator tabBar={(props) => <CustomTabBar navigation={navigation} />} screenOptions={{ header: () => false, }}>
            <Tab.Screen
                name={ScreenNames.PINSTARDASHBOARD}
                component={PinstarDashboardScreen}
            />
        </Tab.Navigator>
    );
};

export default Tabbar;

const styles = StyleSheet.create({
    tabbarContainer: {
        backgroundColor: AppColors.blueBackground,
        height: (Platform.OS == "ios" ? height(9) : height(10)),
        borderTopWidth: height(0.1),
        borderTopColor: "AppColors.smoky_Grey_20",
    },
    ItemsWrapper: {
        paddingVertical: height(1),
        paddingHorizontal: width(1),
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    roundProfileContainer: {
        height: height(4.2),
        width: height(4.2),
        borderRadius: height(2.4),
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: width(.4),
        borderColor: AppColors.white
    },
    imgStyles: {
        height: height(4.2),
        width: height(4.2),
        borderRadius: height(2.4),
    }
});
