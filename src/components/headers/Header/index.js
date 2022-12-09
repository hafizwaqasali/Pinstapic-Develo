import { View } from 'react-native'
import styles from './styles'
import React from 'react'
import { CustomText } from '~components/texts'

export const ScreenNameHeader = ({
    title = "",
    underline = false,
    textSize = 4.9,
    underLineStyles,
    containerStyles
}) => {
    return (
        <View style={[styles.container, containerStyles]}>
            <CustomText children={title} size={textSize} />
            {underline && <View style={[styles.underLine, underLineStyles]} />}
        </View>
    )
}


