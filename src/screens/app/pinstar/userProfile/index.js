import { Text, View } from 'react-native'
import React, { useState } from 'react'
import AppColors from '~utills/AppColors'
import { HeaderWithBtn, ScreenWrapper } from '~components'
import { EditPencilIconSvg } from '~assets/Svg'

export default function UserProfilePinstar({ navigation }) {
    const [userName, setUserName] = useState('@mango_scavo')
    return (
        <ScreenWrapper
            scrollEnabled
            statusBarColor={AppColors.blueBackground}
            backgroundColor={AppColors.blueBackground}
            barStyle="light-content"
            headerUnScrollable={() => (
                <HeaderWithBtn
                    centerText={`${userName}`}
                    isCenterTitle
                    onPressBackBtn={() => alert('pressed')}
                    rightElement={<EditPencilIconSvg />}
                    enableRightElement={true}
                    onPressRightBtn={() => alert("pressed")}
                />
            )}
        >
            <View>
                <Text>UserProfile</Text>
            </View>
        </ScreenWrapper>
    )
}
