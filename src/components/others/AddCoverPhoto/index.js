import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useState, useRef } from 'react';
import styles from './styles';
import { CustomText } from "../../../components"
import AppFonts from '../../../utills/AppFonts';
import ImagePicker from '../../pickers/ImagePicker';
import { Images } from "../../../assets/index"
import CommonStyles from '~utills/CommonStyles';
import { useNavigation } from '@react-navigation/native';
import ScreenNames from '~routes/routes';

export default function AddCoverPhoto({ containerStyles, isSquare, onPress }) {
    const imageRef = useRef();
    const [image, setImage] = useState(null);
    const navigation = useNavigation()
    return (
        <>
            <TouchableOpacity
                style={[
                    styles.container,
                    image && styles.imageSelected,
                    containerStyles,
                    isSquare && styles.squareShape
                ]}
                onPress={onPress}>
                <Image
                    source={{ uri: image }}
                    style={styles.selectedImage}
                    resizeMode="cover"
                />

                {/* <ImagePicker
                    ref={imageRef}
                    onFilesSelected={images => setImage(images[0].path)}
                /> */}
                {
                    image && <View style={[styles.blackEffect, isSquare && styles.squareBlackEffect]} />
                }
                <View style={styles.cameraStyles}>

                    {!image &&
                        <>
                            <Image
                                source={Images.whiteCameraIcon}
                                style={styles.imgStyle}
                                resizeMode="contain"
                            />
                            <CustomText
                                size={2.5}
                                children="Add a cover photo"
                                fontFamily={AppFonts.segoe_ui_regular}
                            />
                        </>
                    }
                </View>
            </TouchableOpacity>
        </>
    );
}
