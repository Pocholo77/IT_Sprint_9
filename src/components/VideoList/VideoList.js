import React from "react";
import "./VideoList.css";
import VideoItem from "../VideoItem/VideoItem";
import VideoItemHome from "../VideoItemHome/VideoItemHome";

export default function VideoList({
  videos,
  handleVideoSelect,
  favourites,
  handleFavourite,
  type = "list",
}) {
  /* console.log(videos) */
  return (
    <div className="videoList-container">
      <ul className={type}>
        {videos.map((vid, index) => {
          return (
            <li key={`${vid.id.videoId}${index}`}>
              {type === "list" ? (
                <VideoItem
                  item={vid}
                  onClick={handleVideoSelect}
                  favourites={favourites}
                  handleFavourite={handleFavourite}
                />
              ) : (
                <VideoItemHome
                  item={vid}
                  onClick={handleVideoSelect}
                  favourites={favourites}
                  handleFavourite={handleFavourite}
                />
              )}
              {/* <img src={vid.snippet.thumbnails.default.url} alt=""/> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
