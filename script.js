//make function for computer choice
function getComputerChoice() {

//let the function choose between 0 and 3 random
  let randomCompChoice = Math.floor(Math.random() * 3) +1
//if picked 1 change to rock
    if (randomCompChoice === 1) {
      return "rock";
}   else if (randomCompChoice === 2) {
      return "paper";
}   else {
      return "scissor"
}
//if picked 2 change to paper
//if picked 3 change to scissor
//store choice in variable?
//return random choice
  return randomCompChoice();
}