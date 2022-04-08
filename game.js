var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissor");

rock.addEventListener("click", (event) => {play("rock")});
paper.addEventListener("click", (event) => {play("paper")});
scissors.addEventListener("click", (event) => {play("scissors")});

function getRandomChoice() {
    let randNum = Math.floor(Math.random() * 3 + 1);
    switch (randNum) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}   

function play(userChoice) {
    var opponentChoice = getRandomChoice();
    if((userChoice == "rock" && opponentChoice == "scissors") || (userChoice == "scissors" && opponentChoice == "paper") || (userChoice == "paper" && opponentChoice == "rock")) {
        document.getElementById('result').innerHTML = "You win!";
    }
    else if(userChoice == opponentChoice) {
        document.getElementById('result').innerHTML = "It is a tie!";
    }
    else {
        document.getElementById('result').innerHTML = "You lost!";
    }
}