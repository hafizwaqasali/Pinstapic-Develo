import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from "./styles"
import { HeaderWithBtn, ScreenWrapper, UserStories } from '~components'
import AppColors from '~utills/AppColors'
import { Icons } from '~assets'
import { MenuIconSvg } from '~assets/Svg'

export default function ViewLookbook({ navigation }) {

    return (
        <ScreenWrapper
            scrollEnabled
            statusBarColor={AppColors.blueBackground}
            backgroundColor={AppColors.blueBackground}
            barStyle="light-content"
            headerUnScrollable={() => (
                <HeaderWithBtn
                    centerText={"My Coats"}
                    centerTxtStyles={styles.headerText}
                    onPressBackBtn={() => navigation.goBack()}
                    enableCloseButton
                    rightButtonStyles={{ backgroundColor: "transparent" }}
                    rightElement={<View style={styles.Itemswrapper}>
                        <TouchableOpacity style={styles.plusBtnContainer} onPress={() => alert("pressed")}>
                            <Image
                                source={Icons.plusIcon}
                                resizeMode="contain"
                                style={styles.PlusIconStyles}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuSvgContainer}>
                            <MenuIconSvg />
                        </TouchableOpacity>
                    </View>}
                    enableRightElement
                />
            )}
        >
            <View style={styles.container}>

            </View>
        </ScreenWrapper>
    )
}
