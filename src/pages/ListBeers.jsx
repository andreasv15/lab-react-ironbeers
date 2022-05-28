import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function ListBeers() {

    const [ listBeers, setListBeers ] = useState(null);


    useEffect(() => {
        getListBeers()
    }, [])


    const getListBeers = async () => {
        try {
            const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers");
            //console.log(response.data);
            setListBeers(response.data);
    
        }
        catch (err) {
            console.log(err)
        }
    }

    if (listBeers === null) {
        return <h3> Loading </h3>;
    }


  return (
    <div>
    {
        listBeers.map((eachBeer) => {
            return (
                <Link key={eachBeer._id} className="beerList" to={`/beers/${eachBeer._id}`}>
                    <img src={eachBeer.image_url} alt='img' width={50} />
                    <h2> {eachBeer.name} </h2>
                    <p> {eachBeer.tagline} </p>
                    <p> <strong>Created by:</strong>{eachBeer.contributed_by} </p>
                </Link>
            )
        })
    }   
    </div>
  )
}

export default ListBeers