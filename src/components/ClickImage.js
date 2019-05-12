import React from "react";
import '../styles/click.css';

 export default function ClickImage(props) {
  return (
    <div
      role="img"
      aria-label="click image"
      onClick={() => props.handleClick(props.id)}
      style={{ backgroundImage: `url("${props.image}")` }}
      className={`click-item${props.shake ? " shake" : ""}`}
    />
  );
}
