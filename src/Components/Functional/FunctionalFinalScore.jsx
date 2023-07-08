import "./styles/final-score.css";

export const FunctionalFinalScore = (props) => (
  <div id="final-score">
    <h1>Your Final Score Was</h1>
    <div id="score">
      <p>{props.correctFish}</p>
      <hr />
      <p>{props.correctFish + props.incorrectFish}</p>
    </div>
  </div>
);
