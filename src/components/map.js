import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={20}
        defaultCenter={{ lat: 28.074654, lng: -16.565839 }}
    >
        {props.isMarkerShown && <Marker position={{ lat: 28.074654, lng: -16.565839 }} />}
    </GoogleMap>
))

export default MyMapComponent