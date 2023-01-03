import { ScrollView, Text, View } from 'react-native'
import React, { useState } from 'react'
import AppColors from '~utills/AppColors'
import { HeaderWithBtn, ProfileInfo, ScreenWrapper, UserStories } from '~components'
import { EditPencilIconSvg } from '~assets/Svg'
import { setIsLoggedIn, setUserMeta } from '~redux/slices/user'
import { setAppLoader } from '~redux/slices/config'
import { useDispatch } from 'react-redux'
import styles from './styles'
import { Icons } from "../../../../assets"
import { useDummyData } from '~hooks'
import { width } from '~utills/Dimension'


export default function UserProfilePinstar({ navigation }) {
    const [userName, setUserName] = useState('@mango_scavo')
    const dispatch = useDispatch()
    const profileData = useDummyData()
    const [userProfile, setUserProfile] = useState(profileData.profileData)
    let stories = Array(10).fill(0)

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
                    onPressBackBtn={() => {
                        dispatch(setAppLoader(true));
                        setTimeout(() => {
                            dispatch(setUserMeta(null));
                            dispatch(setIsLoggedIn(false));
                            dispatch(setAppLoader(false));

                        }, 600);
                    }}
                    rightElement={<EditPencilIconSvg />}
                    enableRightElement={true}
                    onPressRightBtn={
                        () => alert("presssed")
                    }
                />
            )}
        >
            <View style={styles.container}>
                <View style={styles.userProfileWrapper}>
                    <ProfileInfo profileImg={Icons.checkedIcon} data={userProfile} />
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.storiesWrapper}>
                    {
                        stories.map((i, index) => {
                            return (
                                <View key={index} style={[styles.storiesContentContainer, index == 0 && { marginLeft: width(5) }]}>
                                    <UserStories isNewStory={index == 0 ? true : false} />
                                    {index == 0 && <View style={styles.seprator} />}
                                </View>

                            )
                        })
                    }
                </ScrollView>
            </View>
        </ScreenWrapper>
    )
}
