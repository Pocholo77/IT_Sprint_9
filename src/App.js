import React, { useState } from "react";
import Youtube from "./api/Youtube";
import SearchBar from "./components/SearchBar/SearchBar";
 

export default function App() {

  const [ state , setState ] = useState( {
    videos: [],
    selectedVideo: null,
  })
  //«handleSubmit» i «handleVideoSelect»:
  async function handleSubmit(e){
    e.preventDefault()
    //console.log(e.target.elements[0].value);
 
    const response = await Youtube.get('/search',{
      params:{
        q: e,
      }
    })
  }

  function handleVideoSelect(){

  }

  return (

    <div className="App">
      <h1>App</h1>
      <SearchBar handleSubmit={handleSubmit}/>
    </div>
  )
}

 
