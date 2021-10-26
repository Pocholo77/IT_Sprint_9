import React from "react";
import VideoList from "../../components/VideoList/VideoList";
import './SearchPage.css'

export default function SearchPage(props) {
  return (
    <div>
      <VideoList {...props} />
    </div>
  );
}
