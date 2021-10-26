import React from "react";
import AsideNav from "../../components/AsideNav/AsideNav";
import './FavouritesPage.css'

export function FavouritesPage({ favourites }) {
  console.log(favourites);

  return (
    <div className='favouritePage__container'>
        <AsideNav/>
      <div>
        {favourites.map((fav, index) => {
          return (
            <div key={fav}>
              {" "}
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${fav}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          );
        })}
      </div>
    </div>
  );
}
