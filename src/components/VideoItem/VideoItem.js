import React from "react";
import { useHistory } from "react-router";
import "./VideoItem.css";

export default function VideoItem({
  item,
  onClick,
  favourites,
  handleFavourite,
}) {
  const history = useHistory();

  const { title, channelTitle } = item.snippet;
  const id = item.id.videoId;

  return (
    <div
      className="videoItem__container"
      onClick={(e) => {
        if (e.target.tagName !== "svg") {
          onClick(item);
          history.push({ pathname: `/detail`, data: "id" });
        }
      }}
    >   
      <div 
        className="videoItem__container__img"
/*         style={{
          backgroundImage: `url(${item.snippet.thumbnails.default.url})`,
        }} */
        alt=""
      ><img src={item.snippet.thumbnails.default.url} alt=""/></div>
      <div>
        <h4>{title}</h4>
        <h5>{channelTitle}</h5>
        <svg
          fill={favourites.find((fav) => fav === id) ? "black" : "grey"}
          onClick={() => handleFavourite(id)}
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <path d="M21.216 8h-2.216v-1.75l1-3.095v-3.155h-5.246c-2.158 6.369-4.252 9.992-6.754 10v-1h-8v13h8v-1h2l2.507 2h8.461l3.032-2.926v-10.261l-2.784-1.813zm.784 11.225l-1.839 1.775h-6.954l-2.507-2h-2.7v-7c3.781 0 6.727-5.674 8.189-10h1.811v.791l-1 3.095v4.114h3.623l1.377.897v8.328z" />
        </svg>
      </div>
    </div>
  );
}
