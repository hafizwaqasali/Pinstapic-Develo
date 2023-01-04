import { ScrollView, Text, View, Image } from "react-native";
import React, { useState } from "react";
import AppColors from "~utills/AppColors";
import {
    CustomText,
    HeaderWithBtn,
    PrimaryBtn,
    ProfileInfo,
    ScreenWrapper,
    TabBar,
    UserStories,
} from "~components";
import { EditPencilIconSvg, EmptyBoxSvg } from "~assets/Svg";
import { setIsLoggedIn, setUserMeta } from "~redux/slices/user";
import { setAppLoader } from "~redux/slices/config";
import { useDispatch } from "react-redux";
import styles from "./styles";
import { Icons } from "../../../../assets";
import { useDummyData } from "~hooks";
import { width } from "~utills/Dimension";
import AppFonts from "~utills/AppFonts";
import ScreenNames from "~routes/routes";

export default function UserProfilePinstar({ navigation }) {
    const [userName, setUserName] = useState("@mango_scavo");
    const dispatch = useDispatch();
    const profileData = useDummyData();
    const [userProfile, setUserProfile] = useState(profileData.profileData);
    let stories = Array(10).fill(0);
    const [tapbarOptions, setTapbarOptions] = useState([
        "Lookbooks",
        "Yay or Nay",
        "My Closet",
    ]);
    const [selectedOpt, setSelectedOpt] = useState(tapbarOptions[0]);

    const onChangeOption = (val) => {
        setSelectedOpt(val);
    };

    const Lookbooks = () => {
        return (
            <View style={styles.lookbookContainer}>
                <Image
                    source={Icons.emptyBoxIcon}
                    resizeMode="contain"
                    style={styles.emptyBoxImg}
                />
                <CustomText
                    children={"There are no lookbooks added yet."}
                    size={3}
                    fontFamily={AppFonts.segoe_ui_bold}
                    center
                    textColor={AppColors.white_50}
                />
                <PrimaryBtn
                    title={"Add a Lookbook"}
                    containerStyle={styles.btnStyles}
                    onPress={() => navigation.navigate(ScreenNames.CREATELOOKBOOK)}
                />
            </View>
        );
    };
    const YayorNay = () => {
        return (
            <View style={styles.YayorNayContainer}>
                <Image
                    source={Icons.emptyBoxIcon}
                    resizeMode="contain"
                    style={styles.emptyBoxImg}
                />
                <CustomText
                    children={"There are no Yay or Nay added yet."}
                    size={3}
                    fontFamily={AppFonts.segoe_ui_bold}
                    center
                    textColor={AppColors.white_50}
                />
                <PrimaryBtn
                    title={"Add a Yay or Nay"}
                    containerStyle={styles.btnStyles}
                />
            </View>
        );
    };
    const MyCloset = () => {
        return (
            <View style={styles.myClosetContainer}>
                <Image
                    source={Icons.emptyBoxIcon}
                    resizeMode="contain"
                    style={styles.emptyBoxImg}
                />
                <CustomText
                    children={"There are no closet added yet."}
                    size={3}
                    fontFamily={AppFonts.segoe_ui_bold}
                    center
                    textColor={AppColors.white_50}
                />
                <PrimaryBtn
                    title={"Add items to closet"}
                    containerStyle={styles.btnStyles}
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
                <HeaderWithBtn
                    centerText={`${userName}`}
                    isCenterTitle
                    onPressBackBtn={() => {
                        dispatch(setAppLoader(true));
                        setTimeout(() => {
                            dispatch(setUserMeta(null));
                            dispatch(setIsLoggedIn(false));
                            dispatch(setAppLoader(false));
                        }, 600);
                    }}
                    rightElement={<EditPencilIconSvg />}
                    enableRightElement={true}
                    onPressRightBtn={() => alert("presssed")}
                />
            )}
        >
            <View style={styles.container}>
                <View style={styles.userProfileWrapper}>
                    <ProfileInfo profileImg={Icons.checkedIcon} data={userProfile} />
                </View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.storiesWrapper}
                >
                    {stories.map((i, index) => {
                        return (
                            <View
                                key={index}
                                style={[
                                    styles.storiesContentContainer,
                                    index == 0 && { marginLeft: width(5) },
                                ]}
                            >
                                <UserStories isNewStory={index == 0 ? true : false} />
                                {index == 0 && <View style={styles.seprator} />}
                            </View>
                        );
                    })}
                </ScrollView>
                <TabBar
                    containerStyles={styles.containerStyles}
                    data={tapbarOptions}
                    isSelected={selectedOpt}
                    onPress={onChangeOption}
                />
                {selectedOpt == "Lookbooks" ? (
                    <Lookbooks />
                ) : selectedOpt == "Yay or Nay" ? (
                    <YayorNay />
                ) : (
                    selectedOpt == "My Closet" && <MyCloset />
                )}
            </View>
        </ScreenWrapper>
    );
}
