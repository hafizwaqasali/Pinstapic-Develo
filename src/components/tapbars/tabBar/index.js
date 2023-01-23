import {
    FlatList,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { CustomText } from "~components/texts";
import AppFonts from "~utills/AppFonts";
import AppColors from "~utills/AppColors";
import { height } from "~utills/Dimension";
import { Image } from "react-native";

export default function TabBar({
    containerStyles,
    data = [],
    isSelected = "",
    onPress,
    wrapperStyles,
    selectedOptionColor,
    selectedItemName,
}) {

    return (
        <View style={[styles.container, containerStyles]}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={data}
                    keyExtractor={(ele, index) => index}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity
                                style={[
                                    styles.Wrapper,
                                    isSelected == item.type && styles.selected,
                                    wrapperStyles,
                                    (index == 0 && item?.type == isSelected && selectedItemName == isSelected) && { backgroundColor: AppColors.darkOrange, }
                                ]}
                                onPress={() => onPress(item.type)}
                            >

                                {item.img && (
                                    <Image
                                        source={item.img}
                                        resizeMode="contain"
                                        style={styles.iconImgStyles}
                                    />
                                )}
                                <CustomText
                                    children={item.type}
                                    fontFamily={AppFonts.segoe_ui_medium}
                                    size={3.5}
                                    textColor={
                                        isSelected == item.type ? AppColors.white : AppColors.white_50
                                    }
                                    textStyles={[styles.tabItemsTextStyles]}

                                />
                            </TouchableOpacity>
                        );
                    }}
                />

            </ScrollView>
        </View>
    );
}
