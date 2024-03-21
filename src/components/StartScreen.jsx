import "./StartScreen.scss";

export default function StartScreen({ setDifficuly, setGameStatus }) {
  const handleEasy = () => {
    setDifficuly(5);
    setGameStatus("start-game");
  };

  const handleMedium = () => {
    setDifficuly(10);
    setGameStatus("start-game");
  };

  const handleHard = () => {
    setDifficuly(15);
    setGameStatus("start-game");
  };

  return (
    <div className="container-difficulty">
      <div className="container-difficulty-border">
        <h3>Choose Difficulty</h3>
        <div className="container-buttons">
          <button onClick={handleEasy}>Easy</button>
          <button onClick={handleMedium}>Medium</button>
          <button onClick={handleHard}>Hard</button>
        </div>
      </div>
    </div>
  );
}
