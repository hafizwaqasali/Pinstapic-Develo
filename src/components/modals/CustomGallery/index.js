import {
    Text,
    View,
    PermissionsAndroid,
    Platform,
    Image,
    SafeAreaView,
    TouchableOpacity,
    FlatList,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import styles from "./styles";
import {
    CustomText,
    HeaderWithBtn,
    ImagePicker,
    PrimaryBtn,
} from "~components";
import AppColors from "~utills/AppColors";
import { CameraRoll } from "@react-native-camera-roll/camera-roll";
import { FlashList } from "@shopify/flash-list";
import { height, width } from "~utills/Dimension";
import Modal from "react-native-modal";
import { useIsFocused } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setSwitchLoader } from "~redux/slices/config";
import { CameraIconSvg, CheckMarkSvg } from "~assets/Svg";
import AppFonts from "~utills/AppFonts";
import { useDummyData } from "~hooks";
import CommonStyles from "~utills/CommonStyles";

export default function CustomGallery({
    isVisible = false,
    onPressBackBtn,
    headerTitle = "",
    btnTitle = "Continue",
    onSave = () => null,
    dualSelection = false,
    multiSelect = false,
}) {
    const [photos, setPhotos] = useState();
    const imageRef = useRef();
    const isFocused = useIsFocused();
    const dispatch = useDispatch();
    const { myLookbookImgs } = useDummyData();
    const [singleImg, setSingleImg] = useState(null);
    const [multiImgs, setMultiImgs] = useState([]);
    const [isSelected, setIsSelected] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const [lookbookImgs, SetLookbookImgs] = useState([]);
    useEffect(() => {
        dispatch(setSwitchLoader(true));
        (async () => {
            await hasAndroidPermission();
            await requestCameraPermission();
            await getPhotosfromGallery();
        })();
        dispatch(setSwitchLoader(false));
    }, [isFocused, isSelected]);

    useEffect(() => {
        let temp = myLookbookImgs;
        let newArr = [];
        temp.forEach((i) => {
            newArr.push({
                img: i,
                isSelected: false,
            });
        });
        SetLookbookImgs(newArr);
    }, [isFocused, isSelected]);

    async function hasAndroidPermission() {
        const permission =
            Platform.Version >= 33
                ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
                : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;

        const hasPermission = await PermissionsAndroid.check(permission);
        if (hasPermission) {
            return true;
        }

        const status = await PermissionsAndroid.request(permission);
        return status === "granted";
    }

    const requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: "Camera Permission",
                    message:
                        "This App needs access to your camera " +
                        "so you can take awesome pictures.",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK",
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("You can use the camera");
            } else {
                console.log("Camera permission denied");
            }
        } catch (err) {
            // console.warn(err);
        }
    };

    async function savePicture(tag, type, album) {
        if (Platform.OS === "android" && !(await hasAndroidPermission())) {
            return;
        }

        CameraRoll.save(tag, { type, album });
        await getPhotosfromGallery();
    }

    async function getPhotosfromGallery() {
        CameraRoll.getPhotos({
            first: 100,
            assetType: "Photos",
        })
            .then((r) => {
                let arr = r.edges;
                arr.forEach((i) => (i.selected = false));
                arr.unshift("camera");
                setPhotos(arr);
            })
            .catch((err) => {
                //Error Loading Images
            });
    }

    return (
        <Modal
            isVisible={isVisible}
            style={styles.modalWrapper}
            onBackButtonPress={onPressBackBtn}
            hasBackdrop={false}
            animationInTiming={10}
            animationIn={"lightSpeedIn"}
            animationOut={"lightSpeedOut"}
        >
            <SafeAreaView style={styles.container}>
                <HeaderWithBtn
                    centerText={headerTitle}
                    isCenterTitle
                    onPressBackBtn={onPressBackBtn}
                    enableCloseButton
                />
                <ImagePicker
                    ref={imageRef}
                    onFilesSelected={async (images) =>
                        await savePicture(images[0].path, "photo", "Camera")
                    }
                />
                <View style={styles.flashListContainer}>
                    {dualSelection && (
                        <View style={styles.selectionBarContainer}>
                            <TouchableOpacity
                                style={[
                                    styles.LeftItemwrapper,
                                    !isSelected && { backgroundColor: AppColors.darkOrange },
                                ]}
                                onPress={() => {
                                    setIsSelected(false);
                                    setMultiImgs([]);
                                    setRefresh(!refresh);
                                }}
                            >
                                <CustomText
                                    children="Gallery"
                                    size={4}
                                    fontFamily={
                                        !isSelected
                                            ? AppFonts.segoe_ui_bold
                                            : AppFonts.segoe_ui_medium
                                    }
                                    textColor={!isSelected ? AppColors.white : AppColors.white_50}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[
                                    styles.RightItemwrapper,
                                    isSelected && { backgroundColor: AppColors.darkOrange },
                                ]}
                                onPress={() => {
                                    setIsSelected(true);
                                    setMultiImgs([]);
                                    setRefresh(!refresh);
                                }}
                            >
                                <CustomText
                                    children="Lookbook"
                                    size={4}
                                    fontFamily={
                                        isSelected
                                            ? AppFonts.segoe_ui_bold
                                            : AppFonts.segoe_ui_medium
                                    }
                                    textColor={isSelected ? AppColors.white : AppColors.white_50}
                                />
                            </TouchableOpacity>
                        </View>
                    )}
                    <FlatList
                        extraData={refresh}
                        data={isSelected ? lookbookImgs : photos ?? []}
                        keyExtractor={(i, k) => k.toString()}
                        contentContainerStyle={{ paddingHorizontal: width(4) }}
                        renderItem={({ item, index }) => {
                            return (
                                <View style={styles.elementStyle}>
                                    {item == "camera" ? (
                                        <TouchableOpacity
                                            style={[styles.Imgcontainer]}
                                            onPress={() => imageRef?.current?.openCam()}
                                        >
                                            <CameraIconSvg />
                                        </TouchableOpacity>
                                    ) : (
                                        <TouchableOpacity
                                            style={[styles.Imgcontainer]}
                                            onPress={() => {
                                                if (dualSelection) {
                                                    if (isSelected && multiSelect) {
                                                        multiImgs.push(item?.img);
                                                        lookbookImgs[index].isSelected = true;
                                                    }
                                                    if (multiSelect && !isSelected) {
                                                        multiImgs?.push(item?.node?.image?.uri);
                                                        photos[index].isSelected = true;
                                                    }
                                                    setRefresh(!refresh);
                                                }
                                                if (multiSelect && !dualSelection) {
                                                    multiImgs?.push(item?.node?.image?.uri);
                                                    photos[index].isSelected = true;
                                                    setRefresh(!refresh);
                                                }
                                                else {
                                                    setSingleImg(item?.node?.image?.uri);
                                                }
                                            }}
                                        >
                                            <Image
                                                resizeMode="cover"
                                                source={{
                                                    uri: isSelected ? item.img : item?.node?.image?.uri,
                                                }}
                                                style={[styles.imgStyles]}
                                            />
                                            {!dualSelection &&
                                                !multiSelect &&
                                                singleImg === item?.node?.image?.uri && (
                                                    <View style={[styles.overLay]}>
                                                        <CheckMarkSvg />
                                                    </View>
                                                )}
                                            {dualSelection && item?.isSelected ? (
                                                <View style={[styles.overLay]}>
                                                    <CheckMarkSvg />
                                                </View>
                                            ) : null}
                                            {multiSelect && item?.isSelected ? (
                                                <View style={[styles.overLay]}>
                                                    <CheckMarkSvg />
                                                </View>
                                            ) : null}
                                        </TouchableOpacity>
                                    )}
                                </View>
                            );
                        }}
                        numColumns={3}
                        estimatedItemSize={113}
                        showsVerticalScrollIndicator={false}
                    />
                    {singleImg && (
                        <PrimaryBtn
                            containerStyle={styles.bottomBtnContainer}
                            title={btnTitle}
                            onPress={() => {
                                onSave(singleImg);
                            }}
                        />
                    )}
                    {multiImgs?.length > 0 && (
                        <PrimaryBtn
                            containerStyle={styles.bottomBtnContainer}
                            title={btnTitle}
                            onPress={() => {
                                onSave(multiImgs);
                            }}
                        />
                    )}
                </View>
            </SafeAreaView>
        </Modal>
    );
}
