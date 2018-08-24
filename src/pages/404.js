import React from 'react'
import Link from 'gatsby-link'

const NotFoundPage = () => (
  <div>
    <h1>PAGINA NO ENCONTRADA</h1>
    <p>Esta ruta no existe en nuestra web, <Link to="/">vuelve al inicio.</Link></p>
  </div>
)

export default NotFoundPage
