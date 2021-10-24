import React from "react";
import { VideoListStyled } from "./VideoList.styled";

import VideoItem from "../VideoItem/VideoItem";



export default function SearchBar({ videos, handleVideoSelect, favourites, handleFavourite}) {
  //console.log(videos)
  return (
    <VideoListStyled>
      <ul>
        {videos.map((vid, index) => {
          return (
 
            <li key={`${vid.id.videoId}${index}`}>
              <VideoItem item={vid} onClick={handleVideoSelect} favourites={favourites} handleFavourite={handleFavourite}/>
              {/* <img src={vid.snippet.thumbnails.default.url} alt=""/> */}
            </li>
          );
        })}
      </ul>
    </VideoListStyled>
  );
}
