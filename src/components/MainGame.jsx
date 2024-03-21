import { useState, useEffect } from "react";
import "./MainGame.scss";
import Card from "./Card";
export default function MainGame({
  pokemonList,
  gameScore,
  handlePokemonShuffle,
  difficulty,
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    setIsFlipped(true);
    const timer = setTimeout(() => setIsFlipped(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isFlipped) {
      const timer = setTimeout(() => setIsFlipped(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [isFlipped]);

  return (
    <>
      <div className="progress-container">
        <span>
          {gameScore} / {difficulty}
        </span>
      </div>
      <div className="card-container">
        {pokemonList.map((poke) => (
          <Card
            pokeName={poke.name}
            image={poke.sprite}
            key={poke.id}
            id={poke.id}
            handlePokemonShuffle={handlePokemonShuffle}
            setIsFlipped={setIsFlipped}
            isFlipped={isFlipped}
          />
        ))}
      </div>
    </>
  );
}
