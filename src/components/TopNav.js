import React from "react";
import '../styles/topnav.css';
import ScoreMessage from './Score';

// Component Navbar
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

// export default TopNav;
