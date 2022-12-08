import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "./styles";
import { FlashList } from "@shopify/flash-list";
import { CustomText } from "~components/texts";

export default function OnBoardingSwiper({
    containerStyle,
    estimatedDataSize = 200,
    data = [],
    inActivedotColor = "grey",
    activeDotColor = "blue",
    activeDotSize = 3,
    inActiveDotSize = 3,
    onSwipeRight = () => null,
    onSwipeLeft = () => null,
    belowImgText = "",
    imgStyles,
    itemWrapper,
}) {
    const renderItem = ({ item }) => {
        return (
            <View style={[styles.mainWrapper, itemWrapper]}>
                <Image
                    source={item?.img}
                    style={[styles.imgStyle, imgStyles]}
                    resizeMode="contain"
                />
                <CustomText children={item?.text} size={4} />
            </View>
        );
    };
    return (
        <View style={[styles.container, containerStyle]}>
            <FlashList
                data={data}
                renderItem={renderItem}
                estimatedItemSize={estimatedDataSize}
            // horizontal={true}
            />
        </View>
    );
}
