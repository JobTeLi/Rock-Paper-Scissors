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
        return `You win ${playerSelection} beats ${computerSelection}`
    }
    else {
        return `You lose ${computerSelection} beats ${playerSelection}`
    }
}

function getPlayerChoice(){
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
}

function game() {
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

}
game();


