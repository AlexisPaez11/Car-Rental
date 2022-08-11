import React from 'react'
import { NavLink} from "react-router-dom";
import { IoArrowForward } from 'react-icons/io5'

import IMG1 from '../../assets/grid-images/GridChevroletCorvette.webp'
import IMG5 from '../../assets/grid-images/GridBugattiDivo.webp'
import IMG2 from '../../assets/grid-images/GridMcLarenSenna.webp'
import IMG4 from '../../assets/grid-images/GridTeslaRoadster.webp'
import IMG3 from '../../assets/grid-images/GridBugattiChironSport.webp'
import IMG6 from '../../assets/grid-images/GridChevroletSilverado.webp'

const GridImages = () => {
  return (
    <div className='gridImages'>
      <div className="gridImages-section">
        <span>ONLY THE BEST CARS</span>
        <h3>Our Vehicle Fleet</h3>
        <p>We provide our customers with the most incredible driving emotions. That's why we have only world-class cars in our fleet</p>
        <div className='gridImages-container'>
            <img className='img1' src={IMG1} alt="" />
            <img className='img2' src={IMG2} alt="" />
            <img className='img3' src={IMG3} alt="" />
            <img className='img4' src={IMG4} alt="" />
            <img className='img5' src={IMG5} alt="" />
            <img className='img6' src={IMG6} alt="" />
        </div>

        <NavLink to="/Catalogue">
          Show all models <IoArrowForward />
        </NavLink>
      </div>
    </div>
  )
}

export default GridImages