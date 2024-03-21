import { useState, useEffect } from "react";
import "./Card.scss";
import backImage from "../assets/back.png";
import Tilt from "react-parallax-tilt";

function Card({
  image,
  pokeName,
  handlePokemonShuffle,
  id,
  setIsFlipped,
  isFlipped,
}) {
  const handleClick = () => {
    setIsFlipped(true);
    setTimeout(() => handlePokemonShuffle(id), 900);
  };

  const front = (
    <div className={"card-front"}>
      <img className="pokeImage" src={image} />
      <p className="pokeName">
        {pokeName.charAt(0).toUpperCase() + pokeName.slice(1)}
      </p>
    </div>
  );

  const back = (
    <div className={"card-back"}>
      <img className="back-image" src={backImage} />
    </div>
  );

  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.4}
      glareColor={"#fff"}
      glarePosition="all"
    >
      <div className="container-card">
        <div
          className={`card ${isFlipped ? "flipped" : ""}`}
          onClick={handleClick}
        >
          {front}
          {back}
        </div>
      </div>
    </Tilt>
  );
}

export default Card;
