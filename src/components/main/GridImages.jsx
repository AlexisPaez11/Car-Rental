import React from 'react'
import { NavLink} from "react-router-dom";
import { IoArrowForward } from 'react-icons/io5'

import IMG1 from '../../assets/grid-images/GridChevroletCorvette.jpg'
import IMG2 from '../../assets/grid-images/GridBugattiDivo.jpg'
import IMG3 from '../../assets/grid-images/GridMcLarenSenna.jpg'
import IMG4 from '../../assets/grid-images/GridTeslaRoadster.jpg'
import IMG5 from '../../assets/grid-images/GridKoenigseggJesko.jpg'
import IMG6 from '../../assets/grid-images/GridBugattiChironSport.jpg'
import IMG7 from '../../assets/grid-images/GridChevroletSilverado.jpg'

const GridImages = () => {
  return (
    <div className='gridImages'>
      <div className="gridImages-section">
        <span>ONLY THE BEST CARS</span>
        <h3>Our Vehicle Fleet</h3>
        <p>We provide our customers with the most incredible driving emotions. That's why we have only world-class cars in our fleet</p>
        <div className='gridImages-container'>
          <div className='gridImages-container-top'>
            <img src={IMG1} alt="" />
            <img src={IMG2} alt="" />
            <img src={IMG3} alt="" />
          </div>
          <div className='gridImages-container-bottom'>
            <img src={IMG4} alt="" />
            <img src={IMG5} alt="" />
            <img src={IMG6} alt="" />
            <img src={IMG7} alt="" />
          </div>
        </div>

        <NavLink to="/Catalogue">
          Show all models <IoArrowForward />
        </NavLink>
      </div>
    </div>
  )
}

export default GridImages