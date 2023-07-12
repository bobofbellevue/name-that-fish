import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { fishes } from "./FishData.js";
import { useState } from "react";

export function FunctionalApp() {
  const [correctFish, setCorrectFish] = useState(0);
  const [incorrectFish, setIncorrectFish] = useState(0);

  return (
    <>
      <FunctionalScoreBoard
        fishes={fishes}
        correctFish={correctFish}
        incorrectFish={incorrectFish}
      />
      {correctFish + incorrectFish < 4 && (
        <FunctionalGameBoard
          fishes={fishes}
          correctFish={correctFish}
          incorrectFish={incorrectFish}
          setCorrectFish={setCorrectFish}
          setIncorrectFish={setIncorrectFish}
        />
      )}
      {correctFish + incorrectFish >= 4 && (
        <FunctionalFinalScore
          correctFish={correctFish}
          incorrectFish={incorrectFish}
        />
      )}
    </>
  );
}
