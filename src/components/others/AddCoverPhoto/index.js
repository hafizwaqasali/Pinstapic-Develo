import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import styles from './styles';
import { CustomText } from '../../index';
import AppFonts from '../../../utills/AppFonts';
import { ImagePicker } from '../../index';
import { useRef } from 'react';
import { useState } from 'react';

export default function AddCoverPhoto({ containerStyles }) {
    const imageRef = useRef();
    const [image, setImage] = useState(null);
    return (
        <>
            <TouchableOpacity
                style={[
                    styles.container,
                    image && styles.imageSelected,
                    containerStyles,
                ]}
                onPress={() => imageRef.current.show()}>
                <Image
                    source={{ uri: image }}
                    style={styles.selectedImage}
                    resizeMode="cover"
                />

                <ImagePicker
                    ref={imageRef}
                    onFilesSelected={images => setImage(images[0].path)}
                />
                {
                    image && <View style={styles.blackEffect} />
                }
                <View style={styles.cameraStyles}>

                    <Image
                        source={require('../../../assets/images/whitecamera.png')}
                        style={styles.imgStyle}
                        resizeMode="contain"
                    />
                    <CustomText
                        size={2.5}
                        children="Add a cover photo"
                        fontFamily={AppFonts.segoe_ui_regular}
                    />
                </View>
            </TouchableOpacity>
        </>
    );
}
