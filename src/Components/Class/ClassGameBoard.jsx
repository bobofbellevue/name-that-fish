import { Component } from "react";
import "./styles/game-board.css";

export class ClassGameBoard extends Component {
  state = {
    currentFishName: "",
  };

  onSubmitFish = (e) => {
    e.preventDefault();
    if (
      this.state.currentFishName ===
      this.props.fishes[this.props.correctFish + this.props.incorrectFish].name
    ) {
      this.props.setCorrectFish(this.props.correctFish + 1);
    } else {
      this.props.setIncorrectFish(this.props.incorrectFish + 1);
    }
    this.setState({ currentFishName: "" });
  };

  onChangeFishName = (e) => {
    this.setState({ currentFishName: e.target.value });
  };

  render() {
    return (
      <div id="game-board">
        <div id="fish-container">
          <img
            src={
              this.props.fishes[
                this.props.correctFish + this.props.incorrectFish
              ].url
            }
            alt={
              this.props.fishes[
                this.props.correctFish + this.props.incorrectFish
              ].name
            }
          />
        </div>
        <form id="fish-guess-form" onSubmit={this.onSubmitFish}>
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            name="fish-guess"
            value={this.state.currentFishName}
            onChange={this.onChangeFishName}
          />
          <input
            type="submit"
            disabled={this.state.currentFishName ? false : true}
          />
        </form>
      </div>
    );
  }
}
