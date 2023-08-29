import "./App.css";
import { useState } from "react";

import Board from "./component/Board/Board";

function App() {
  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [scores, setScores] = useState({ xScore: 0, yScore: 0 });

  const handleBoardClick = (boxIdx) => {
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying === true ? "X" : "0";
      } else {
        return value;
      }
    });

    const winner = checkWinner(updatedBoard);

    // if (winner) {
    //   if (winner === "0") {
    //     let { oScore } = scores;
    //     oScore += 1;
    //     setScores({ ...scores, oScore });
    //   } else {
    //     if (winner === "X") {
    //       let { xScore } = scores;
    //       xScore += 1;
    //       setScores({ ...scores, xScore });
    //     }
    //   }

    setBoard(updatedBoard);
    setXPlaying(!xPlaying);
  };

  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];

      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        console.log(board[x]);
        return board[x];
      }
    }
  };

  return (
    <div>
      <Board board={board} onClick={handleBoardClick} />
    </div>
  );
}

export default App;
