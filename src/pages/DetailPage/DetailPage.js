import React from "react";
import VideoList from "../../components/VideoList/VideoList";
import VideoDetail from "../../components/VideoDetail/VideoDetail";
import "./DetailPage.css";

export default function DetailPage(props) {
 /* console.log('DetailsPage:', props)   */
  return (
    <div className="DetailPage__container">
      <VideoDetail {...props} />
      <VideoList {...props} />
    </div>
  );
}
