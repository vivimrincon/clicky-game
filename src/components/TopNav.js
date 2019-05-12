import React from "react";
import '../styles/topnav.css';
import ScoreMessage from './Score';

// Component Navbar sets props from clickygame.js into score.js
//Works with Score.js

 export default function TopNav(props) {
  return (
    <nav className="navbar">
      <ul>
        <li>Clicky Game</li>
        <ScoreMessage score={props.score} topScore={props.topScore} />
        <li>
          Score: {props.score} | Top Score: {props.topScore}
        </li>
      </ul>
    </nav>
  );
}

// index -> app -> ClickyGame -> TopNav -> Score