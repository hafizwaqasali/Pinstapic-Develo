import { ScrollView, Text, View } from 'react-native'
import React, { useState } from 'react'
import styles from "./styles"
import { CustomText, HeaderWithBtn, ScreenWrapper, TabBar, UserStories } from '~components'
import AppColors from '~utills/AppColors'
import PinstarSection from './pinstarSection'
import { Icons } from '~assets'
import { width } from '~utills/Dimension'
import PinstylistSection from './pinstylistSection'

export default function PinstarCommunity({ navigation }) {
    const [isSelected, setisSelected] = useState('Pinstars')
    const [tapbarOptions, setTapbarOptions] = useState([
        { type: "Pinstars", img: Icons.FlameIcon },
        { type: "Pinstylists", img: Icons.ScissorIcon },
        { type: "Pinstores", img: Icons.shoppingCartIcon },
    ]);
    const onChangeOption = (val) => setisSelected(val)
    const headerComponent = () => {
        return (
            <>
                <HeaderWithBtn
                    centerText={`Community`}
                    isCenterTitle
                    hideBackBtn
                />
                <TabBar
                    containerStyles={styles.TabscontainerStyles}
                    data={tapbarOptions}
                    isSelected={isSelected}
                    onPress={onChangeOption}
                    wrapperStyles={styles.tabItemWrapperStyles}
                />

            </>
        )
    }
    return (
        <ScreenWrapper
            statusBarColor={AppColors.blueBackground}
            backgroundColor={AppColors.blueBackground}
            barStyle="light-content"
            headerUnScrollable={headerComponent}

        >
            <View style={styles.container}>

                {
                    isSelected === 'Pinstars' ? <PinstarSection /> : isSelected === 'Pinstylists' && <PinstylistSection />
                }

            </View>
        </ScreenWrapper>
    )
}
