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
            <img src={randomBeer.image_url} alt='img' width={60} /> 
            <h3> <strong>Name: </strong> {randomBeer.name} </h3>                   
            <p> <strong>Tagline: </strong>{randomBeer.tagline} </p>                   
            <p> <strong> First Brewed: </strong> {randomBeer.first_brewed} </p>                   
            <p> <strong> Attenuation level: </strong> {randomBeer.attenuation_level} </p>                   
            <p> <strong> Description: </strong> {randomBeer.description} </p>                   
            <p> <strong> Contributed by: </strong> {randomBeer.contributed_by} </p>
    </div>
  )
}

export default RandomBeer