import { Text, View } from 'react-native'
import React from 'react'
import styles from './styles'
import { HeaderWithBtn, ScreenWrapper } from '~components'
import AppColors from '~utills/AppColors'

export default function CreateLookbook({ navigation }) {
    return (
        <ScreenWrapper
            scrollEnabled
            statusBarColor={AppColors.blueBackground}
            backgroundColor={AppColors.blueBackground}
            barStyle="light-content"
            headerUnScrollable={() => (
                <HeaderWithBtn
                    centerText={"Add a Lookbook"}
                    centerTxtStyles={styles.headerText}
                    onPressBackBtn={() => navigation.goBack()}
                />
            )}
        >
            <View>
                <Text>CreateLookbook</Text>
            </View>
        </ScreenWrapper>
    )
}
