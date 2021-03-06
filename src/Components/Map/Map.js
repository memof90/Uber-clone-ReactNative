import React, { useRef, useEffect } from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'

// Maps
import MapView, { Marker } from 'react-native-maps';
// Maps  View directions
import MapViewDirections from 'react-native-maps-directions';

// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { selectDestination, selectOrigin, setTravelTimeInformation } from '../../../redux/slices/navSlice';

// import GoogleMaps apiKey
import { GOOGLE_MAPS_APIKEY } from '@env';

// Tailiwind
import tw from 'tailwind-react-native-classnames';

const Map = () => {

    // SetUp Origin
    const origin = useSelector(selectOrigin);
    // Setup Destination
    const destination = useSelector(selectDestination);
    //  setup referencie to map
    const mapRef = useRef(null);
    // setup travel time to save redux
    const dispatch = useDispatch();

// setUp refresh Map to only draw map when the user introduce origin into map and not re render component efificently to render component
    useEffect(() => {
        if (!origin || !destination) return;
        // Zoom & fit to markers map
        mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
            edgePadding:  { top: 50, right: 50, bottom: 50, left: 50}
        })
    }, [origin, destination])

    // setup calculated the travel time
    useEffect(() => {
        if (!origin || !destination) return;
        const getTravelTime = async () => {
            // magig URL
            const URL = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAPS_APIKEY}`
            fetch(URL)
            .then(res => res.json())
            .then(data => {
                // see the data
                console.log(data);
                // save Data to Redux 
                dispatch(setTravelTimeInformation(data.rows[0].elements[0]));
                // Example data
                                // "rows": Array [
                //     Object {
                //       "elements": Array [
                //         Object {
                //           "distance": Object {
                //             "text": "3.6 mi",
                //             "value": 5749,
                //           },
                //           "duration": Object {
                //             "text": "14 mins",
                //             "value": 857,
                //           },
                //           "status": "OK",
                //         },
                //       ],
                //     },
                //     Object {
                //       "elements": Array [
                //         Object {
                //           "distance": Object {
                //             "text": "1.3 mi",
                //             "value": 2072,
                //           },
                //           "duration": Object {
                //             "text": "4 mins",
                //             "value": 239,
                //           },
                //           "status": "OK",
                //         },
                //       ],
                //     },
                //   ],
                //   "status": "OK",
                // }
            })
        };
        getTravelTime();
    },[origin, destination, GOOGLE_MAPS_APIKEY])

    return (
        <MapView 
        style={tw `flex-1`}
        ref={mapRef}
        mapType="mutedStandard"
        initialRegion={{
         latitude: origin.location.lat,
         longitude: origin.location.lng,
         latitudeDelta: 0.005,
         longitudeDelta: 0.005,
        }}
         >

            {origin && destination && (
                <MapViewDirections 
                    origin={origin.description}
                    destination={destination.description}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={3}
                    strokeColor="black"
                />
            )}

             {origin?.location && (
                 <Marker 
                     coordinate={{
                        latitude: origin.location.lat,
                        longitude: origin.location.lng,
                     }}
                     title="Origin"
                     description={origin.description}
                     identifier="origin"
                 />
             )}
             {destination?.location && (
                 <Marker 
                     coordinate={{
                        latitude: destination.location.lat,
                        longitude: destination.location.lng,
                     }}
                     title="Destination"
                     description={destination.description}
                     identifier="destination"
                 />
             )}
         </MapView>
    )
}

export default Map

const styles = StyleSheet.create({
    
})
