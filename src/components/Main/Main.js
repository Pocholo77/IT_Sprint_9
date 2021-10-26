import React from "react";
import VideoDetail from "../VideoDetail/VideoDetail"

export default function Main({ selectedVideo, handleFavourite, favourites }) {
 /*  console.log(selectedVideo,favourites) */
 /* console.log('Main:',selectedVideo) */
 
    return (
    <main>
      <h1>Main:</h1>
      {selectedVideo && (
        <VideoDetail
          item ={selectedVideo}
          handleFavourite={handleFavourite}
          favourites={favourites}
        />
      )}
    </main>
  );
}
