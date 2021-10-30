import React from "react";
import { Link } from "react-router-dom";
import './AsideNav.css'

export default function AsideNav() {
  return (
    <aside className="asideNav-container">
      <nav>
        <ul>
          <li>
            <Link to="/">
              <div className="asideNav__link-container">
                <div><img style={{height:"12px", marginLeft:"12px"}} src="./img/home.png" alt=""/></div>
                <div className="asideNav__link__name"><h5><p>Inicio</p></h5></div> 
              </div>
            </Link>
          </li>
          <li>
          <Link to="/favourites">
              <div className="asideNav__link-container">
                <div className="asideNav__link__icon"><img src="./img/liked.png" alt=""/></div>
                <div className="asideNav__link__name"><h5><p>Favoritos</p></h5></div> 
              </div>
            </Link>
          </li>
          <li>
          <Link to="/history">
              <div className="asideNav__link-container">
                <div className="asideNav__link__icon"><img src="./img/history.png" alt=""/></div>
                <div className="asideNav__link__name"><h5><p>Historial</p></h5></div> 
              </div>
            </Link>
          </li>
        </ul>
      </nav>
      <hr />
      
    </aside>
  );
}
