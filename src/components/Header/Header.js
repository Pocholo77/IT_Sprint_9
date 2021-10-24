import React from "react";

import "./Header.css";

import SearchBar from "../SearchBar/SearchBar";
import History from "../History/History";

export default function Header({ handleSubmit, history, clearHistory }) {
  return (
    <header>
      <div className="header-container">
        <div className="header__logo">
          <img src="/img/logo.png" alt="logo" />
        </div>
        <div className="header__search">
          <SearchBar handleSubmit={handleSubmit} />
        </div>
        <div className="header__user-buttons">
          <ul>
            <li>
              <img src="/img/video.png" alt="" />
            </li>
            <li>
              <img src="/img/grid.png" alt="" />
            </li>
            <li>
              <img src="/img/bell.png" alt="" />
            </li>
            <li>
              <img src="/img/logoUser.png" alt="X" />
            </li>
          </ul>
        </div>
      </div>
      <div className="header__history">
        <History history={history} clearHistory={clearHistory} />
      </div>
    </header>
  );
}
