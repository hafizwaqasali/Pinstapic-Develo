import { Text, View } from "react-native";
import React, { useRef, useState } from "react";
import {
    CustomText,
    HeaderWithBtn,
    PrimaryBtn,
    ScreenWrapper,
    TextInputWithAutoPlaces,
} from "~components";
import styles from "./styles";
import AppColors from "~utills/AppColors";
import MapView, { PROVIDER_DEFAULT, Circle, Marker } from "react-native-maps";
import { height } from "~utills/Dimension";
import Slider from "react-native-slider";
import CommonStyles from "~utills/CommonStyles";
import { MapPinSvg, SearchIconSvg } from "~assets/Svg";
import useLocations from "~hooks/useLocations";

export default function ManageLocation({ navigation, route }) {
    const mapRef = useRef();
    const [sliderValue, setSliderValue] = useState(1);
    const myLocation = useLocations()
    const [latestRegion, setLatestRegion] = useState({
        latitude: myLocation.lat ?? 37.78825,
        longitude: myLocation.lng ?? -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });
    const [selectedPlace, setSelectedPlace] = useState('');



    return (
        <ScreenWrapper
            scrollEnabled
            statusBarColor={AppColors.blueBackground}
            backgroundColor={AppColors.blueBackground}
            barStyle="light-content"
            headerUnScrollable={() => (
                <HeaderWithBtn
                    centerText={`Select Location`}
                    isCenterTitle
                    onPressBackBtn={() => navigation.goBack()}
                />
            )}
        >
            <View style={styles.container}>
                <View style={styles.topSearchBar}>
                    <TextInputWithAutoPlaces
                        Icon={<SearchIconSvg />}
                        containerStyle={styles.Searchbar}
                        placeholder={"Search..."}
                        placeholderTextColor={AppColors.white_85}
                        textinputViewStyle={styles.searchinputViewStyle}
                        onAddress={(data, details = null) => {
                            setSelectedPlace(data.description)
                            setLatestRegion({
                                latitude: details.geometry.location.lat,
                                longitude: details.geometry.location.lng
                            })
                            mapRef.current?.animateToRegion(latestRegion, 2000)
                        }}
                    />
                </View>
                <MapView
                    zoomEnabled={false}
                    renderToHardwareTextureAndroid
                    region={{
                        latitude: latestRegion.latitude,
                        longitude: latestRegion.longitude,
                        latitudeDelta: sliderValue ? (0.0922 * sliderValue) / 2.25 : 0.0922,
                        longitudeDelta: sliderValue
                            ? (0.0421 * sliderValue) / 2.25
                            : 0.0421,
                    }}
                    provider={PROVIDER_DEFAULT}
                    onRegionChangeComplete={async (region) => {
                        const locationName = await mapRef.current.addressForCoordinate(region)
                        setLatestRegion(region);
                        setSelectedPlace(locationName.name)
                    }}
                    ref={mapRef}
                    style={styles.mapView}
                    initialRegion={latestRegion}
                >
                    <Circle
                        center={{
                            latitude: latestRegion.latitude,
                            longitude: latestRegion.longitude,
                        }}
                        radius={sliderValue * 1000}
                        fillColor={AppColors.darkOrange_30}
                        strokeWidth={0}
                        strokeColor={"transparent"}
                        needsOffscreenAlphaCompositing
                        renderToHardwareTextureAndroid
                    />
                    <Marker
                        coordinate={{
                            latitude: latestRegion.latitude,
                            longitude: latestRegion.longitude,
                        }}
                    >
                        <MapPinSvg />
                    </Marker>
                </MapView>
                <View style={styles.BottomSlider}>
                    <CustomText
                        children={`within ${sliderValue} km`}
                        textColor={AppColors.blue}
                        textStyles={styles.kmTextStyles}
                    />
                    <Slider
                        value={sliderValue}
                        onValueChange={(value) => {
                            let val = parseInt(value);
                            setSliderValue(val);
                        }}
                        style={styles.slider}
                        minimumValue={1}
                        maximumValue={100}
                        thumbStyle={styles.thumbStyle}
                        trackStyle={styles.trackStyle}
                        minimumTrackTintColor={AppColors.darkOrange}
                    />
                    <PrimaryBtn
                        title="Continue"
                        containerStyle={CommonStyles.marginTop_1}
                        onPress={() => {
                            // Pass and merge params back to home screen
                            navigation.navigate({
                                name: route?.params?.screenName,
                                params: { Loc: selectedPlace },
                            });
                        }}
                    />
                </View>
            </View>
        </ScreenWrapper>
    );
}
