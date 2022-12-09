import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { height, width } from '~utills/Dimension';
import AppColors from '../../../utills/AppColors';
export default function CheckBox({
    getcheckedValue = () => null,
    checkedContainer,
    uncheckedContainer,
    checkedIconSize = 4.3,
    iconColor = AppColors.blueBackground
}) {
    const [checked, setChecked] = useState(false)
    function toggle() {
        setChecked(!checked)
    }
    return (
        <TouchableOpacity
            onPress={getcheckedValue(checked) ?? toggle}
            style={[styles.container, checked && styles.checkedContainer, uncheckedContainer, checkedContainer]}>
            {
                checked && <MaterialCommunityIcons name={'check'} size={width(checkedIconSize)} color={iconColor} />
            }
        </TouchableOpacity>
    );
}
