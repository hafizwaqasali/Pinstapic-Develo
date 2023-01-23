import { ScrollView, Text, View, Image, FlatList, TouchableOpacity } from "react-native";
import React, { useRef, useState } from "react";
import AppColors from "~utills/AppColors";
import {
    CustomGallery,
    CustomText,
    HeaderWithBtn,
    LooksCard,
    PrimaryBtn,
    ProfileInfo,
    ScreenWrapper,
    StatusMsgModal,
    TabBar,
    UserStories,
    ViewImage,
} from "~components";
import { EditPencilIconSvg, HomeIconSvg, LikeIconSvg } from "~assets/Svg";
import { setIsLoggedIn, setUserMeta } from "~redux/slices/user";
import { setAppLoader } from "~redux/slices/config";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles";
import { Icons } from "../../../../assets";
import { useDummyData } from "~hooks";
import { height, width } from "~utills/Dimension";
import AppFonts from "~utills/AppFonts";
import ScreenNames from "~routes/routes";
import { selectIsLookAdded, selectIsYayorNayAdded, setIsYayorNayAdded } from "~redux/slices/extras";

export default function UserProfilePinstar({ navigation }) {
    const [userName, setUserName] = useState("@mango_scavo");
    const [isVisible, setIsVisible] = useState(false);
    const Toggle = () => setIsVisible(!isVisible);
    const dispatch = useDispatch();
    const YayorNayImageRef = useRef();
    const saveModalRef = useRef();
    const isLookAdded = useSelector(selectIsLookAdded);
    const isYayorNayAdded = useSelector(selectIsYayorNayAdded);
    const profileData = useDummyData();
    const { myLookbooks } = useDummyData();
    const [userProfile, setUserProfile] = useState(profileData.profileData);
    let stories = Array(10).fill(0);
    const [tapbarOptions, setTapbarOptions] = useState([
        { type: "Lookbooks" },
        { type: "Yay or Nay" },
        { type: "My Closet" },
    ]);
    const [selectedOpt, setSelectedOpt] = useState(tapbarOptions[0].type);
    const [YayorNayImages, setYayorNayImages] = useState([]);



    const onChangeOption = (val) => {
        setSelectedOpt(val);
    };

    const getCoverPhoto = (val) => {
        setYayorNayImages(val);
        setIsVisible(false);
        setTimeout(() => {
            YayorNayImageRef?.current?.show();
        }, 600);
    };

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
    const MyLookbooks = () => {
        return (
            <View style={styles.myLookbooksContainer}>
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
                                    onPressCard={() =>
                                        navigation.navigate(ScreenNames.VIEWLOOKBOOK)
                                    }
                                />
                            </View>
                        );
                    }}
                />
                <PrimaryBtn
                    containerStyle={styles.editLookbooksBtn}
                    title={"Edit my Lookbooks"}
                    textStyle={styles.btnTextStyle}
                    onPress={() => navigation.navigate(ScreenNames.MYAllLOOKBOOKS)}
                />
            </View>
        );
    };

    const MyYayorNay = () => {
        return (
            <View style={styles.myYayNayContainer}>
                <FlatList
                    pagingEnabled
                    data={YayorNayImages ?? []}
                    keyExtractor={(e, i) => i}
                    renderItem={renderFlatList}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.contentContainerStyle}
                />
                <PrimaryBtn
                    containerStyle={styles.editYayorNayBtn}
                    title={"Edit My Yay or Nay"}
                    textStyle={styles.btnTextStyle}
                    onPress={() => alert('pressed')}
                />
                <TouchableOpacity style={styles.likeContainer}>
                    <LikeIconSvg />
                </TouchableOpacity>
                {/* <CustomText textStyles={styles.likePercentText} children={'67%'} backgroundColor={AppColors.red} /> */}
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
                    onPress={() => Toggle()}
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
        <>
            <ViewImage
                ref={YayorNayImageRef}
                headerTitle={"Yay or Nay"}
                btnTitle={"Post"}
                data={YayorNayImages}
                onPressBackBtn={() => YayorNayImageRef?.current?.hide()}
                onPressBtn={() => {
                    YayorNayImageRef?.current?.hide();
                    setTimeout(() => {
                        saveModalRef?.current?.show();
                    }, 600);
                    setTimeout(() => {
                        saveModalRef?.current?.hide();
                        dispatch(setIsYayorNayAdded(true))
                    }, 2000);
                }}
            />
            <View style={{ position: "absolute" }}>
                <StatusMsgModal
                    ref={saveModalRef}
                    title={"POSTED"}
                    titleTxtColor={AppColors.blueBackground}
                    disableNavigation
                />
            </View>
            <ScreenWrapper
                // scrollEnabled
                statusBarColor={AppColors.blueBackground}
                backgroundColor={AppColors.blueBackground}
                barStyle="light-content"
                headerUnScrollable={() => (
                    <HeaderWithBtn
                        centerText={`${userName}`}
                        leftElement={<TouchableOpacity onPress={() => navigation.navigate('Tabbar')}>
                            <HomeIconSvg />
                        </TouchableOpacity>}
                        isCenterTitle

                        onPressBackBtn={() => {
                            // dispatch(setAppLoader(true));
                            // setTimeout(() => {
                            //     dispatch(setUserMeta(null));
                            //     dispatch(setIsLoggedIn(false));
                            //     dispatch(setAppLoader(false));
                            // }, 600);
                        }}
                        rightElement={<EditPencilIconSvg />}
                        enableRightElement={true}
                        onPressRightBtn={() => alert("presssed")}
                    />
                )}
            >
                <CustomGallery
                    isVisible={isVisible}
                    onPressBackBtn={Toggle}
                    headerTitle={"Select 2 to 6 images"}
                    onSave={getCoverPhoto}
                    btnTitle={"Next"}
                    dualSelection={selectedOpt == "Yay or Nay" ? true : false}
                    multiSelect={selectedOpt == "Yay or Nay" ? true : false}
                />
                <View style={styles.container}>
                    <View style={styles.userProfileWrapper}>
                        <ProfileInfo
                            profileImg={myLookbooks[0]?.coverimg}
                            data={userProfile}
                        />
                    </View>
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
                                        <UserStories isNewStory={index == 0 ? true : false} />
                                        {index == 0 && <View style={styles.seprator} />}
                                    </View>
                                );
                            })}
                        </ScrollView>
                    </View>

                    <TabBar
                        containerStyles={styles.containerStyles}
                        data={tapbarOptions}
                        isSelected={selectedOpt}
                        onPress={onChangeOption}
                    />
                    {selectedOpt == "Lookbooks" ? (
                        !isLookAdded ? (
                            <Lookbooks />
                        ) : (
                            <MyLookbooks />
                        )
                    ) : selectedOpt == "Yay or Nay" ? (
                        !isYayorNayAdded ? (
                            <YayorNay />
                        ) : (
                            <MyYayorNay />
                        )
                    ) : (
                        selectedOpt == "My Closet" && <MyCloset />
                    )}
                </View>
            </ScreenWrapper>
        </>
    );
}
