import React from "react";
import "./Header.css";
import {Link} from 'react-router-dom'

import SearchBar from "../SearchBar/SearchBar";
import History from "../History/History";

export default function Header({ handleSubmit, history, clearHistory }) {
  return (
    <header>
      <div className="header-container">
        <div className="header__logo">
          <Link to="/">
          <img className="header__logo__img" src="/img/logo.png" alt="logo" />
          </Link>
        </div>
        <div className="header__search">
          <SearchBar handleSubmit={handleSubmit} />
        </div>
        <div className="header__user-buttons">
          <ul>
            <li>
              <img className="header__user-buttons__icons" src="/img/video.png" alt="" />
            </li>
            <li>
              <img className="header__user-buttons__icons" src="/img/grid.png" alt="" />
            </li>
            <li>
              <img className="header__user-buttons__icons" src="/img/bell.png" alt="" />
            </li>
            <li>
              <img className="header__user-buttons__icons" src="/img/logoUser.png" alt="user" />
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
