import { Text, View } from 'react-native'
import React, { useRef } from 'react'
import { HeaderWithBtn, ScreenWrapper } from '~components'
import styles from './styles'
import AppColors from '~utills/AppColors'
import MapView from 'react-native-maps';

export default function ManageLocation({ navigation }) {
    const mapRef = useRef()
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
                <MapView
                    ref={mapRef}
                    style={styles.mapView}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >

                </MapView>
            </View>
        </ScreenWrapper>
    )
}
