import React from "react";
import AsideNav from "../../components/AsideNav/AsideNav";
import VideoList from "../../components/VideoList/VideoList";
import "./SearchPage.css";

export default function SearchPage(props) {
  return (
    <div className="searchPage__container">
      <AsideNav />
      <div className="searchPage__videos-container">
        <VideoList {...props} />
      </div>
    </div>
  );
}
