import { Text, View } from 'react-native'
import React from 'react'
import styles from "./styles"
import { CustomText, ScreenWrapper } from '~components'
import AppColors from '~utills/AppColors'
import ScreenNames from '~routes/routes'

export default function PinstarDashboard({ navigation }) {
    return (
        <ScreenWrapper
            scrollEnabled
            statusBarColor={AppColors.blueBackground}
            backgroundColor={AppColors.blueBackground}
            barStyle="light-content"
        >
            <View style={styles.container}>
                <CustomText children='Under-Development' center size={5} onPress={() => navigation.goBack()} />
            </View>
        </ScreenWrapper>
    )
}

