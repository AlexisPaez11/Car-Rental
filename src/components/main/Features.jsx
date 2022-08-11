import React from 'react'
// import { Ri24HoursLine } from 'react-icons/ri'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { IoChatbubblesOutline, IoFlashOutline } from 'react-icons/io5'
import { BsShieldCheck } from 'react-icons/bs'

const Features = () => {
  return (
    <div className='features'>
        <div className="features-section">
            <span>TAKING CARE OF EVERY CLIENT</span>
            <h3>Feel the Best Experience with Our Rental Deals!</h3>
            <p>We are all about our client's comfort and safety. That's why we provide the best service you can imagine.</p>
            <div className='features-container'>
                <div className="features-item">
                    <AiOutlineClockCircle />
                    <p>24-hour car delivery</p>
                </div>
                <div className="features-item">
                    <IoChatbubblesOutline />
                    <p>24/7 technical support</p>
                </div>
                <div className="features-item">
                    <IoFlashOutline />
                    <p>All models have a premium package</p>
                </div>
                <div className="features-item">
                    <BsShieldCheck />
                    <p>Absolute confidentiality</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features