import { Image, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef } from 'react'
import { HeaderWithBtn, Optional, ScreenWrapper, StatusMsgModal } from '~components'
import AppColors from '~utills/AppColors'
import { MenuIconSvg } from '~assets/Svg'
import styles from './styles'
import { height, width } from '~utills/Dimension'
import ScreenNames from '~routes/routes'

export default function ViewLookbookImage({ navigation, route }) {
    const img = route.params.selectedImg
    const modalRef = useRef()
    const successmodalRef = useRef()
    return (
        <ScreenWrapper
            scrollEnabled
            statusBarColor={AppColors.blueBackground}
            backgroundColor={AppColors.blueBackground}
            barStyle="light-content"
            headerUnScrollable={() => (
                <HeaderWithBtn
                    onPressBackBtn={() => navigation.goBack()}
                    rightButtonStyles={{ backgroundColor: "transparent" }}
                    rightElement={
                        <View style={styles.Itemswrapper}>
                            <TouchableOpacity style={styles.menuSvgContainer} onPress={() => modalRef?.current?.show()}>
                                <MenuIconSvg />
                            </TouchableOpacity>
                        </View>
                    }
                    enableRightElement
                />
            )}
        >
            <Optional
                ref={modalRef}
                titleText={'Delete this Lookbook Photo?'}
                firstBtnText={'No'}
                secondBtnText={'Yes'}
                horizontal
                onPressFirstBtn={() => modalRef?.current?.hide()}
                onPressSecondBtn={() => {
                    modalRef?.current?.hide()
                    setTimeout(() => successmodalRef?.current?.show(), 600)
                    setTimeout(() => {
                        successmodalRef?.current?.hide()
                        navigation.navigate(ScreenNames.VIEWLOOKBOOK)
                    }, 2000)

                }}
            />
            <StatusMsgModal ref={successmodalRef} title="Deleted" titleTxtColor={AppColors.blueBackground} />
            <View style={styles.container}>
                <Image source={{ uri: img?.img }} resizeMode="cover" style={styles.imgStyles} />
            </View>
        </ScreenWrapper>
    )
}
