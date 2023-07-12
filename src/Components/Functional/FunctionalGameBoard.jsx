import "./styles/game-board.css";
import { useState } from "react";

export function FunctionalGameBoard(props) {
  const [currentFishName, setCurrentFishName] = useState("");

  const onSubmitFish = (e) => {
    e.preventDefault();
    if (
      currentFishName ===
      props.fishes[props.correctFish + props.incorrectFish].name
    ) {
      props.setCorrectFish(props.correctFish + 1);
    } else {
      props.setIncorrectFish(props.incorrectFish + 1);
    }
    setCurrentFishName("");
  };

  const onChangeFishName = (e) => {
    setCurrentFishName(e.target.value);
  };

  return (
    <div id="game-board">
      <div id="fish-container">
        <img
          src={props.fishes[props.correctFish + props.incorrectFish].url}
          alt={props.fishes[props.correctFish + props.incorrectFish].name}
        />
      </div>
      <form id="fish-guess-form" onSubmit={onSubmitFish}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          value={currentFishName}
          onChange={onChangeFishName}
        />
        <input type="submit" disabled={currentFishName ? false : true} />
      </form>
    </div>
  );
}
