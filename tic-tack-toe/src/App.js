import { useState } from "react";
let turn = 1;
let tempList;
let width = window.screen.width;
let margin = (width-360)/2;
let moon = "https://imgs.search.brave.com/Nro8uRsfvKpr25OxdvHc0Gr8xliCpSdglA9w1yjJtpA/rs:fit:980:980:1/g:ce/aHR0cHM6Ly9jZG4u/b25saW5ld2ViZm9u/dHMuY29tL3N2Zy9p/bWdfNTk3OC5wbmc";
let sun = "https://imgs.search.brave.com/6TS-AurMypeRMvUbwkns9XrqGV8dVW450I03cilJqWc/rs:fit:600:600:1/g:ce/aHR0cDovL3d3dy5j/bGlwYXJ0YmVzdC5j/b20vY2xpcGFydHMv/TTlULzRway9NOVQ0/cGthaUUucG5n";
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
function checkVal(board){
  if(board[0] === board[1]&board[0] === board[2]){
    if(board[0] !==" "){
      return [true,0]
    }
  }
  if(board[3] === board[4]&board[3] === board[5]){
    if(board[3] !==" "){
      return [true,3]
    }
  }
  if(board[6] === board[7]&board[6] === board[8]){
    if(board[6] !==" "){
      return [true,6]
    }
  }
  if(board[0] === board[3]&board[0] === board[6]){
    if(board[0] !==" "){
      return [true,0]
    }
  }
  if(board[1] === board[4]&board[4] === board[7]){
    if(board[1] !==" "){
      return [true,1]
    }
  }
  if(board[2] === board[5]&board[5] === board[8]){
    if(board[2] !==" "){
      return [true,2]
    }
  }
  if(board[0] === board[4]&board[4] === board[8]){
    if(board[4] !==" "){
      return [true,4]
    }
  }
  if(board[2] === board[4]&board[4] === board[6]){
    if(board[6] !==" "){
      return [true,6]
    }
  }
  return false
}
export default function Board() {
  let [winner, setWinner] = useState("This Could Be Anyone's Game");
  let [squareValue, Setvalue] = useState(Array(9).fill(" "));
  let [darkMode, setDarkMode] = useState(false);
  let [buttonVal, setButton] = useState(sun);

  function darkButton(){
    return <button class="darkMode" onClick={buttonClick}><img alt="dark/light mode"src={buttonVal}/></button>
  }
  function buttonClick(){
    setDarkMode(!darkMode);
    if(darkMode){
      setButton(moon);
    }
  }
  function calcWinner(boardLisy) {
    let winComb = checkVal(boardLisy);
    console.log(winComb)
    console.log(boardLisy[0])
    if (winComb[0]){
      if (boardLisy[winComb[1]] !== " ") {
        return boardLisy[winComb[1]]+" Has Won!!!";
      }
    }
    for(let i = 0; i<boardLisy.length;i++){
      if(boardLisy[i]===" "){
        return "This Could Be Anyone's Game";
      }
    }
    return "Cat!!!";
  }
  // setWinner(calcWinner);
  function resetClick() {
    let replace = Array(9).fill(" ");
    setWinner("This Could Be Anyone's Game")
    Setvalue(replace);
    turn = 1;
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

    }
    console.log(tempList)
    setWinner(()=>calcWinner(tempList))
  }
  return (
    <>
      <div className="Board" style={{marginLeft: margin}}>
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
        </div>
      </div>
      <p class="text">{squareValue}</p>
      <p class="text">hi {winner}</p>
      <Reset Clicked={resetClick} /> 
      <darkButton/>
    </>
  );
}
