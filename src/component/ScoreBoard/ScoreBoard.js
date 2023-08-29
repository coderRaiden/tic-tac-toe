import React from "react";
import "./ScoreBoard.css";

const ScoreBoard = ({ scores, xPlaying }) => {
  const { xScore, oScore } = scores;
  return (
    <div className="ScoreBoard">
      <span className={`socore x-score ${!xPlaying && "inactive"}`}>
        X - {xScore}
      </span>
      <span className={`socore x-score ${xPlaying && "inactive"}`}>
        O - {oScore}
      </span>
    </div>
  );
};

export default ScoreBoard;
