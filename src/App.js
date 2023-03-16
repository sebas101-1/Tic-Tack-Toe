import { useState } from "react";
let turn = -1;
let tempList;
function Square({ value, clickFunc }) {
  return (
    <button className="square" onClick={clickFunc}>
      {value}
    </button>
  );
}

function Reset({ Clicked }) {
  return (
    <button className="Reset" onClick={Clicked}>
      Reset
    </button>
  );
}
export default function Board() {
  let [winner, setWinner] = useState("No Winner");

  let [squareValue, Setvalue] = useState(Array(9).fill("G"));
  function calcWinner() {
    if (
      (squareValue[0] === squareValue[1]) &
      (squareValue[0] === squareValue[3])
    ) {
      if (squareValue[0] !== "G") {
        return squareValue[0];
      }
    }
    return "No One Has Won";
  }
  // setWinner(calcWinner);
  function resetClick() {
    let replace = Array(9).fill("G");
    Setvalue(replace);
  }
  function Click(i) {
    tempList = squareValue.splice(0, 9);
    setWinner(calcWinner);

    if (tempList[i] === "G") {
      turn *= -1;
      if (turn > 0) {
        tempList[i] = "X";
      } else {
        tempList[i] = "O";
      }
      Setvalue(tempList);
      console.log(tempList);
    }
  }
  return (
    <>
      <div className="Board">
        <div className="board-row">
          <Square
            value={squareValue[0]}
            clickFunc={() => Click(0)}
            className="topLeft"
          />
          <Square value={squareValue[1]} clickFunc={() => Click(1)} />
          <Square
            value={squareValue[2]}
            clickFunc={() => Click(2)}
            className="topRight"
          />
        </div>
        <div className="board-row">
          <Square value={squareValue[3]} clickFunc={() => Click(3)} />
          <Square value={squareValue[4]} clickFunc={() => Click(4)} />
          <Square value={squareValue[5]} clickFunc={() => Click(5)} />
        </div>
        <div className="board-row">
          <Square
            value={squareValue[6]}
            clickFunc={() => Click(6)}
            className="bottomLeft"
          />
          <Square value={squareValue[7]} clickFunc={() => Click(7)} />
          <Square
            value={squareValue[8]}
            clickFunc={() => Click(8)}
            className="bottomRight"
          />
          <p>{squareValue}</p>
          <p>{winner}</p>
          <Reset Clicked={resetClick} />
        </div>
      </div>
    </>
  );
}
