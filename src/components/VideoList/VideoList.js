import React from "react";
import "./VideoList.css";
import VideoItem from "../VideoItem/VideoItem";

export default function VideoList({
  videos,
  handleVideoSelect,
  favourites,
  handleFavourite,
  type = "list",
  itemConfig,
  src,
}) {
  return (
    <div className="videoList-container">
      <ul className={type}>
        {src.map((vid, index) => {
          return (
            <li className="item-list" key={`${vid.id.videoId}${index}`}>
              <VideoItem
                item={vid}
                onClick={handleVideoSelect}
                favourites={favourites}
                handleFavourite={handleFavourite}
                config={itemConfig}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
