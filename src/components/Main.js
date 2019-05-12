import React from "react";
import '../styles/main.css';

export default function Main(props) {
  return <main className="container">{props.children}</main>;
}
