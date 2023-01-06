import { Text, View, PermissionsAndroid, Platform, Image } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import styles from "./styles";
import {
    HeaderWithBtn,
    ImagePicker,
    ImageViewer,
    PrimaryBtn
} from "~components";
import AppColors from "~utills/AppColors";
import { CameraRoll } from "@react-native-camera-roll/camera-roll";
import { FlashList } from "@shopify/flash-list";
import { height } from "~utills/Dimension";
import Modal from "react-native-modal";
import { useIsFocused } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setSwitchLoader } from "~redux/slices/config";

export default function CustomGallery({ isVisible = false, onPressBackBtn }) {
    const [photos, setPhotos] = useState();
    const imageRef = useRef();
    const [selectedImage, setSelectedImage] = useState(false);
    const isFocused = useIsFocused();
    const dispatch = useDispatch()

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

    const _renderItem = ({ item, index }) => {
        return (
            <View style={styles.elementStyle}>
                {item == "camera" ? (
                    <ImageViewer
                        enableCameraIcon
                        onPressCamera={() => imageRef?.current?.openCam()}
                    />
                ) : (
                    <ImageViewer
                        imageUri={item.node.image.uri}
                        onPress={() => getImageDetails(item.node.image.uri, index)}
                    />
                )}
            </View>
        );
    };

    const getImageDetails = (uri, index) => {
        console.log(uri, index);
    };

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
            <View style={styles.container}>
                <HeaderWithBtn
                    centerText={`Select Profile Photo`}
                    isCenterTitle
                    onPressBackBtn={onPressBackBtn}
                    enableCloseButton
                />
                <ImagePicker
                    ref={imageRef}
                    // onFilesSelected={images => setImage(images[0].path)}
                    onFilesSelected={async (images) =>
                        await savePicture(images[0].path, "photo", "Camera")
                    }
                />
                <View style={styles.flashListContainer}>
                    <FlashList
                        data={photos ?? []}
                        keyExtractor={(i, k) => k.toString()}
                        renderItem={_renderItem}
                        numColumns={3}
                        estimatedItemSize={113}
                        showsVerticalScrollIndicator={false}
                    />

                </View>
            </View>
        </Modal>
    );
}
