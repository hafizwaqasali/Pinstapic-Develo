import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./styles";
import { CustomText } from "~components/texts";
import AppFonts from "~utills/AppFonts";
import AppColors from "~utills/AppColors";
import { width } from "~utills/Dimension";
import Ionicons from "react-native-vector-icons/Ionicons"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"

export function LooksCard({
    onPressCard = () => null,
    imgUri,
    title = "",
    resizeMode = "cover",
    imgStyling,
    LooksCardContainerStyles,
    titleTextStyles,
    enableDescription = false,
    totalImages = 0,
    totalTags = 0,
    showUserDetails = false,
    customElement,

}) {
    return (
        <TouchableOpacity
            style={[styles.LooksCardContainer, LooksCardContainerStyles]}
            onPress={onPressCard}
        >
            <Image
                source={{ uri: imgUri }}
                resizeMode={resizeMode}
                style={[styles.imgStyles, imgStyling]}
            />
            {!showUserDetails ? <CustomText
                children={title}
                size={3.2}
                fontFamily={AppFonts.segoe_ui_bold}
                textColor={AppColors.smoky_Grey}
                textStyles={titleTextStyles}
                paddingHorizontal={width(4)}
            /> :
                <>
                    {customElement ?? null}
                </>
            }
            {
                enableDescription &&
                <View style={styles.lookBooksDescriptionWrapper}>
                    <Ionicons
                        name="ios-images-outline"
                        size={width(2.6)}
                        color={AppColors.darkblue}
                    />
                    <CustomText
                        lineHeight={3}
                        size={2.5}
                        fontFamily={AppFonts.segoe_ui_semibold}
                        children={totalImages}
                        paddingHorizontal={width(1.5)}
                        textColor={AppColors.darkblue}
                    />
                    <FontAwesome5 name="tags" size={width(2.6)} color={AppColors.darkblue} />
                    <CustomText
                        size={2.5}
                        lineHeight={3}
                        fontFamily={AppFonts.segoe_ui_semibold}
                        children={totalTags}
                        paddingHorizontal={width(1.5)}
                        textColor={AppColors.darkblue}
                    />
                </View>
            }
        </TouchableOpacity>
    );
}
