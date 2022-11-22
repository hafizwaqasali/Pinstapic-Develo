import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import styles from './styles';
import Swiper from 'react-native-swiper';

export default function Onboarding({
    swipperContainerStyles,
    showsButtons = false,
    loop = true,
    autoplay = true,
    activeDot,
    activeDotColor,
    activeDotStyle,
    dotColor,
    dotStyle,
    wrapperStyle,
    ImageStyles,
    resizeMode = 'contain',
    descriptionStyle,
    dataarray = [],
}) {
    return (
        <View style={styles.container}>
            <Swiper
                style={[styles.swipperContainer, swipperContainerStyles]}
                showsButtons={showsButtons}
                loop={loop}
                autoplay={autoplay}
                activeDot={activeDot}
                activeDotColor={activeDotColor}
                activeDotStyle={activeDotStyle}
                dotColor={dotColor}
                dotStyle={dotStyle}>
                {dataarray?.map(item => {
                    return (
                        <View style={[styles.wrapper, wrapperStyle]} key={item.id}>
                            <Image
                                source={item.img}
                                style={[styles.imgStyle, ImageStyles]}
                                resizeMode={resizeMode}
                            />
                            {item.description && (
                                <Text style={[styles.description, descriptionStyle]}>
                                    {item.description}
                                </Text>
                            )}
                        </View>
                    );
                })}
            </Swiper>
        </View>
    );
}
