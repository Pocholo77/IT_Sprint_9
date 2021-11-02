import React from "react";
import AsideNav from "../../components/AsideNav/AsideNav";
import VideoList from "../../components/VideoList/VideoList";
import "./FavouritesPage.css";

export function FavouritesPage(props) {
  return (
    <div className="favouritePage__container">
      <AsideNav />
      <VideoList
        {...props}
        type="grid"
        itemConfig={{ layout: "column", image: "medium" }}
        src={props.favourites}
      />
    </div>
  );
}
