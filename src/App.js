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
    favourites: JSON.parse(localStorage.getItem("favouritesVids")) || [],
    history: JSON.parse(localStorage.getItem("history")) || [],
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
      const hist = [...prev.history, e.target.elements[0].value];
      localStorage.setItem('history', JSON.stringify(hist))
      return {
        ...prev,
        videos: response.data?.items,
        history: hist,
      };
    });
    //console.log(state.videos)
  }

  function handleFavourite(id) {
    /* console.log(id) */
    setState((prev) => {
      if (prev.favourites.find((vid) => vid === id)) {
        const restFavourites = prev.favourites.filter((vid) => vid !== id);
        localStorage.setItem("favouriteVids", JSON.stringify(restFavourites));
        return {
          ...prev,
          favourites: restFavourites,
        };
      } else {
        const favVideo = [...prev.favourites, id];
        localStorage.setItem("favouriteVids", JSON.stringify(favVideo));
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

  function clearHistory(){
    setState( prev => {
      localStorage.removeItem('history')
      return {
        ...prev,
        history: [],
      }
    }
    )}

  return (
    <div className="App">
      <Header handleSubmit={handleSubmit} history={state.history} clearHistory={clearHistory}/>
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
