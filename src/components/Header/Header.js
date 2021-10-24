import React from "react";
import { HeaderStyled } from "./Header.styled";
import "./Header.css"; 

import SearchBar from "../SearchBar/SearchBar";
import History from "../History/History";

export default function Header({ handleSubmit, history, clearHistory }) {
  return (
    <header>
      <HeaderStyled>
        <div className="header">
          <div className="header__logo">
              <img src='/img/logo.png' alt="logo"/> 
          </div>
          <div className="header__search">
            <SearchBar handleSubmit={handleSubmit} />
          </div>
          <div className="header__buttons">
              <nav>
                  <li><img src="/img/video.png" alt="" /></li>
                  <li><img src="/img/grid.png" alt="" /></li>
                  <li><img src="/img/bell.png" alt="" /></li>
                  <li><img src="" alt="X" /></li>
              </nav>
          </div>
        </div>
        <div className="header__history">
         <History history={history} clearHistory={clearHistory}/> 
        </div>
      </HeaderStyled>
    </header>
  );
}
