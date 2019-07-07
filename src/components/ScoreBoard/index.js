import React from "react";
import "./style.css";

function ScoreBoard(props) {
  return (
      <h1 className="scoreboard">Current Score: {props.score} || Top Score: {props.topscore}</h1>
  );
}

export default ScoreBoard;