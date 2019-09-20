import React from "react";
import {Route, Link} from 'react-router-dom'
import styled from 'styled-components'
import WelcomePage from './components/WelcomePage'
import CharacterList from './components/CharacterList'
import CharacterCard from './components/CharacterCard'
import SearchForm from './components/SearchForm'


export default function App(props) {
  return (
    <main>
      {/* <SearchForm /> */}
      <div>
        <Link to="/">Home</Link>
        <Link to="/searchcharacter">Search</Link>
        <Link to="/character">Characters</Link>
      </div>


      <div>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/character" component={CharacterList}/>
        <Route path="/searchcharacter" component={SearchForm} />
        <Route path="/character/:id" render={props => <CharacterCard {...props} /> } />
      </div>
    </main>
  );
}


/*

1. Display Data from a Server API


2. Add a Router to this application using React Router


3. Add 'Search By Name' feature 

*/