import axios from 'axios';
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

function SingleBeer() {

    const { beerId } = useParams();
    //console.log(beerId)

    const [ beerDetail, setBeerDetail ] = useState(null);


    useEffect(() => {
        getBeerDetail();
    }, [])

    const getBeerDetail = async () => {
        try {
            const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`);
            //console.log(response);
            setBeerDetail(response.data);

        }
        catch (err) {
            console.log(err);
        }
    }


    if (beerDetail === null) {
        return <h3> Loading </h3>
    }


  return (
    <div>
        <img src={beerDetail.image_url} alt='img' width={60} /> 
        <h3> <strong>Name: </strong> {beerDetail.name} </h3>                   
        <p> <strong>Tagline: </strong>{beerDetail.tagline} </p>                   
        <p> <strong> First Brewed: </strong> {beerDetail.first_brewed} </p>                   
        <p> <strong> Attenuation level: </strong> {beerDetail.attenuation_level} </p>                   
        <p> <strong> Description: </strong> {beerDetail.description} </p>                   
        <p> <strong> Contributed by: </strong> {beerDetail.contributed_by} </p>
    </div>
  )
}

export default SingleBeer