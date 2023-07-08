import { Component } from "react";
import "./styles/game-board.css";

export class ClassGameBoard extends Component {
  state = {
    name: "",
    url: this.props.FishData.getNextFish()?.url,
  };

  onSubmitFish = (e) => {
    e.preventDefault();
    this.props.FishData.makeFishGuess(this.state.name);
    const nextFish = this.props.FishData.getNextFish();
    this.setState({ name: "", url: nextFish?.url });
    this.props.setFishCounts(
      this.props.FishData.getCorrectFishCount(),
      this.props.FishData.getIncorrectFishCount()
    );
    this.props.setGameOver(nextFish === undefined);
  };

  onChangeFishName = (e) => {
    this.setState((previousState) => {
      return { ...previousState, name: e.target.value };
    });
  };

  render() {
    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={this.state.url} alt={this.state.name} />
        </div>
        <form id="fish-guess-form" onSubmit={this.onSubmitFish}>
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            name="fish-guess"
            value={this.state.name}
            onChange={this.onChangeFishName}
          />
          <input type="submit" disabled={this.state.name ? false : true} />
        </form>
      </div>
    );
  }
}
