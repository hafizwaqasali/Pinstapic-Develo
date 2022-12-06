import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './styles'
import { FlashList } from "@shopify/flash-list";
const DATA = [
    {
        title: "First Item",
    },
    {
        title: "Second Item",
    },
];

export default function OnBoardingSwiper({ containerStyle }) {
    const renderItem = ({ item }) => {
        return (
            <View style={styles.mainWrapper}>
                <Text>{item.title}</Text>
            </View>
        )
    }
    return (
        <View style={[styles.container, containerStyle]}>
            <FlashList
                data={DATA}
                renderItem={renderItem}
                estimatedItemSize={200}
            />
        </View>
    )
}
