import React from 'react'
import { Link } from 'react-router-dom';
import homeImg from '../assets/home.png';
import Home from '../pages/Home';

function NavBar() {
  return (
    <div className='navBar'>
        <Link to="/" element={ <Home /> }> <img src={homeImg} alt='img' /> </Link>

    </div>
  )
}

export default NavBar