import React from "react";
import './SearchBar.css'
import { useHistory } from "react-router";

export default function SearchBar({ handleSubmit }) {
    const history = useHistory();

  return (
    <div className="search-container">
      <form
        onSubmit={(e) => {
          history.push(`/search?q=${e.target.elements[0].value}`) 
          handleSubmit(e);
        }}
      >
        <input className="search-input" type="text" placeholder="Search"></input>
        <button className="search-button" type="submit">
        <img src="./img/search.png" alt=""/>  
        </button> 
      </form>
    </div>
  );
}
