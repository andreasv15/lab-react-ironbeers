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
        
            <img src={beerDetail.image_url} alt='img' width={50} /> 
            <p> {beerDetail.name} </p>                   
            <p> {beerDetail.tagline} </p>                   
            <p> {beerDetail.first_brewed} </p>                   
            <p> {beerDetail.attenuation_level} </p>                   
            <p> {beerDetail.description} </p>                   
            <p> {beerDetail.contributed_by} </p>
    </div>
  )
}

export default SingleBeer