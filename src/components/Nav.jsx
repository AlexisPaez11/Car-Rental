import React, { useState } from 'react'
import { NavLink} from "react-router-dom";
import { HiMenuAlt3 } from 'react-icons/hi'

const Nav = () => {
  const [isMobile, setIsMobile] = useState(false)

  return (
    <nav>
      <NavLink to="/" className='logo'>
        <span>OPTIMUS</span>
      </NavLink>

      <ul className={isMobile ? 'nav-menu-mobile' : 'nav-menu'} onClick={() => setIsMobile(false)}>
        <li className="nav-menu-item">
        <NavLink to="/">Home</NavLink></li>
        
        <li className="nav-menu-item">
        <NavLink to="/Catalogue">Catalogue</NavLink></li>

        <li className="nav-menu-item">
        <NavLink to="/About">About Us</NavLink></li>
        
        <li className="nav-menu-item">
        <NavLink to="/Help">Help</NavLink></li>

        <NavLink to="#">
            <div className='btn'>Download App</div>
        </NavLink>
      </ul>
        <button className='menu' onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? <HiMenuAlt3 /> : <HiMenuAlt3 />}
        </button>
    </nav>
  )
}

export default Nav