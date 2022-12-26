import {
    View,
    FlatList,
} from "react-native";
import React from "react";
import styles from "./styles";
import AppColors from "~utills/AppColors";
import { height, width } from "~utills/Dimension";
import {
    CustomText,
    ScreenWrapper,
    ScreenNameHeader,
    Category,
} from "~components";
import { useDummyData } from "~hooks";
import ScreenNames from "~routes/routes";
const data = useDummyData()

export default function ChooseCategory({ navigation }) {
    const _renderItem = ({ item, index }) => {
        return (
            <View style={styles.flatListView}>
                <Category
                    imgSrc={item.img}
                    resizeMode="contain"
                    onPress={() => navigation.navigate(ScreenNames.CATEGORYDESCRIPTION, { title: item.title })}
                />
            </View>
        );
    };

    return (
        <ScreenWrapper
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
                {
                    <FlatList
                        contentContainerStyle={styles.flatlistContentContainer}
                        data={data.categoryImages}
                        keyExtractor={(item, index) => String(index)}
                        renderItem={_renderItem}
                        showsVerticalScrollIndicator={false}
                    />
                }
            </View>
        </ScreenWrapper>
    );
}
