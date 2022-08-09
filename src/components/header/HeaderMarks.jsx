import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoArrowForward } from 'react-icons/io5' // SeeMore
import { SiMercedes, SiFerrarinv, SiBmw, SiBugatti, SiTesla, SiAudi, SiMclaren, SiFord, SiMitsubishi } from 'react-icons/si';

const HeaderMarks = () => {
  return (
    <div className='header-marks'>
        {/* <div className='header-mark big'><SiMercedes /></div> */}
        <div className='header-mark big'><SiBmw /></div>
        <div className='header-mark big'><SiBugatti /></div>
        <div className='header-mark small'><SiFerrarinv /></div>
        <div className='header-mark big'><SiTesla /></div>
        <div className='header-mark small'><SiAudi /></div>
        <div className='header-mark small'><SiMclaren /></div>
        <div className='header-mark small'><SiFord /></div>
        {/* <div className='header-mark big'><SiMitsubishi /></div> */}
          <NavLink to="/Catalogue" className='see-more-btn'>
            <IoArrowForward />
          </NavLink>
    </div>
  )
}

export default HeaderMarks