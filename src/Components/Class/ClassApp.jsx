import { Component, useState } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { FishData } from "./FishData.js";

export class ClassApp extends Component {
  state = {
    incorrectFish: 0,
    correctFish: 0,
    gameOver: false,
  };

  setFishCounts = (correct, incorrect) => {
    this.setState({ correctFish: correct });
    this.setState({ incorrectFish: incorrect });
  };

  setGameOver = (status) => {
    this.setState({ gameOver: status });
  };

  render() {
    return (
      <>
        <ClassScoreBoard
          FishData={FishData}
          correctFish={this.state.correctFish}
          incorrectFish={this.state.incorrectFish}
        />
        {!this.state.gameOver && (
          <ClassGameBoard
            FishData={FishData}
            setFishCounts={(correct, incorrect) =>
              this.setFishCounts(correct, incorrect)
            }
            setGameOver={this.setGameOver}
          />
        )}
        {this.state.gameOver && (
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
