const options = ["rock", "paper", "scissors"];

function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)] 
    return choice;
    
} 

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie";
    }
    else if (
            (playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return "Player";
    }
    else {
        return "Computer";
    }
        
}

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result === "Tie") {
        return "It's a Tie!";
    }
    else if (result === "Player") {
        return "You win!"
    }
    else if (result === "Computer") {
        return "You lose!"
    }
}

/*function getPlayerChoice(){
    let validatedInput = false;
    while(validatedInput == false) {
        const choice = prompt("Rock Paper Scissors");
        if(choice == null) {
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)) {
            validatedInput = true;
            return choiceInLower;
        }
        
    }
}*/
const results = document.querySelector(".result-round");
const buttons = document.querySelectorAll('button');
const player_Score = document.querySelector('#player-score');
const computer_Score = document.querySelector('#computer-score');
const Winner = document.querySelector('#Winner');

const score = document.querySelector('.display-result');


let computerScore = 0;
let playerScore = 0;
buttons.forEach((button) =>{
    button.addEventListener('click', () => {
        let result_round = document.createElement("li");
        result_round.className = 'temp_result';

        result_round.textContent = playRound(button.id,getComputerChoice())
        results.appendChild(result_round);

        if(result_round.textContent === "You win!"){
            playerScore++;
        }
        else{
            if(result_round.textContent === "You lose!"){
                computerScore++;
            }
        }
        if(computerScore === 5){
            Winner.textContent = "Computer!";
            buttons.forEach((button) => button.disabled = true);
        }
        else{
            if(playerScore === 5){
                Winner.textContent = "Player!";
                buttons.forEach((button) => button.disabled = true);
            }
        }
        player_Score.textContent = playerScore;
        computer_Score.textContent = computerScore;
        
        
    });
});



/*function game() {
    let playerScore = 0;
    let computerScore = 0;
    console.log("Lets play a game of Rock Paper Scissors!");
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("----------------");
        if(checkWinner(playerSelection, computerSelection) === "Player") {
            playerScore++;
        }
        else if (checkWinner(playerSelection, computerSelection) === "Computer") {
            computerScore++;
        }
        else if (checkWinner(playerSelection, computerSelection) === "Tie") {
            computerScore++;
            playerScore++;
        }

    }
    console.log("Game Over!");
    if(playerScore > computerScore) {
        console.log("Player was the winner");
    }
    else if(playerScore < computerScore){
        console.log("Computer was the winner");
    }
    else if(playerScore === computerScore){
        console.log("Its a tie");
    }

}*/
//game();


