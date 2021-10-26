import React from "react";
import { Link } from "react-router-dom";

export default function AsideNav() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/favourites">favorito</Link>
          </li>
          <li>
            <Link to="/history">history</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
