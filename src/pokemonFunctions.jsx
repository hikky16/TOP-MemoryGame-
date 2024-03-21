export default function pokemonFuntions() {
  const getRandomPoke = (difficulty) => {
    const randomPokeList = [];
    while (randomPokeList.length < difficulty) {
      const randomId = Math.floor(Math.random() * 386) + 1;
      if (!randomPokeList.includes(randomId)) {
        randomPokeList.push(randomId);
      }
    }
    return randomPokeList;
  };

  const shufflePokemonList = (list) => {
    const shuffledList = [...list];
    for (let i = shuffledList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledList[i], shuffledList[j]] = [shuffledList[j], shuffledList[i]];
    }
    return shuffledList;
  };

  return { getRandomPoke, shufflePokemonList };
}
