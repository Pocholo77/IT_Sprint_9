import React from "react";
import './VideoList.css'
import VideoItem from "../VideoItem/VideoItem";



export default function VideoList({ videos, handleVideoSelect, favourites, handleFavourite, type="list"}) {
  /* console.log(videos) */
  return (
    <div>
      <ul className={type}>
        {videos.map((vid, index) => {
          return (
 
            <li key={`${vid.id.videoId}${index}`}>
              <VideoItem item={vid} onClick={handleVideoSelect} favourites={favourites} handleFavourite={handleFavourite}/>
              {/* <img src={vid.snippet.thumbnails.default.url} alt=""/> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
