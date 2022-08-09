import React from 'react'
import CarsData from '../components/cars/CarsData'
import Car from '../components/cars/Car'

const Catalogue = () => {
  return (
    <section className='catalogue-section'>
      <div className='catalogue-container'>

      {
        CarsData.map(({id, title, bodywork, image, topSpeed, acceleration, passengers, moreDetails, bookNow}) => {
          return (
            <Car key={id} title={title} bodywork={bodywork} image={image} topSpeed={topSpeed} acceleration={acceleration} passengers={passengers} moreDetails={moreDetails} bookNow={bookNow} />
            )
          })
        }
        </div>
    </section>
  )
}

export default Catalogue