import React from "react";
import VideoList from "../VideoList/VideoList"

export default function Aside({
  videos,
  handleVideoSelect,
  favourites,
  handleFavourite,
}) {
  return (
    <aside>
      <VideoList
        videos={videos}
        handleVideoSelect={handleVideoSelect}
        favourites={favourites}
        handleFavourite={handleFavourite}
      />
    </aside>
  );
}
