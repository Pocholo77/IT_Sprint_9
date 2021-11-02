import React from "react";
import VideoList from "../../components/VideoList/VideoList";
import VideoDetail from "../../components/VideoDetail/VideoDetail";
import "./DetailPage.css";

export default function DetailPage(props) {
  return (
    <div className="DetailPage__container">
      <VideoDetail {...props} />
      <VideoList {...props} src={props.videos} />
    </div>
  );
}
