import { Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
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
import RNLocation from "react-native-location";
import Geocoder from "react-native-geocoding";
import { useIsFocused } from '@react-navigation/native';

export default function ManageLocation({ navigation, route }) {
    const mapRef = useRef();
    const [sliderValue, setSliderValue] = useState(1);
    const [latestRegion, setLatestRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });
    const [selectedPlace, setSelectedPlace] = useState("");
    // This hook returns `true` if the screen is focused, `false` otherwise
    const isFocused = useIsFocused();

    Geocoder.init('AIzaSyCZZt0P_BztZPme1q5icvLe65i51PjxX3M'); // use a valid API key

    RNLocation.configure({
        distanceFilter: 5.0,
    });

    useEffect(() => {
        (async () => {
            await getMyLocation();
        })();
    }, [isFocused]);

    const getMyLocation = async () => {

        await RNLocation.requestPermission({
            ios: "whenInUse",
            android: {
                detail: "coarse",
            },
        }).then(async (granted) => {
            if (granted) {
                RNLocation.subscribeToLocationUpdates(async (locations) => {
                    mapRef.current?.animateToRegion(
                        {
                            latitude: locations[0]?.latitude,
                            longitude: locations[0]?.longitude,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        },
                        2000
                    );
                    setLatestRegion({
                        latitude: locations[0]?.latitude,
                        longitude: locations[0]?.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    });
                    await Geocoder.from({ lat: locations[0]?.latitude, lng: locations[0]?.longitude })
                        .then((json) => {
                            var address = json.results[0].formatted_address
                            setSelectedPlace(address)
                        })
                        .catch((error) => console.warn(error));
                });
            }
        });
    };

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
                            setSelectedPlace(data.description);
                            setLatestRegion({
                                latitude: details.geometry.location.lat,
                                longitude: details.geometry.location.lng,
                            });
                            mapRef.current?.animateToRegion(latestRegion, 2000);
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
                        setLatestRegion(region);
                        await Geocoder.from({ lat: region?.latitude, lng: region?.longitude })
                            .then((json) => {
                                var address = json.results[0].formatted_address
                                setSelectedPlace(address)
                            })
                            .catch((error) => console.warn(error));
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
