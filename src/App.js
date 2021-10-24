import React, { useState } from "react";
import Youtube from "./api/Youtube";
import VideoDetail from "./components/VideoDetail/VideoDetail";
import VideoList from "./components/VideoList/VideoList";
import Header from "./components/Header/Header";

export default function App() {
  const [state, setState] = useState({
    videos: [],
    selectedVideo: null,
    favourites: [],
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

  function handleFavourite(id) {
    /* console.log(id) */
    setState((prev) => {
      if (prev.favourites.find((vid) => vid === id)) {
        const restFavourites = prev.favourites.filter((vid) => vid !== id);
        return {
          ...prev,
          favourites: restFavourites,
        };
      } else {
        const favVideo = [...prev.favourites, id];
        return {
          ...prev,
          favourites: favVideo,
        };
      }
    });
  }

  function handleVideoSelect(item) {

    setState((prev) => {
      return {
        ...prev,
        selectedVideo: item,
      };
    });
  }

  return (
    <div className="App">
      <Header handleSubmit={handleSubmit}/>
        
    
      {state.selectedVideo && (
        <VideoDetail
          item={state.selectedVideo}
          handleFavourite={handleFavourite}
          favourites={state.favourites}
        />
      )}
      <VideoList
        videos={state.videos}
        handleVideoSelect={handleVideoSelect}
        favourites={state.favourites}
        handleFavourite={handleFavourite}
      />
    </div>
  );
}
