import { Component } from "react";

export class ClassFinalScore extends Component {
  render() {
    return (
      <div id="final-score">
        <h1>Your Final Score Was</h1>
        <div id="score">
          <p>{this.props.correctFish}</p>
          <hr />
          <p>{this.props.correctFish + this.props.incorrectFish}</p>
        </div>
      </div>
    );
  }
}
