import { StyleSheet, Text, TouchableOpacity, View, Image, Flatlist } from "react-native";
import React from "react";
import styles from "./styles";
import AppColors from "~utills/AppColors";
import { height, width } from "~utills/Dimension";
import { CustomText, ScreenWrapper, ScreenNameHeader } from "~components";
import { Icons } from "~assets";

const data = [Icons.pinstarIcon, Icons.pinstylistIcon, Icons.pinstoreIcon]


export default function ChooseCategory({ navigation }) {
    const renderItem = ({ item, index }) => {

        return (
            <TouchableOpacity style={styles.flashListContainer}>
                <Image source={item} style={styles.ImgStyle} resizeMode="contain" />
            </TouchableOpacity>
        )
    }
    return (
        <ScreenWrapper
            scrollEnabled
            statusBarColor={AppColors.blueBackground}
            backgroundColor={AppColors.blueBackground}
            barStyle="light-content"
        >
            <View style={styles.container}>
                <CustomText
                    children="Choose a Category"
                    size={6}
                    marginTop={height(1.8)}
                />
                <ScreenNameHeader
                    underline
                    containerStyles={styles.underLineStyles}
                    underLineStyles={{ width: width(16.5) }}
                />
                <Flatlist
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(i) => i.toString()}

                />
            </View>
        </ScreenWrapper>
    );
}