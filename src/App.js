import React, { useState } from "react";
import Youtube from "./api/Youtube";

export default function App() {

  const [ state , setState ] = useState( {
    videos: [],
    selectedVideo: null,
  })
  //«handleSubmit» i «handleVideoSelect»:
  async function handleSubmit(e){
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
    </div>
  )
}

 
