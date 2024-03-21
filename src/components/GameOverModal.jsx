import { createPortal } from "react-dom";
import "./GameOverModal.scss";
import loseImg from "../assets/lose.gif";
import winImg from "../assets/win.gif";

export default function GameOverModal({
  gameStatus,
  setGameStatus,
  setGameOver,
  setGameScore,
  setDifficulty,
}) {
  const handleReset = () => {
    setGameStatus("start-screen");
    setGameOver(false);
    setGameScore(0);
    setDifficulty(null);
  };
  const winner = (
    <div className="modal-container">
      <div className="modal">
        <h2>You Win!</h2>
        <img src={winImg} alt="Happy Pikachu GIF" />
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );

  const loser = (
    <div className="modal-container">
      <div className="modal">
        <h2>Game Over</h2>
        <img src={loseImg} alt="Crying Pikachu GIF" />
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
  const mountElement = document.getElementById("overlay");

  return createPortal(
    gameStatus === "game-lose" ? loser : winner,
    mountElement
  );
}
