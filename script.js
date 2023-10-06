//make function for computer choice
function getComputerChoice() {

//let the function choose between 0 and 3 random
  let randomCompChoice = Math.floor(Math.random() * 3) +1
//if picked 1 change to rock
    if (randomCompChoice === 1) {
      return "rock";
//if picked 2 change to paper      
}   else if (randomCompChoice === 2) {
      return "paper";
//if picked 3 change to scissor      
}   else {
      return "scissor"
}
//store pick in variable


//return random choice
  return randomCompChoice();
}

function playRound(playerSelection, computerSelection) {
//if the player picks the same as computer draw
  if (playerSelection.toLowerCase() === computerSelection) {
    return "No winner it's a draw!";
  }
//if the player picks rock and computer paper computer wins
  if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
    return "Congrats to the computer paper beats rock!";
  }
//if the player picks rock and computer scissor player wins
  if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissor") {
    return "Congrats to the player rock beats scissor";
  } 
//if the player picks paper and computer rock player wins
  if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
    return "Congrats to the player paper beats rock!";
  }
//if the player picks paper and computer scissor computer wins
  if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissor") {
    return "Congrats to the computer scissor beats paper!";
  }
//if the player picks scissor and computer rock computer wins
  if (playerSelection.toLowerCase() === "scissor" && computerSelection === "rock") {
    return "Congrats to the computer rock beats scissor!";
  }
//if the player picks scissor and computer paper player wins
  if (playerSelection.toLowerCase() === "scissor" && computerSelection === "paper") {
    return "Congrats to the player scissor beats paper!";
  }
//make sure toLowerCase everything

}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection));
