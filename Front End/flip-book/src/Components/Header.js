import React from 'react';
import "../Styles/Header.css"

export default function Header(props) {
  return (
    <header className="App-header">

      <div className="nav-container">
        <h1 className="nav-title">{props.title}</h1>
      </div>
      
    </header>
  );
}
