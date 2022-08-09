import React from 'react'
import Marks from './HeaderMarks'

const Header = () => {
  return (
    <div className='header'>
      <div className="header-container">
      <h1>Premium Car Rental in New York</h1>
      <h2>Don't deny yourself the pleasure of driving the best premium cars from around the world here and now</h2>
      </div>
      <Marks />
    </div>
  )
}

export default Header