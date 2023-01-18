import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./styles";
import { Icons } from "../../../assets";
import { CustomText } from "~components/texts";
import AppFonts from "~utills/AppFonts";
import { height } from "~utills/Dimension";

export default function UserStories({
    isNewStory = false,
    isStoryTitle = "",
    onPressStory = () => null,
    onPressNewStory = () => null,
    storyImg

}) {
    return (
        <>
            {isNewStory ? (
                <>
                    <TouchableOpacity
                        style={styles.newStoryContainer}
                        onPress={onPressNewStory}
                    >
                        <Image
                            source={Icons.plusIcon}
                            resizeMode="contain"
                            style={styles.PlusIconStyles}
                        />
                    </TouchableOpacity>
                    <CustomText
                        children={isStoryTitle}
                        size={2.5}
                        fontFamily={AppFonts.segoe_ui_medium}
                    />
                </>
            ) :

                <>
                    <TouchableOpacity
                        style={styles.displayStoryContainer}
                        onPress={onPressStory}
                    >
                        {
                            storyImg &&
                            <Image
                                source={storyImg}
                                resizeMode="contain"
                                style={styles.storyImgStyles}
                            />
                        }
                    </TouchableOpacity>
                    {isStoryTitle != '' &&
                        <CustomText
                            size={2.5}
                            fontFamily={AppFonts.segoe_ui_medium}
                            textStyles={styles.storyTitle}
                        >
                            {isStoryTitle}
                        </CustomText>}
                </>






            }
        </>
    );
}
