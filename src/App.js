import React, { useState } from "react";
import Youtube from "./api/Youtube";
import SearchBar from "./components/SearchBar/SearchBar";
import VideoList from "./components/VideoList/VideoList";

export default function App() {
  const [state, setState] = useState({
    videos: [],
    selectedVideo: null,
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
      <VideoList videos={state.videos} handleVideoSelect={handleVideoSelect} />
    </div>
  );
}
