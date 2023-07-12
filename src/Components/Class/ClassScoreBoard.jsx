import { Component } from "react";
import "./styles/score-board.css";

export class ClassScoreBoard extends Component {
  render() {
    let count = 0;
    return (
      <div id="score-board">
        <div>Incorrect 🔻: {this.props.incorrectFish}</div>
        <div id="choices-left">
          {this.props.fishes.map((fish) =>
            count++ >= this.props.correctFish + this.props.incorrectFish ? (
              <div key={fish.name} className="choice">
                {fish.name}
              </div>
            ) : (
              ""
            )
          )}
        </div>
        <div>Correct ✅: {this.props.correctFish}</div>
      </div>
    );
  }
}
