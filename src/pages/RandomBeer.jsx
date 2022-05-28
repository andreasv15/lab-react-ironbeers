import axios from 'axios';
import React, { useState, useEffect } from 'react'


function RandomBeer() {

    const [ randomBeer, setRandomBeer ] = useState(null);

    useEffect(() => {
        getRandomBeer();
    }, [])

    const getRandomBeer = async () => {
        const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers/random");
        // console.log(response.data);
        setRandomBeer(response.data);
    }


    if (randomBeer === null) {
        return <h3> Loading </h3>;
    }


  return (
    <div>
            <img src={randomBeer.image_url} alt='img' width={50} /> 
            <p> {randomBeer.name} </p>                   
            <p> {randomBeer.tagline} </p>                   
            <p> {randomBeer.first_brewed} </p>                   
            <p> {randomBeer.attenuation_level} </p>                   
            <p> {randomBeer.description} </p>                   
            <p> {randomBeer.contributed_by} </p>

    </div>
  )
}

export default RandomBeer