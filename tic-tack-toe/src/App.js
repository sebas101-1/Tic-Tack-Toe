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
  let [squareValue, Setvalue] = useState(Array(9).fill(" "));
  // setWinner(() => calcWinner)
  function calcWinner() {
    tempList = squareValue.splice(0, 9);
    if (tempList[0] === tempList[1]&tempList[0] === tempList[3]){
      console.log("hi")
      return "jh"
      if (tempList[0] !== " ") {
        return tempList[0];
      }
      else{
        return "No One Has Won"
      }
    }
    return "No One Has Won";
  }
  // setWinner(calcWinner);
  function resetClick() {
    let replace = Array(9).fill(" ");
    Setvalue(replace);
  }
  function Click(i) {
    tempList = squareValue.splice(0, 9);

    if (tempList[i] === " ") {
      turn *= -1;
      if (turn > 0) {
        tempList[i] = "X";
      } else {
        tempList[i] = "O";
      }
      Setvalue(tempList);
      setWinner(calcWinner)
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
