import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import axios from 'axios'

export default function SearchForm(props) {
 
  const [searchTerm, setSearchTerm] = useState('')

  const [searchResults, setSearchResults] = useState([])

  useEffect( () => {
    axios.get('https://rickandmortyapi.com/api/character/')
    .then(response => {
      const data = response.data.results
      const results = data.filter(item => {
        return item.name.toLowerCase().includes(searchTerm)
      })
      setSearchResults(results)
    })
    
  },[searchTerm])

  const handleChange = event => {
    console.log(event.target.value)
    setSearchTerm(event.target.value)
  }



  

  return (
    <section className="search-form">
      <form>
      <input
        type="text"
        placeholder="Search"
        name="textfield"
        value={searchTerm}
        onChange={handleChange}
      />
      </form>
      <ul>
    {
      searchResults.map(item => {
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
      </ul>
    </section>
  );
}
