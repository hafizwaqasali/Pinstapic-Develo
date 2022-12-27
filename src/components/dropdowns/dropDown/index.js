import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import React from "react";
import AppColors from "~utills/AppColors";
import { height, width } from "~utills/Dimension";
import { CustomText } from "~components/texts";
import AppFonts from "~utills/AppFonts";
import { Icons } from "~assets";

export default function DropDown({
    tempData = [],
    isVisible = false,
    sepratorColor = AppColors.dark_Grey,
    onPress = () => null
}) {
    return (
        <Modal style={styles.container} isVisible={isVisible}>
            <View style={styles.wrapper}>
                <ScrollView>
                    {tempData?.map((item, index) => {
                        let length = tempData?.length - 1;
                        return (
                            <View key={index}>
                                <TouchableOpacity style={styles.itemRow} onPress={() => onPress(item.label)}>
                                    <CustomText
                                        children={item?.label}
                                        textColor={AppColors.black}
                                        fontFamily={AppFonts.segoe_ui_medium}
                                        size={3.75}
                                        textStyles={styles.textStyles}
                                    />
                                    {item?.isSelected && (
                                        <Image
                                            source={Icons?.checkedIcon}
                                            resizeMode="contain"
                                            style={styles.checkiconStyle}
                                        />
                                    )}
                                </TouchableOpacity>
                                {index != length && (
                                    <View
                                        style={[
                                            styles.seprator,
                                            { backgroundColor: sepratorColor },
                                        ]}
                                    />
                                )}
                            </View>
                        );
                    })}
                </ScrollView>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        backgroundColor: AppColors.white,
        paddingVertical: height(1),
        borderRadius: width(2.5),
    },
    seprator: {
        height: width(0.1),
        backgroundColor: AppColors.blueBackground,
        marginTop: height(1),
    },
    textStyles: {
        paddingHorizontal: width(3),
    },
    itemRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    checkiconStyle: {
        height: height(2.5),
        width: width(6),
        alignSelf: "center",
        marginRight: width(3),
        marginTop: height(.6)
    },
});
