import React, { useState } from "react";
import Youtube from "./api/Youtube";
import SearchBar from "./components/SearchBar/SearchBar";
import VideoDetail from "./components/VideoDetail/VideoDetail";
import VideoList from "./components/VideoList/VideoList";

export default function App() {
  const [state, setState] = useState({
    videos: [],
    selectedVideo: null,
    favourites: []
  });
  //«handleSubmit» i «handleVideoSelect»:
  async function handleSubmit(e) {
    e.preventDefault();
    //console.log(e.target.elements[0].value);

    const response = await Youtube.get("/search", {
      params: {
        q: e.target.elements[0].value,
      },
    });

    setState((prev) => {
      return {
        ...prev,
        videos: response.data?.items,
      };
    });
    //console.log(state.videos)
  }

  function handleFavourite(id){
    /* console.log(id) */
    setState( prev => {
      
      if( prev.favourites.find( vid => vid === id)){
        const restFavourites = prev.favourites.filter( vid => vid !== id)
        return {
          ...prev,
          favourites: restFavourites,
        }
      }else{
        const favVideo = [...prev.favourites , id];
        return{
          ...prev,
          favourites: favVideo,
        }
      }
    })
  }

  function handleVideoSelect(item) {
    const id = item.id.videoId;

    setState((prev) => {
      return {
        ...prev,
        selectedVideo: item,
      };
    });
  }

  return (
    <div className="App">
      <h1>App</h1>
      <SearchBar handleSubmit={handleSubmit} />
      <VideoList videos={state.videos} handleVideoSelect={handleVideoSelect} favourites={state.favourites} handleFavourite={handleFavourite}/>
      { state.selectedVideo && <VideoDetail item={state.selectedVideo}  handleFavourite={handleFavourite} favourites={state.favourites}/> }
    </div>
  );
}
