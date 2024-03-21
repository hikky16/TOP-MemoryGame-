import { useState, useEffect } from "react";
import "./App.scss";
import MainGame from "./components/MainGame";
import pokemonFuntions from "./pokemonFunctions";
import StartScreen from "./components/StartScreen";
import LoadingScreen from "./components/LoadingScreen";
import GameOverModal from "./components/GameOverModal";
import imgTitle from "./assets/Pokemon.png";
import imgMem from "./assets/memory.png";

function App() {
  const [loading, setLoading] = useState(true);
  const [gameStatus, setGameStatus] = useState("start-screen");
  const [pokemonList, setPokemonList] = useState([]);
  const [difficulty, setDifficulty] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [gameScore, setGameScore] = useState(0);
  const [pokemonTracker, setPokemonTracker] = useState([]);

  const { getRandomPoke, shufflePokemonList } = pokemonFuntions();

  useEffect(() => {
    const fetchPokemon = async (id) => {
      const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const { name, sprites } = await result.json();
      const sprite = sprites.front_default;
      return { id, name, sprite };
    };

    const fetchPokemonData = async () => {
      setPokemonTracker([]);
      setPokemonList([]);
      const randomPokeList = getRandomPoke(difficulty);
      const pokemonData = await Promise.all(randomPokeList.map(fetchPokemon));
      setPokemonList(pokemonData);
      setLoading(false);
    };

    if (difficulty) {
      fetchPokemonData();
    }

    return () => {
      setLoading(true);
    };
  }, [difficulty]);

  const handlePokemonShuffle = (id) => {
    if (!pokemonTracker.includes(id)) {
      setGameScore((g) => g + 1);
      pokemonTracker.push(id);
    } else {
      setGameStatus("game-lose");
      setGameOver(true);
    }
    const shuffledList = shufflePokemonList([...pokemonList]);
    setPokemonList(shuffledList);
  };

  useEffect(() => {
    if (gameScore === difficulty) {
      setGameStatus("game-win");
      setGameOver(true);
    }
  }, [gameScore]);

  return (
    <>
      <div className="container-title">
        <img src={imgTitle} alt="Pokemon Logo" width={600} height={200} />
        <img src={imgMem} alt="BrainPower" width={200} height={200} />
      </div>
      {gameOver && (
        <GameOverModal
          gameStatus={gameStatus}
          setGameStatus={setGameStatus}
          setGameOver={setGameOver}
          setGameScore={setGameScore}
          setDifficulty={setDifficulty}
        />
      )}
      {gameStatus === "start-screen" ? (
        <StartScreen
          setDifficuly={setDifficulty}
          setGameStatus={setGameStatus}
        />
      ) : loading ? (
        <LoadingScreen />
      ) : (
        <>
          <MainGame
            pokemonList={pokemonList}
            gameScore={gameScore}
            handlePokemonShuffle={handlePokemonShuffle}
            difficulty={difficulty}
          />
        </>
      )}
    </>
  );
}

export default App;
