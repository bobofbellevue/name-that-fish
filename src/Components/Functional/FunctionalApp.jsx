import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { FishData } from "./FishData.js";
import { useState } from "react";

export function FunctionalApp() {
  const [correctFish, setCorrectFish] = useState(0);
  const [incorrectFish, setIncorrectFish] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const setFishCounts = (correct, incorrect) => {
    setCorrectFish(correct);
    setIncorrectFish(incorrect);
  };

  return (
    <>
      <FunctionalScoreBoard
        FishData={FishData}
        correctFish={correctFish}
        incorrectFish={incorrectFish}
      />
      {!gameOver && (
        <FunctionalGameBoard
          FishData={FishData}
          setFishCounts={(correct, incorrect) =>
            setFishCounts(correct, incorrect)
          }
          setGameOver={setGameOver}
        />
      )}
      {gameOver && (
        <FunctionalFinalScore
          correctFish={correctFish}
          incorrectFish={incorrectFish}
        />
      )}
    </>
  );
}
