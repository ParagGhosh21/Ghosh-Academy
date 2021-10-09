// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBreadSlice} from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {



    return (
        <div>
            <div className='header-title'>
                <div>
                    <h3><span>Ghosh</span> Academy</h3>

                </div>
                <div>
                    <Button variant="success">Register Now</Button>
                </div>
            </div>


            <div className='nav-bar'>
                <NavLink className='nav-link' to='/Home'>Home</NavLink>
                <NavLink className='nav-link' to='/Services'>Services</NavLink>
                <NavLink className='nav-link' to='/Blog'>Blog</NavLink>
                <NavLink className='nav-link' to='/Contact'>Contact Us</NavLink>
                <NavLink className='nav-link' to='/About'>About Us</NavLink>
            </div>

        </div>
    );
};

export default Header;