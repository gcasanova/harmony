import React from 'react'
import Map from '../components/map'

const ContactPage = () => (
  <div>    
    <Map
      isMarkerShown
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.GATSBY_MAPS_API_KEY}`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `500px`, width: `60%` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  </div>
)

export default ContactPage
