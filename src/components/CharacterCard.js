import React, {useState, useEffect} from "react";
import {Route, NavLink } from 'react-router-dom'
import axios from 'axios'




export default function CharacterCard(props) {


  const [characterDetails, setCharacterDetails] = useState(null);

  
  useEffect(()=> {
    axios.get()
  }, [])
  

  return (
    <div>

    </div>
  );
}
