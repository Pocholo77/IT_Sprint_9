import React from "react";
import VideoList from "../../components/VideoList/VideoList";

export default function Search(props) {
  return (
    <div>
      <VideoList {...props} />
    </div>
  );
}
