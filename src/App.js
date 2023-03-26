import { useState } from "react";
let turn = 1;
let tempList;
let width = window.screen.width;
let margin = (width-425)/2;
let moon = "https://imgs.search.brave.com/_GqTsgaJS0F47BExZBXrtT7mgxLiRVFUkYETKQyahTQ/rs:fit:512:512:1/g:ce/aHR0cDovL3d3dy5l/bW9qaS5jby51ay9m/aWxlcy9waGFudG9t/LW9wZW4tZW1vamlz/L2FuaW1hbHMtbmF0/dXJlLXBoYW50b20v/MTI0OTYtZnVsbC1t/b29uLXN5bWJvbC5w/bmc";
let buttonMargin = (width-70)/2;
let sun = "https://imgs.search.brave.com/HFgqxgJ-iXg4pKp2qy9w5Gf21EvVq-5gRaUMlkGTJpk/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvc2ltcGxpY2l0/eS12ZWN0b3ItaWNv/bi1zZXQvNTEyL3N1/bi5wbmc";
function Square({ classSet, value, clickFunc }) {
  let setClass = classSet+"square"
  console.log(setClass)
  return (
    <button className={setClass+" square"} onClick={clickFunc}>
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
  let [buttonVal, setButton] = useState(moon);
  let[squareClass, setClass] = useState("dark ")
  let squareclassVal = String(squareClass);
  let[textVar,setText] = useState("white text")
  if(darkMode){
    document.body.style = 'background: white;';
  }
  else{
    document.body.style = 'background: black;';
  }
  function buttonClick(){
    setDarkMode(!darkMode);
    if(darkMode){
      setButton(moon);
      setClass("dark ")
      setText("white text")
    }
    else{
      setButton(sun);
      setClass("light ")
      setText("black text")
    }
  }
  function calcWinner(boardLisy) {
    let winComb = checkVal(boardLisy);
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
    if(winner !== "X has Won!!!"|winner !== "O has Won!!!")
      if (tempList[i] === " ") {
        turn *= -1;
        if (turn > 0) {
          tempList[i] = "X";
        } else {
          tempList[i] = "O";
        }
        Setvalue(tempList);

      }
    setWinner(()=>calcWinner(tempList))
  }
  return (
    <>
    <div>
      <p className={textVar}>Tick Tack Toes</p> <button class="darkMode" onClick={buttonClick} style={{marginLeft: buttonMargin}}> <img alt="dark/light mode"src={buttonVal}/> </button>
    </div>
    <hr />
      <div className="Board" style={{marginLeft: margin}}>
        <div className="board-row">
          <Square
            value={squareValue[0]}
            clickFunc={() => Click(0)}
            classSet={squareclassVal}
          />
          <Square classSet={squareclassVal} value={squareValue[1]} clickFunc={() => Click(1)} />
          <Square
            value={squareValue[2]}
            clickFunc={() => Click(2)}
            classSet={squareclassVal}
            
          />
        </div>
        <div className="board-row">
          <Square value={squareValue[3]} classSet={squareclassVal} clickFunc={() => Click(3)}  />
          <Square value={squareValue[4]} classSet={squareclassVal} clickFunc={() => Click(4)}  />
          <Square value={squareValue[5]} classSet={squareclassVal} clickFunc={() => Click(5)}  />
        </div>
        <div className="board-row">
          <Square
            value={squareValue[6]}
            clickFunc={() => Click(6)}
            classSet={squareclassVal}
            
          />
          <Square value={squareValue[7]} clickFunc={() => Click(7)} classSet={squareclassVal}  />
          <Square
            value={squareValue[8]}
            clickFunc={() => Click(8)}
            classSet={squareclassVal}
            
          />
        </div>
      </div>
      <p className={textVar}>{squareValue}</p>
      <p className={textVar}>{winner}</p>
      <Reset Clicked={resetClick} /> 
    </>
  );
}
