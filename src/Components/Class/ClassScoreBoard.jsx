import { Component } from "react";
import "./styles/score-board.css";

export class ClassScoreBoard extends Component {
  render() {
    return (
      <div id="score-board">
        <div>Incorrect 🔻: {this.props.incorrectFish}</div>
        <div id="choices-left">
          {this.props.FishData.getUnansweredFish().map((fish) => (
            <div key={fish.name} className="choice">
              {fish.name}
            </div>
          ))}
        </div>
        <div>Correct ✅: {this.props.correctFish}</div>
      </div>
    );
  }
}
