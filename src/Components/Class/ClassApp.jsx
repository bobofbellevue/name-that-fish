import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { fishes } from "./FishData.js";

export class ClassApp extends Component {
  state = {
    correctFish: 0,
    incorrectFish: 0,
  };

  setCorrectFish = (correct) => {
    this.setState({ correctFish: correct });
  };

  setIncorrectFish = (incorrect) => {
    this.setState({ incorrectFish: incorrect });
  };

  render() {
    return (
      <>
        <ClassScoreBoard
          fishes={fishes}
          correctFish={this.state.correctFish}
          incorrectFish={this.state.incorrectFish}
        />
        {this.state.correctFish + this.state.incorrectFish < 4 && (
          <ClassGameBoard
            fishes={fishes}
            correctFish={this.state.correctFish}
            incorrectFish={this.state.incorrectFish}
            setCorrectFish={this.setCorrectFish}
            setIncorrectFish={this.setIncorrectFish}
          />
        )}
        {this.state.correctFish + this.state.incorrectFish >= 4 && (
          <ClassFinalScore
            correctFish={this.state.correctFish}
            incorrectFish={this.state.incorrectFish}
          />
        )}
      </>
    );
  }
}

export function FunctionalApp() {
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
