import React from "react";
import "./History.css"

export default function History({ history, clearHistory }) {
  console.log('History:', history);
  //* controlar maximo de array , reverse & splice
  return (
    <div className="history-container">
      <ul className="history-list">
        {history.map((result, index /* <= ()  {}  */) => (
          <li className="history-list__item" key={index}>
            {result}
          </li>
        ))}
      </ul>
      {history.length > 0 && (
        <button className="history-list__button" type="button" onClick={clearHistory}>
          Clear
        </button>
      )}
    </div>
  ); 
}
