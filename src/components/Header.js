import { NavLink } from "react-router-dom";
import {LOGO_URL } from "../utils/constant";

const Header = () =>{
    return (
        <div className='header'>
            <div className='logo-container'>
                <img src={LOGO_URL} className='logo' />
            </div>
            <div className='nav-items'>
                <ul>
                    <li><NavLink to='/' className={({isActive}) => isActive ? 'active-link' : '' }>Home</NavLink></li>
                    <li><NavLink to='/about' className={({isActive}) => isActive ? 'active-link' : '' }>About Us</NavLink></li>
                    <li><NavLink to='/contact' className={({isActive}) => isActive ? 'active-link' : '' }>Contact Us</NavLink></li>
                    <li><NavLink>Cart</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;