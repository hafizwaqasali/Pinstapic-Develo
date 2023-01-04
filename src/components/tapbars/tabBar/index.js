import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./styles";
import { CustomText } from "~components/texts";
import AppFonts from "~utills/AppFonts";
import AppColors from "~utills/AppColors";
import { height } from "~utills/Dimension";

export default function TabBar({
    containerStyles,
    data = [],
    isSelected = "",
    onPress,
}) {
    return (
        <View style={[styles.container, containerStyles]}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {data?.map((i, index) => {
                    return (
                        <TouchableOpacity
                            key={index}
                            style={[styles.Wrapper, isSelected == i && styles.selected]}
                            onPress={() => onPress(i)}
                        >
                            <CustomText
                                children={i}
                                fontFamily={AppFonts.segoe_ui_medium}
                                size={3.5}
                                textColor={
                                    isSelected == i ? AppColors.white : AppColors.white_50
                                }
                            />
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        </View>
    );
}
