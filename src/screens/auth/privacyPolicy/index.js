import { Text, View } from 'react-native'
import React from 'react'
import styles from './styles'
import AppColors from '~utills/AppColors'
import { HeaderWithBtn, ScreenWrapper, CustomText } from '~components'
import { height } from '~utills/Dimension'
import AppFonts from '~utills/AppFonts'
import { Privacy_Policy } from '~utills/Constants'

export default function PrivacyPolicy({ navigation }) {
    return (
        <ScreenWrapper
            scrollEnabled
            statusBarColor={AppColors.blueBackground}
            backgroundColor={AppColors.blueBackground}
            barStyle="light-content"
            headerUnScrollable={() => (
                <HeaderWithBtn
                    centerText={"Privacy Policy"}
                    centerTxtStyles={styles.headerText}
                    onPressBackBtn={() => navigation.goBack()}
                />
            )}
        >
            <View style={styles.container}>
                <CustomText
                    children="Privacy Policy"
                    size={4}
                    marginTop={height(1.8)}
                />
                <CustomText
                    children={Privacy_Policy}
                    size={3.75}
                    marginTop={height(1.8)}
                    fontFamily={AppFonts.segoe_ui_regular}
                    justify
                />
            </View>
        </ScreenWrapper>
    )
}
