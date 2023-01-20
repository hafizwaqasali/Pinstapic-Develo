import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { height, width } from "~utills/Dimension";
import {
    CustomizedTabs,
    LooksCard,
    LooksInfoCard,
    PrimaryBtn,
    TabBar,
    UserStories,
} from "~components";
import { useDummyData } from "~hooks";
import { Icons } from "~assets";
import AppColors from "~utills/AppColors";

export default function PinstoreSection() {
    const [isSelected, setisSelected] = useState("Vintage");
    const [tapbarOptions, setTapbarOptions] = useState([
        "Vintage",
        "Classic",
        "Sporty",
        "Chic",
        "Bohemian",
        "Gothic",
        "Unisex",
        "Modern",
        "Rock",
        "Designer",
        "Sexy",
    ]);
    let stories = Array(10).fill(0);
    const { myLookbooks } = useDummyData();
    return (
        <View style={styles.pinStarContainer}>
            <View style={styles.tabsContainer}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {tapbarOptions?.map((item, index) => {
                        return (
                            <View key={index} style={styles.tabItemStyles}>
                                <CustomizedTabs text={item} onPress={() => setisSelected(item)} selectedColor={AppColors.darkOrange} unSelectedColor={AppColors.white} selectedItem={isSelected} />
                            </View>
                        );
                    })}
                </ScrollView>
            </View>
            <View style={styles.flatListWrapper}>
                <FlatList
                    contentContainerStyle={styles.contentContainerStylePinstore}
                    data={myLookbooks}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(e, i) => i}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={styles.flatListItemWrapper}>
                                <LooksCard
                                    imgUri={item.coverimg}
                                    onPressCard={() => alert("pressed")}
                                    resizeMode={"cover"}
                                    LooksCardContainerStyles={styles.cardContainerStyles}
                                    imgStyling={styles.cardImageStyles}
                                >
                                    <PrimaryBtn
                                        title={item.lookbookName}
                                        btnWidth={30}
                                        containerStyle={styles.btnContainerStyles}
                                    />
                                </LooksCard>
                            </View>
                        );
                    }}
                />
            </View>
        </View>
    );
}
