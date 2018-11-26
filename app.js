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

var cellValues = Array(0,0,0,0,0,0,0,0,0);
Object.seal(cellValues);

cell0_div.addEventListener("click", checkCell(0));


function checkCell(){
    let number = arguments[0];
    var cell = this;
    
}
