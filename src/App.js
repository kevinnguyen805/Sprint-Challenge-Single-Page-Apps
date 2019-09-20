import React from "react";
import { Route, Link} from 'react-router-dom'
import styled from 'styled-components'
import WelcomePage from './components/WelcomePage'
import CharacterList from './components/CharacterList'
import CharacterCard from './components/CharacterCard'
import SearchForm from './components/SearchForm'


const Main = styled.div`
  background: linear-gradient(to left, #159957, #155799);
  color: white;
  height:100%;
`

const Nav = styled.nav`
  text-align:center;
  padding:30px
`

export default function App(props) {
  return (
    <Main>
  
      <Nav>
        <Link className="navLinks" to="/">Home</Link>
        <Link className="navLinks" to="/searchcharacter">Search by Name </Link>
        <Link className="navLinks" to="/character">Characters</Link>
      </Nav>


      <div>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/character" component={CharacterList}/>
        <Route path="/searchcharacter" component={SearchForm}/>
        <Route path="/character/:id" render={props => <CharacterCard {...props} /> } />
      </div>
    </Main>
  );
}


/*

1. Display Data from a Server API


2. Add a Router to this application using React Router


3. Add 'Search By Name' feature 

*/