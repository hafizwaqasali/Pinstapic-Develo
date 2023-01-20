import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { height, width } from '~utills/Dimension';
import { LooksCard, LooksInfoCard, TabBar, UserStories } from '~components';
import { useDummyData } from "~hooks";
import { Icons } from '~assets'

export default function PinstylistSection() {
    const [isSelected, setisSelected] = useState('All')
    const [tapbarOptions, setTapbarOptions] = useState([
        { type: "All", img: Icons.FlameIcon },
        { type: "Stylist", img: Icons.ScissorIcon },
        { type: "Hairstyle", img: Icons.shoppingCartIcon },
        { type: "Photographers", img: Icons.shoppingCartIcon },
        { type: "Makeup", img: Icons.shoppingCartIcon },
    ]);
    let stories = Array(10).fill(0);
    const { myLookbooks } = useDummyData();
    const onChangeOption = (val) => setisSelected(val)
    return (
        <View style={styles.pinStarContainer}>
            <View style={styles.storiesWrapper}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {stories.map((i, index) => {
                        return (
                            <View
                                key={index}
                                style={[
                                    styles.storiesContentContainer,
                                    index == 0 && { marginLeft: width(5) },
                                ]}
                            >
                                <UserStories isStoryTitle='Winter' />
                            </View>
                        );
                    })}
                </ScrollView>
            </View>
            <TabBar
                containerStyles={styles.filterTabscontainerStyles}
                data={tapbarOptions}
                isSelected={isSelected}
                onPress={onChangeOption}
                wrapperStyles={[styles.filterTabItemWrapperStyles,]}
                selectedOptionColor={"red"}
                selectedItemName={'All'}

            />
            <View style={styles.horizontalSeprator} />
            <View style={styles.flatListWrapper}>
                <FlatList
                    contentContainerStyle={{ paddingBottom: height(18), paddingTop: height(2) }}
                    data={myLookbooks}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(e, i) => i}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={styles.flatListItemWrapper}>
                                <LooksInfoCard
                                    imgUri={item.coverimg}
                                    title={item.lookbookName}
                                    onPressCard={() => alert("pressed")}
                                    enableDescription
                                    resizeMode={"cover"}
                                    totalTags={17}
                                    totalImages={5}
                                    userImg={item.coverimg}
                                    userName={item.lookbookName}
                                />
                            </View>
                        );
                    }}
                />
            </View>
        </View>
    )
}
