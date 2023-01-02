
import React, { useState } from 'react'
import RNLocation from 'react-native-location';



export default function useLocations() {
    const [MyLocation, setMyLocation] = useState('')
    RNLocation.configure({
        distanceFilter: 5.0
    })
    RNLocation.requestPermission({
        ios: "whenInUse",
        android: {
            detail: "coarse"
        }
    }).then(granted => {
        if (granted) {
            RNLocation.subscribeToLocationUpdates(locations => {
                console.log(locations, "-----")
                setMyLocation({ lat: locations.latitude, lng: locations.longitude })
            })
        }
    })

    return {
        myLocation: MyLocation,
    }
}
