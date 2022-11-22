import { Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from "./styles"
import { height, width } from '~utills/Dimension';
import AppColors from '../../../utills/AppColors'

export default function Category({
    Icon,
    iconSize = 20,
    iconColor,
    iconName,
    containerStyles,
    onPress,
    imageStyles,
    imgSrc,
    circleColor = AppColors.white,
    resizeMode = "contain"
}) {
    return (
        <TouchableOpacity style={[styles.container, containerStyles, { borderColor: circleColor }]} onPress={onPress}>
            {
                Icon ?
                    <Icon name={iconName} size={width(iconSize)} color={iconColor} />
                    :
                    imgSrc &&
                    <Image
                        source={imgSrc}
                        style={[styles.imgStyle, imageStyles]}
                        resizeMode={resizeMode}
                    />
            }

        </TouchableOpacity>
    )
}

