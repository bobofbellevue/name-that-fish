import "./styles/score-board.css";
//  Where the score is presented

export function FunctionalScoreBoard(props) {
  let count = 0;
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {props.incorrectFish}</div>
      <div id="choices-left">
        {props.fishes.map((fish) =>
          count++ >= props.correctFish + props.incorrectFish ? (
            <div key={fish.name} className="choice">
              {fish.name}
            </div>
          ) : (
            ""
          )
        )}
      </div>
      <div>Correct ✅: {props.correctFish}</div>
    </div>
  );
}
