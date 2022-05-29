import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';



function NewBeer() {
    const navigate = useNavigate();

    const [ name, setName ] = useState("");
    const [ tagline, setTagline ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ firstBrewed, setFirstBrewed ] = useState("");
    const [ brewersTips, setBrewersTips ] = useState("");
    const [ attenuationLevel, setAttenuationLevel ] = useState(0);
    const [ contributedBy, setContributedBy ] = useState("");

    const handleNameChange = (event) => setName(event.target.value); 
    const handleTaglineChange = (event) => setTagline(event.target.value); 
    const handleDescriptionChange = (event) => setDescription(event.target.value); 
    const handleFirstBrewedChange = (event) => setFirstBrewed(event.target.value); 
    const handleBrewersTipsChange = (event) => setBrewersTips(event.target.value); 
    const handleAttenuationLevelChange = (event) => setAttenuationLevel(event.target.value); 
    const handleContributedByChange = (event) => setContributedBy(event.target.value); 


    const handleSubmitForm = async (event) => {
        event.preventDefault();
        // console.log(name,tagline,description,firstBrewed,brewersTips,attenuationLevel,contributedBy);

        try {
            const newBeer = {
                name,
                tagline,
                description,
                firstBrewed,
                brewersTips,
                attenuationLevel,
                contributedBy
            };

            await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer);
            // console.log(response);

            navigate("/beers");

        }
        catch(err) {
            console.log(err);
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmitForm}>
            <strong><label htmlFor='name'> Name </label></strong>
            <br />
            <input type='text' name='name' value={name} onChange={handleNameChange} />
            <br />
            <strong><label htmlFor='tagline'> Tagline </label></strong>
            <br />
            <input type='text' name='tagline' value={tagline} onChange={handleTaglineChange} />
            <br />
            <strong><label htmlFor='description'> Description </label></strong>
            <br />
            <textarea type='text' name='description' value={description} onChange={handleDescriptionChange}></textarea>
            <br />
            <strong><label htmlFor='firstBrewed'> First Brewed </label></strong>
            <br />
            <input type='text' name='firstBrewed' value={firstBrewed} onChange={handleFirstBrewedChange} />
            <br />
            <strong><label htmlFor='brewersTips'> Brewers Tips </label></strong>
            <br />
            <input type='text' name='brewersTips' value={brewersTips} onChange={handleBrewersTipsChange} />
            <br />
            <strong><label htmlFor='attenuationLevel'> Attenuation Level </label></strong>
            <br />
            <input type='number' name='attenuationLevel' value={attenuationLevel} onChange={handleAttenuationLevelChange} />
            <br />
            <strong><label htmlFor='contributedBy'> Contributed by </label></strong>
            <br />
            <input type='text' name='contributedBy' value={contributedBy} onChange={handleContributedByChange} />
            <br />
            
            <button> ADD NEW </button>
        </form>

    </div>
  )
}

export default NewBeer