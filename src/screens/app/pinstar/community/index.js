import { Text, View } from 'react-native'
import React from 'react'
import styles from "./styles"
import { CustomText, ScreenWrapper } from '~components'
import AppColors from '~utills/AppColors'

export default function PinstarCommunity({ navigation }) {
    return (
        <ScreenWrapper
            scrollEnabled
            statusBarColor={AppColors.blueBackground}
            backgroundColor={AppColors.blueBackground}
            barStyle="light-content"
        >
            <View style={styles.container}>
                <CustomText children={`Community Screen ( Under Development )`} center size={3} onPress={() => navigation.goBack()} />
            </View>
        </ScreenWrapper>
    )
}
