
let compPick = {Value: ""};
let playerPick;
let compPickInt = 0;
let playerPickInt = 0;
const buttons = document.querySelectorAll('button');

let playerScore = 0;
let compScore = 0;

const player = document.querySelector("");
player.textContent = `Player score: ${playerScore}`;

const comp = document.querySelector("");
comp.textContent = `Computer Score: ${compScore}`;

const output = document.querySelector("");
output.textContent = "Good Luck Have Fun!";
// make the buttons work as picks for the user
buttons.forEach((button) => {button.addEventListener('click', ()=>{

    playerPick = button.id;
    if (playerPick == "rock"){
        playerPickInt = 0;
    }
    else if (playerPick == "paper"){
        playerPickInt = 1;
    }
    else if (playerPick == "scissors"){
        playerPickInt = 2;
    }
    compPickInt = getComputerPick(compPick);
    game();
    })
})
// random get the computers pick
function getComputerPick(compPick){
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0){
        choice.Value = "rock";
    }
    else if (choice == 1){
        choice.Value = "paper";
    }
    else if (choice == 2){
        choice.Value = "scissors"
    }
    return choice;
}

// how to play a round of rps
// rock = 0, paper = 1, scissors = 2

function playRound() {
    let win_array = [[0, 2, 1],
                    [1, 0, 2],
                    [2, 1, 0]];
    let result = win_array[playerPickInt][compPickInt];
    if (result == 0){
        output.textContent = `Tie game! You picked ${playerPick} and The Computer ${compPick}`;
    }
    else if (result == 1){
        output.textContent = `Winner Winner Chicken Dinner! You picked ${playerPick} and The Computer ${compPick}}`;
        playerScore++;
    }
    else if (result == 2){
        output.textContent = `LOSEEER! You picked ${playerPick} and The Computer ${compPick}`;
        compScore++;
    }
}

// declare winner after 5 wins

function game(){
    output.textContent = "Make your pick: Rock, Paper or Scissors";
    playRound();
    player.textContent = `Player score: ${playerScore}`;
    comp.textContent = `Computer Score: ${compScore}`;
    if (playerScore == 5){
        output.textContent = "Well done you are THE GOAT!";
        playerScore = 0;
        compScore =0;
        player.textContent = `Player score: ${playerScore}`;
        comp.textContent = `Computer Score: ${compScore}`;
    }
    else if (compScore == 5){
        output.textContent = "Oh no you got Rekt, Get lost! (or try again).";
        playerScore = 0;
        compScore = 0;
        player.textContent = `Player score: ${playerScore}`;
        comp.textContent = `Computer Score: ${compScore}`;
    }
}

