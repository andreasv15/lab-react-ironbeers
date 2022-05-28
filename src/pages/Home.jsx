import React from 'react'
import { NavLink } from 'react-router-dom'
import allBeersImg from '../assets/beers.png'
import newBeerImg from '../assets/new-beer.png'
import randomBeerImg from '../assets/random-beer.png'


function Home() {
  return (
    <div>
        <NavLink to="/beers"> 
            <img src={allBeersImg} alt='img' />
            <h2> All Beers </h2>
            <p> 
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book.
            </p>        
         </NavLink>
        <NavLink to="/random-beer"> 
        <img src={randomBeerImg} alt='img' />
            <h2> Random Beer </h2>
            <p> 
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book.
            </p>        
         </NavLink> 
        <NavLink to="/new-beer"> 
        <img src={newBeerImg} alt='img' />
            <h2> New Beer </h2>
            <p> 
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book.
            </p>
        </NavLink> 
    
    </div>
  )
}

export default Home