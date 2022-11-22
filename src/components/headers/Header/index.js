import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import Ionicons from "react-native-vector-icons/Ionicons"
import Octicons from "react-native-vector-icons/Octicons"
import { height, width } from '~utills/Dimension';
import AppColors from '../../../utills/AppColors'

export const Header = ({
    onLeftBtnPress,
    title,
    titleSyles,
    onRightBtnPress,
    LeftIcon = Ionicons,
    RightIcon = Octicons,
    showBottomLine = false,
    hideLeftBtn = false,
    hideRightBtn = false,
    leftIconName = "arrow-back-sharp",
    rightIconName = "plus",
    leftComponent,
    rightComponent,
    centerComponent
}) => {
    return (
        <View style={[styles.container, showBottomLine && styles.bottomLine]}>
            <View style={styles.leftContainer}>
                {
                    !hideLeftBtn && !leftComponent ?
                        <TouchableOpacity style={styles.backBtnWrapper} onPress={onLeftBtnPress}>
                            <LeftIcon name={leftIconName} size={width(6)} color={AppColors.white} />
                        </TouchableOpacity>
                        : leftComponent ?? null
                }
            </View>
            <View style={styles.middleContainer}>
                {
                    centerComponent ? centerComponent
                        : title && <Text style={[styles.title, titleSyles]}>{title}</Text>
                }
            </View>
            <View style={styles.rightContainer}>
                {
                    !hideRightBtn && !rightComponent ?
                        <TouchableOpacity style={styles.backBtnWrapper} onPress={onRightBtnPress}>
                            <RightIcon name={rightIconName} size={width(6)} color={AppColors.darkOrange} />
                        </TouchableOpacity>
                        : rightComponent ?? null
                }
            </View>

        </View>
    )
}


