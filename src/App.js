import React, { useState } from "react";
import Youtube from "./api/Youtube";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Aside from "./components/Aside/Aside";
import "./App.css"; 

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
    /* console.log('handelVideoSelect') */
  }

  return (
    <div className="App">
      <Header handleSubmit={handleSubmit} />
      <div className="app__body">
        <Main
          selectedVideo={state.selectedVideo}
          handleFavourite={handleFavourite}
          favourites={state.favourites}
        />
        <Aside
          videos={state.videos}
          handleVideoSelect={handleVideoSelect}
          favourites={state.favourites}
          handleFavourite={handleFavourite}
        />
      </div>
    </div>
  );
}
