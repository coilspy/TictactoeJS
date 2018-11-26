var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result");
const action_div = document.getElementById("action-message");
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
var playerMoves = 0;
var computerMoves = 0;


function checkCell(number){
    if(cellValues[number] === 0)
    {
        playerMoves++;
        cells[number].style.color = "#64b3f4";
        cells[number].textContent = "X";
        cellValues[number] = 1;
        playerMoved = true;
        if(checkWinner(1)){
            userScore++;
            result_div.innerHTML = "User wins!";
            userScore_span.textContent = userScore;
            resetGrid();
        }
        if(playerMoves === 5){    
            resetGrid();
            result_div.innerHTML = "Draw!";
            return;
        }
        let computerChoice = Math.floor(Math.random() * 10);
        while(cellValues[computerChoice] !== 0)
        {
            computerChoice = Math.floor(Math.random() * 10);
        }
        computerMoves++;
        cells[computerChoice].style.color = "#E2584D";
        cellValues[computerChoice] = 2;
        cells[computerChoice].textContent = "O";
        if(checkWinner(2)){
            computerScore++;
            result_div.innerHTML = "Computer wins!";
            computerScore_span.textContent = computerScore;
            resetGrid();
        }
        if(computerMoves === 5){  
 
            resetGrid();
            result_div.innerHTML = "Draw!";
            return;
        }
    }
    else {
        console.log("cell is occupied");
    }   
}





function resetGrid(){
    computerMoves = 0; 
    playerMoves = 0; 
    cells.forEach(element => {element.textContent = "";});
            cellValues = Array(0,0,0,0,0,0,0,0,0);
            Object.seal(cellValues);
}
function checkWinner(cellvalue){
    if((cellValues[0] === cellvalue &&cellValues[1] === cellvalue &&cellValues[2] === cellvalue) ||
    (cellValues[3] === cellvalue &&cellValues[4] === cellvalue &&cellValues[5] === cellvalue) || (cellValues[6] === cellvalue &&cellValues[7] === cellvalue &&cellValues[8] === cellvalue)
    || (cellValues[0] === cellvalue &&cellValues[4] === cellvalue &&cellValues[8] === cellvalue) || (cellValues[2] === cellvalue &&cellValues[4] === cellvalue &&cellValues[6] === cellvalue) ||
    (cellValues[0] === cellvalue &&cellValues[3] === cellvalue &&cellValues[6] === cellvalue) || (cellValues[1] === cellvalue &&cellValues[4] === cellvalue &&cellValues[7] === cellvalue) || 
    (cellValues[2] === cellvalue &&cellValues[5] === cellvalue &&cellValues[8] === cellvalue)){
        return true;
    }
    else {return false;}
}