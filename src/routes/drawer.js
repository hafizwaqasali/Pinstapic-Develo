import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import AppColors from '~utills/AppColors';
import { height, width } from '~utills/Dimension';



export default function Appdrawer(props) {
    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <Text>Coming Soon!</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        backgroundColor: AppColors.blueBackground,
    },
    container: {
        paddingHorizontal: width(2),
        paddingVertical: height(1),
    }
})