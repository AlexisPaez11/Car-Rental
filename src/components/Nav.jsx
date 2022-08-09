import React from 'react'
import { NavLink} from "react-router-dom";

const Nav = () => {
  return (
    <nav>
        <NavLink to="/" className='logo'>
          <span>OPTIMUS</span>
        </NavLink>

        <ul>
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
    </nav>
  )
}

export default Nav