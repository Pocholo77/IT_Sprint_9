import React from "react";
import "./VideoDetail.css";

export default function VideoDetail({ item, handleFavourite, favourites }) {
  
  const id = item.id.videoId;
  const { title, channelTitle, description, publishTime } = item.snippet;

  return (
    <div className="videoDetail__container">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="videoDetail__container__video__title">
        <h2>{title}</h2>
      </div>
      <div className="videoDetail__container__video__info">
        <p>{publishTime}</p>
        <svg
          fill={favourites.find((fav) => fav === id) ? "black" : "grey"}
          onClick={() => handleFavourite(id)}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M21.216 8h-2.216v-1.75l1-3.095v-3.155h-5.246c-2.158 6.369-4.252 9.992-6.754 10v-1h-8v13h8v-1h2l2.507 2h8.461l3.032-2.926v-10.261l-2.784-1.813zm.784 11.225l-1.839 1.775h-6.954l-2.507-2h-2.7v-7c3.781 0 6.727-5.674 8.189-10h1.811v.791l-1 3.095v4.114h3.623l1.377.897v8.328z" />
        </svg>
      </div>
      {/*  fecha------------------------------------------------------------------------like*/}
      <hr />
      <div className="videoDetail__container__channel">
        <div className="videoDetail__container__channel__title">
          <h4>{channelTitle}</h4>
          <img
            className="videoDetail__container__channel__button"
            src="./img/subs.png"
            alt=""
          />
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}
