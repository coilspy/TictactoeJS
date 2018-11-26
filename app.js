const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result");
const cell0_div = document.getElementById("0");
const cell1_div = document.getElementById("1");
const cell2_div = document.getElementById("2");
const cell3_div = document.getElementById("3");
const cell4_div = document.getElementById("4");
const cell5_div = document.getElementById("5");
const cell6_div = document.getElementById("6");
const cell7_div = document.getElementById("7");
const cell8_div = document.getElementById("8");
var cells = Array(cell0_div, cell1_div,cell2_div,cell3_div,cell4_div,cell5_div,cell6_div,cell7_div,cell8_div);
Object.seal(cells);
var cellValues = Array(0,0,0,0,0,0,0,0,0);
Object.seal(cellValues);
var gameEnded = false;
var playerMoved = false;



function checkCell(number){
    if(cellValues[number] === 0)
    {
        cells[number].style.color = "#64b3f4";
        cells[number].textContent = "X";
        cellValues[number] = 1;
        playerMoved = true;
    }
    else {
        console.log("cell is occupied");
    }
    
}


while(!gameEnded){
    while(!playerMoved){
    }
    playerMoved = false;
    computerMove();
    checkWinner();
}
function computerMove(){

}
function checkWinner(){

}