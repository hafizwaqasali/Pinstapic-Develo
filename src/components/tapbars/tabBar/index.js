import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
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
    wrapperStyles
}) {
    return (
        <View style={[styles.container, containerStyles]}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {data?.map((i, index) => {

                    return (
                        <TouchableOpacity
                            key={index}
                            style={[styles.Wrapper, isSelected == i.type && styles.selected, wrapperStyles]}
                            onPress={() => onPress(i.type)}
                        >
                            {
                                i.img && <Image source={i.img} resizeMode="contain" style={styles.iconImgStyles} />
                            }
                            <CustomText
                                children={i.type}
                                fontFamily={AppFonts.segoe_ui_medium}
                                size={3.5}
                                textColor={
                                    isSelected == i.type ? AppColors.white : AppColors.white_50
                                }
                            />
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        </View>
    );
}
