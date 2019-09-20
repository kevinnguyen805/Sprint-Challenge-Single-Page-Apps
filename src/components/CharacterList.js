import React, { useEffect, useState } from "react";
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
        console.log(response.data.results)
        const character = response.data.results
        setCharacterData(character);
      })
      .catch(error => {
        console.log(error)
      })

  }, []);

  return (
    <section className="character-list">
      {
        characterData.map(item => {
          return (
            <div key={item.id}>
              <img src={item.image} alt="character profile" />
              <h3>{item.name}</h3>
              <p>{item.species}</p>
              <p>{item.status}</p>
            </div>
          )
        })
      }
    </section>
  );
}
