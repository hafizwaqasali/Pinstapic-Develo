
import React, { useState } from 'react'
import RNLocation from 'react-native-location';



export default async function useLocations() {
    const [MyLocation, setMyLocation] = useState(null)
    RNLocation.configure({
        distanceFilter: 5.0
    })
    await RNLocation.requestPermission({
        ios: "whenInUse",
        android: {
            detail: "coarse"
        }
    }).then(async (granted) => {
        if (granted) {
            RNLocation.subscribeToLocationUpdates(async (locations) => {
                console.log(locations, "-----")
                return {
                    lat: locations[0]?.latitude,
                    long: locations[0]?.longitude
                }

            })
        }
    })


}
