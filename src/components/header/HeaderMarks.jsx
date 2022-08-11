import React from 'react'
import { SiMercedes, SiFerrarinv, SiBmw, SiBugatti, SiTesla, SiAudi, SiMclaren, SiFord, SiMitsubishi, SiJaguar, SiRenault, SiVolkswagen, SiRollsroyce, SiChevrolet } from 'react-icons/si';

const HeaderMarks = () => {
  return (
    <div className='header-marks'>
      <div className="header-marks-section">
        <div className='header-mark big'><SiRollsroyce /></div>
        <div className='header-mark big'><SiMercedes /></div>
        <div className='slide header-mark big'><SiBmw /></div>
        <div className='slide header-mark big'><SiBugatti /></div>
        <div className='slide header-mark small'><SiFerrarinv /></div>
        <div className='slide header-mark big'><SiTesla /></div>
        <div className='slide header-mark small'><SiAudi /></div>
        <div className='slide header-mark small'><SiMclaren /></div>
        <div className='slide header-mark small'><SiFord /></div>
        <div className='header-mark big'><SiMitsubishi /></div>
        <div className='header-mark small'><SiJaguar /></div>
        <div className='header-mark big'><SiVolkswagen /></div>
        <div className='header-mark big'><SiRenault /></div>
        <div className='header-mark small'><SiChevrolet /></div>
      </div>
    </div>
  )
}

export default HeaderMarks