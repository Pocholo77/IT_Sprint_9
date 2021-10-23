import React from "react";
import { VideoListStyled } from "./VideoList.styled";

import VideoItem from "../VideoItem/VideoItem";



export default function SearchBar({ videos, handleVideoSelect }) {
  //console.log(videos)
  return (
    <VideoListStyled>
      <ul>
        {videos.map((vid, index) => {
          return (
 
            <li key={`${vid.id.videoId}${index}`}>
              {/* <img src={vid.snippet.thumbnails.default.url} alt=""/> */}
              <VideoItem item={vid} onClick={handleVideoSelect}/>
            </li>
          );
        })}
      </ul>
    </VideoListStyled>
  );
}
