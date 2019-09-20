import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import axios from 'axios'


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [characterData, setCharacterData] = useState([])


  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        const character = response.data.results
        setCharacterData(character);
      })
      .catch(error => {
        console.log('Unable to return data', error)
      })

  }, []);

  return (
    <section className="character-list">
      {
        characterData.map(item => {
          return (

            <div key={item.id}>
              <Link to={`/character/${item.id}`}>
              <img src={item.image} alt="character profile" />
              <h3>{item.name}</h3>
              <p>{item.species}</p>
              <p>{item.status}</p>
              </Link>
            </div>
          )
        })
      }
    </section>
  );
}
