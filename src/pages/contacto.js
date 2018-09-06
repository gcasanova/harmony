import React from 'react'
import Map from '../components/map'

const ContactPage = () => (
  <div>
    <div className={'text-center'}>
      <h4>De martes a sabados de 10:00 a 18:00</h4>
      <h4>C/ Azorín 22, El Cardonal, San Isidro de Abona.</h4>
      <h4>Whatsapp: xxx xxx xxx Tel. xxx xxx xxx</h4>
      <h4>Email: xxx@harmonylaser.es</h4 >
    </div>

    <Map
      isMarkerShown
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.GATSBY_MAPS_API_KEY}`}
      loadingElement={<div style={{ height: '100%' }} />}
      containerElement={<div style={{ height: '300px', width: '100%', border: '2px solid', 'margin-top': '30px' }} />}
      mapElement={<div style={{ height: '100%' }} />}
    />
  </div>
)

export default ContactPage
