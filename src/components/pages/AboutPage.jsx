import React from 'react'
import {Link} from 'react-router-dom'

function AboutPage() {
  return (
    <div className='about'>
      <h1>About this project</h1>
      <p>This is a react app to leave feedback to a product or service</p>
      <p>Vesion 1.0</p>
      <p><Link to='/'>Go back home</Link></p>
    </div>
  )
}

export default AboutPage
