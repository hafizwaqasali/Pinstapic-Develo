import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { useState } from "react";
import { height, width } from "~utills/Dimension";
import { CameraIconSvg, CheckMarkSvg } from "~assets/Svg";
import AppColors from "~utills/AppColors";

const ImageViewer = ({
    onPress,
    containerStyles,
    enableCameraIcon = false,
    imageResizeMode = "cover",
    imageUri,
    imageStyles,
    onPressCamera,
    multiSelect = false,
}) => {
    const [imageSelect, setImageSelect] = useState(false);
    const toggleSelection = () => setImageSelect(!imageSelect);
    const changeMode = () => {
        toggleSelection();
        onPress(!imageSelect);
    };
    return (
        <TouchableOpacity
            style={[styles.container, containerStyles]}
            onPress={onPressCamera ? onPressCamera : onPress && changeMode}
        >
            {enableCameraIcon ? (
                <CameraIconSvg />
            ) : (
                <Image
                    resizeMode={imageResizeMode}
                    source={{ uri: imageUri }}
                    style={[styles.imgStyles, imageStyles]}
                />
            )}
            {imageSelect && (
                <View
                    style={[styles.overLay, imageSelect && { backgroundColor: AppColors.parrotGreen_20 }]}
                >
                    <CheckMarkSvg />
                </View>
            )
            }
        </TouchableOpacity >
    );
};

const styles = StyleSheet.create({
    container: {
        height: height(13),
        width: width(26),
        backgroundColor: AppColors.white_30,
        borderRadius: width(5),
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
    },
    imgStyles: {
        height: height(13),
        width: width(26),
        borderRadius: width(5),
    },
    overLay: {
        position: "absolute",
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    }
});

export default ImageViewer;
