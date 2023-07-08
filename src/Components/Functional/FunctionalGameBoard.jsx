import "./styles/game-board.css";
import { useState } from "react";

export function FunctionalGameBoard(props) {
  const [currentFish, setCurrentFish] = useState({
    name: "",
    url: props.FishData.getNextFish()?.url,
  });

  const onSubmitFish = (e) => {
    e.preventDefault();
    props.FishData.makeFishGuess(currentFish.name);
    const nextFish = props.FishData.getNextFish();
    setCurrentFish({ name: "", url: nextFish?.url });
    props.setFishCounts(
      props.FishData.getCorrectFishCount(),
      props.FishData.getIncorrectFishCount()
    );
    props.setGameOver(nextFish === undefined);
  };

  const onChangeFishName = (e) => {
    setCurrentFish((previousState) => {
      return { ...previousState, name: e.target.value };
    });
  };

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={currentFish.url} alt={currentFish.name} />
      </div>
      <form id="fish-guess-form" onSubmit={onSubmitFish}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          value={currentFish.name}
          onChange={onChangeFishName}
        />
        <input type="submit" disabled={currentFish.name ? false : true} />
      </form>
    </div>
  );
}
