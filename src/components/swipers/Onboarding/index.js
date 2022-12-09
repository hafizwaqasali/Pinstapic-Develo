import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import styles from './styles';
import Swiper from 'react-native-swiper';

export default function OnBoardingSwiper({
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
    fullScreenImages = [],
    dot,
    showDots = true,
    horizontal = false
}) {
    return (
        <View style={styles.container}>
            <Swiper
                horizontal={horizontal}
                showsPagination={showDots}
                dot={dot}
                style={[styles.swipperContainer, swipperContainerStyles]}
                showsButtons={showsButtons}
                loop={loop}
                autoplay={autoplay}
                activeDot={activeDot}
                activeDotColor={activeDotColor}
                activeDotStyle={activeDotStyle}
                dotColor={dotColor}
                dotStyle={dotStyle}>
                {dataarray?.map((item, index) => {
                    return (
                        <View style={[styles.wrapper, wrapperStyle]} key={index}>
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
                })
                }
                {
                    fullScreenImages?.map((item, index) => {
                        return (
                            <View style={[styles.wrapper, wrapperStyle]} key={index}>
                                <Image
                                    source={item.img}
                                    style={[styles.imgStyle, ImageStyles]}
                                    resizeMode={resizeMode}
                                />
                            </View>
                        )
                    })
                }
            </Swiper>
        </View>
    );
}
