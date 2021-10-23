import React from "react";
  

export default function VideoItem({ item, onClick }) {
     
    const { title, channelTitle } = item.snippet;
     

  return (
    <div onClick={ ()=>{onClick(item)}}>
        <img src={item.snippet.thumbnails.default.url} alt=''></img>
        <h4>{title}</h4>
        <h5>{channelTitle}</h5>
    </div>
         
    
  );
}
