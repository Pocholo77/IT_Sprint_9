import React from "react";
import VideoDetail from "../VideoDetail/VideoDetail"

export default function Main({ selectedVideo, handleFavourite, favourites }) {
 /*  console.log(selectedVideo,favourites) */
    return (
    <main>
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
