import "./styles/score-board.css";
//  Where the score is presented

export function FunctionalScoreBoard(props) {
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {props.incorrectFish}</div>
      <div id="choices-left">
        {props.FishData.getUnansweredFish().map((fish) => (
          <div key={fish.name} className="choice">
            {fish.name}
          </div>
        ))}
      </div>
      <div>Correct ✅: {props.correctFish}</div>
    </div>
  );
}
