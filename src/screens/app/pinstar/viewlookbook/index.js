import { FlatList, Image, LogBox, Text, TouchableOpacity, View } from "react-native";
import React, { useRef, useState } from "react";
import styles from "./styles";
import {
    HeaderWithBtn,
    ScreenWrapper,
    ImageViewer,
    CustomText,
    CustomGallery,
    Optional,
    StatusMsgModal,
} from "~components";
import AppColors from "~utills/AppColors";
import { Icons } from "~assets";
import { MenuIconSvg } from "~assets/Svg";
import { useDummyData } from "~hooks";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { height, width } from "~utills/Dimension";
import AppFonts from "~utills/AppFonts";
import ScreenNames from "~routes/routes";

export default function ViewLookbook({ navigation }) {
    const editModalRef = useRef();
    const myLookbookData = useDummyData().myLookbooks[0];
    const noOfGrid = 3;
    const [isVisible, setIsVisible] = useState(false);
    const Toggle = () => setIsVisible(!isVisible);
    const [LookImg, setLookImg] = useState(null);
    const successmodalRef = useRef()

    const getCoverPhoto = (val) => {
        setLookImg(val);
        Toggle();
        navigation.navigate(ScreenNames.ADDPHOTOSTOLOOKBOOK, { lookImg: val });
    };


    const render_Images = ({ item, index }) => {
        return (
            <View style={styles.flatListItemWrapper}>
                <ImageViewer
                    imageUri={item.img}
                    containerStyles={styles.itemImgContainer}
                    imageResizeMode="cover"
                    imageStyles={styles.coverImgStyles}
                    onPressForImgViewer={() =>
                        navigation.navigate(ScreenNames.VIEWLOOKBOOKIMAGE, {
                            selectedImg: item,
                        })
                    }
                />
                <View style={styles.tagItemWrapper}>
                    <FontAwesome5 name="tags" size={width(2.2)} color={AppColors.white} />
                    <CustomText
                        size={2.5}
                        fontFamily={AppFonts.segoe_ui_semibold}
                        children={item.tags.length}
                        lineHeight={3.5}
                    />
                </View>
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
                    centerText={myLookbookData.lookbookName}
                    centerTxtStyles={styles.headerText}
                    onPressBackBtn={() => navigation.goBack()}
                    enableCloseButton
                    rightButtonStyles={{ backgroundColor: "transparent" }}
                    rightElement={
                        <View style={styles.Itemswrapper}>
                            <TouchableOpacity
                                style={styles.plusBtnContainer}
                                onPress={Toggle}
                            >
                                <Image
                                    source={Icons.plusIcon}
                                    resizeMode="contain"
                                    style={styles.PlusIconStyles}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.menuSvgContainer}
                                onPress={() => editModalRef?.current?.show()}
                            >
                                <MenuIconSvg />
                            </TouchableOpacity>
                        </View>
                    }
                    enableRightElement
                />
            )}
        >
            <CustomGallery
                isVisible={isVisible}
                onPressBackBtn={Toggle}
                headerTitle={"Add a look"}
                onSave={getCoverPhoto}
                btnTitle={"Save"}
            />
            <Optional
                ref={editModalRef}
                titleText={'Delete this Lookbook?'}
                firstBtnText={'No'}
                secondBtnText={'Yes'}
                horizontal
                onPressFirstBtn={() => editModalRef?.current?.hide()}
                onPressSecondBtn={() => {
                    editModalRef?.current?.hide()
                    setTimeout(() => successmodalRef?.current?.show(), 600)
                    setTimeout(() => {
                        successmodalRef?.current?.hide()
                        navigation.navigate(ScreenNames.USERPROFILEPINSTAR)
                    }, 2000)

                }}
            />
            <StatusMsgModal ref={successmodalRef} title="Deleted" titleTxtColor={AppColors.blueBackground} />
            <View style={styles.container}>
                <ImageViewer
                    imageUri={myLookbookData.coverimg}
                    containerStyles={styles.imgContainer}
                    imageResizeMode="cover"
                    imageStyles={styles.coverImgStyles}
                />
                <View style={styles.tagsIconsWrappers}>
                    <Ionicons
                        name="ios-images-outline"
                        size={width(4.5)}
                        color={AppColors.white}
                    />
                    <CustomText
                        size={3.4}
                        fontFamily={AppFonts.segoe_ui_semibold}
                        children={myLookbookData.totalImages}
                        paddingHorizontal={width(2)}
                    />
                    <FontAwesome5 name="tags" size={width(4)} color={AppColors.white} />
                    <CustomText
                        size={3.4}
                        fontFamily={AppFonts.segoe_ui_semibold}
                        children={myLookbookData.totalNoOfTags}
                        paddingHorizontal={width(2)}
                    />
                </View>
                <FlatList
                    data={myLookbookData.images}
                    keyExtractor={(e, i) => i.toString()}
                    renderItem={render_Images}
                    numColumns={noOfGrid}
                    contentContainerStyle={styles.contentContainerStyle}
                />
            </View>
        </ScreenWrapper>
    );
}
