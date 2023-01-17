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
import { AddPhotosToLookbookScreen, CreateLookbookScreen, MyAllLookbooksScreen, PinstarDashboardScreen, UserProfilePinstarScreen, ViewLookbookImageScreen, ViewLookbookScreen } from "~screens/app";
import AppColors from "~utills/AppColors";
import { height, width } from "~utills/Dimension";
import {
    ChatIconSvg,
    HomeIconSvg,
    SearchSvg,
    ThreeLinesSvg,
    ThumbIconSvg,
    UsersIconSvg,
} from "~assets/Svg";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


// const AppStack = () => {
//     return (
//         <Stack.Navigator initialRouteName={ScreenNames.USERPROFILEPINSTAR} screenOptions={{ header: () => false }}>
//             <Stack.Screen name={ScreenNames.USERPROFILEPINSTAR} component={UserProfilePinstarScreen}

//             />
//             <Stack.Screen name={ScreenNames.CREATELOOKBOOK} component={CreateLookbookScreen} />
//             <Stack.Screen name={ScreenNames.ADDPHOTOSTOLOOKBOOK} component={AddPhotosToLookbookScreen} />
//             <Stack.Screen name={ScreenNames.VIEWLOOKBOOK} component={ViewLookbookScreen} />
//             <Stack.Screen name={ScreenNames.VIEWLOOKBOOKIMAGE} component={ViewLookbookImageScreen} />
//             <Stack.Screen name={ScreenNames.MYAllLOOKBOOKS} component={MyAllLookbooksScreen} />
//             <Stack.Screen name={ScreenNames.PINSTARDASHBOARD} component={PinstarDashboardScreen} />
//         </Stack.Navigator>
//     )
// }

const CustomTabBar = (props) => {
    const [focused, setFocused] = useState(-1)

    return (
        <SafeAreaView style={styles.tabbarContainer}>
            <View style={styles.ItemsWrapper}>
                <TouchableOpacity onPress={() => {
                    props.navigation.toggleDrawer()
                }}>
                    <ThreeLinesSvg />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setFocused(1)
                }}>
                    <HomeIconSvg color={focused === 1 ? AppColors.darkOrange : AppColors.white} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setFocused(2)
                }}>
                    <UsersIconSvg color={focused === 2 ? AppColors.darkOrange : AppColors.white} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setFocused(3)
                }}>
                    <ThumbIconSvg color={focused === 3 ? AppColors.darkOrange : AppColors.white} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setFocused(4)
                }}>
                    <SearchSvg color={focused === 4 ? AppColors.darkOrange : AppColors.white} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setFocused(5)
                }}>
                    <ChatIconSvg color={focused === 5 ? AppColors.darkOrange : AppColors.white} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setFocused(6)
                    props.navigation.navigate(ScreenNames.USERPROFILEPINSTAR)
                }} style={styles.roundProfileContainer}>
                    <Image source={{ uri: "https://images.pexels.com/photos/6865918/pexels-photo-6865918.jpeg?auto=compress&cs=tinysrgb&w=800" }} resizeMode="cover" style={styles.imgStyles} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const Tabbar = ({ navigation }) => {
    return (
        <Tab.Navigator
            initialRouteName={ScreenNames.ADDPHOTOSTOLOOKBOOK}
            tabBar={(props) => <CustomTabBar {...props} />}
            screenOptions={{ header: () => false }}
        >
            <Tab.Screen name={ScreenNames.PINSTARDASHBOARD} component={PinstarDashboardScreen} />
        </Tab.Navigator>
    );
};

export default Tabbar;

const styles = StyleSheet.create({
    tabbarContainer: {
        backgroundColor: AppColors.blueBackground,
        height: Platform.OS == "ios" ? height(9) : height(7),
        borderTopWidth: height(0.1),
        borderColor: AppColors.dark_Grey,

    },
    ItemsWrapper: {
        paddingVertical: height(1),
        paddingHorizontal: width(1),
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    roundProfileContainer: {
        height: height(4.2),
        width: height(4.2),
        borderRadius: height(2.4),
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: width(0.4),
        borderColor: AppColors.white,
    },
    imgStyles: {
        height: height(4.2),
        width: height(4.2),
        borderRadius: height(2.4),
    },
});
