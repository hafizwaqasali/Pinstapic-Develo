import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './styles'

export default function SocialIcon({
    imgSrc,
    resizeMode = "contain",
    imgStyles,
    containerStyles,
}) {
    return (
        <TouchableOpacity style={[styles.container, containerStyles]}>
            <Image
                source={imgSrc}
                resizeMode={resizeMode}
                style={[styles.imgStyle, imgStyles]}
            />
        </TouchableOpacity>
    )
}
