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

    const handleBeerSearch = async (event) => {
        //console.log(event.target.value);
        try {
            const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${event.target.value}`);
            //console.log(response.data);
            setListBeers(response.data);    
        }
        catch (err) {
            console.log(err)
        }
    }


  return (
    <div>
    <form>
        <input type='text' name='search' onChange={handleBeerSearch} />
        <br />
        <button> Buscar </button>
    </form>

    {
        listBeers.map((eachBeer) => {
            return (
                <Link key={eachBeer._id} className="beerList" to={`/beers/${eachBeer._id}`}>
                <div className='oneBeer'>
                    <div className='imgBeer'>
                        <img src={eachBeer.image_url} alt='img' width={50} />
                    </div>
                    <div className='datosBeer'>
                        <h3> {eachBeer.name} </h3>
                        <p> {eachBeer.tagline} </p>
                        <p> <strong>Created by: </strong>{eachBeer.contributed_by} </p>
                    </div>
                </div>
                <hr />
                </Link>

            )
        })

    }   
    </div>
  )
}

export default ListBeers