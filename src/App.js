import React from "react";
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage'
import CharacterList from './components/CharacterList'


export default function App() {
  return (
    <main>
      <Header />
      <WelcomePage />
      <CharacterList />
    </main>
  );
}


/*

1. Display Data from a Server API


2. Add a Router to this application using React Router


3. Add 'Search By Name' feature 

*/