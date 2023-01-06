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
import { HeaderWithBtn, ImagePicker, PrimaryBtn } from "~components";
import AppColors from "~utills/AppColors";
import { CameraRoll } from "@react-native-camera-roll/camera-roll";
import { FlashList } from "@shopify/flash-list";
import { height } from "~utills/Dimension";
import Modal from "react-native-modal";
import { useIsFocused } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setSwitchLoader } from "~redux/slices/config";
import { CameraIconSvg, CheckMarkSvg } from "~assets/Svg";

export default function CustomGallery({
    isVisible = false,
    onPressBackBtn,
    headerTitle = "",
    btnTitle = "Continue",
    onSave = () => null
}) {
    const [photos, setPhotos] = useState();
    const imageRef = useRef();
    const isFocused = useIsFocused();
    const dispatch = useDispatch();
    const [singleImg, setSingleImg] = useState(null);
    const [multiImgs, setMultiImgs] = useState([]);
    useEffect(() => {
        dispatch(setSwitchLoader(true));
        (async () => {
            await hasAndroidPermission();
            await requestCameraPermission();
            await getPhotosfromGallery();
        })();
        dispatch(setSwitchLoader(false));
    }, [isFocused]);

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
                    <FlatList
                        data={photos ?? []}
                        keyExtractor={(i, k) => k.toString()}
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
                                                setSingleImg(item.node.image.uri);
                                            }}
                                        >
                                            <Image
                                                resizeMode="cover"
                                                source={{ uri: item.node.image.uri }}
                                                style={[styles.imgStyles]}
                                            />
                                            {singleImg === item.node.image.uri && (
                                                <View style={[styles.overLay]}>
                                                    <CheckMarkSvg />
                                                </View>
                                            )}
                                        </TouchableOpacity>
                                    )}
                                </View>
                            );
                        }}
                        numColumns={3}
                        estimatedItemSize={113}
                        showsVerticalScrollIndicator={false}

                    />
                    {singleImg && <PrimaryBtn
                        containerStyle={styles.bottomBtnContainer}
                        title={btnTitle}
                        onPress={() => {
                            onSave(singleImg)
                        }}
                    />}
                </View>
            </SafeAreaView>
        </Modal>
    );
}
