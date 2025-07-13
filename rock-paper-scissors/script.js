
console.log("Howdy fellers");
//console.log(getComputerChoice());
//console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;
let scoreChange = new CustomEvent("scoreChange");
let noWinner = true;

/*
counter = 5;
while (counter > 0){
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Scores: player has ${humanScore} and bot has ${computerScore}`);
    counter -=1;
}
*/

function getComputerChoice(){
    let num = Math.floor(Math.random()*3);
    let comChoice = null;
    switch (num){
        case 0:
            comChoice = "SCISSORS";
            break;
        case 1:
            comChoice = "ROCK";
            break;
        case 2:
            comChoice = "PAPER";
            break;
        default:
            console.error("Choice num out of range");
    }
    return comChoice;
}

function getHumanChoice(){
    return prompt("Your choice?").toUpperCase();
}

function loss(){
    computerScore += 1;
    console.log("'puter wins!");
    gameLog.dispatchEvent(scoreChange);
}
function win(){
    humanScore +=1;
    console.log("player wins!");
    gameLog.dispatchEvent(scoreChange);
}
function draw(){
    console.log("It's a draw! No points");
    gameLog.dispatchEvent(scoreChange);
}
function updateScores(){
    var scores = `player:${humanScore} Vs. robot:${computerScore}`;
    const li = document.createElement("li");
    li.textContent = scores;
    console.log(li);
    if(humanScore == 5){
        li.textContent = "Player won!"
        li.classList.add("winning-text");
        noWinner = false;
    }
    else if(computerScore==5){
        li.textContent = "robot won!"
        li.classList.add("winning-text");
        noWinner = false;
    }
    gameLog.prepend(li);
}

function playRound(humanChoice, computerChoice){
    if(!noWinner){
        console.log("Winner already, exit early");
        return;
    }
    gameStateString = `player:${humanChoice} Vs. bot:${computerChoice}`;
    console.log(gameStateString);
    gameState.textContent = gameStateString;

    if(humanChoice === computerChoice){
        draw();
        return;
    }
    switch(humanChoice){
        case "SCISSORS":
            switch(computerChoice){
                case "ROCK":
                    loss();
                    break;
                case "PAPER":
                    win();
                    break;
            }
            break;
        case "ROCK":
            switch(computerChoice){
                case "PAPER":
                    loss();
                    break;
                case "SCISSORS":
                    win();
                    break;
            }
            break;
        case "PAPER":
            switch(computerChoice){
                case "SCISSORS":
                    loss();
                    break;
                case "ROCK":
                    win();
                    break;
            }
            break;
    }

}

const rockBtn = document.querySelector("button.rock");
rockBtn.addEventListener("click", () => playRound("ROCK", getComputerChoice()));

const paperBtn = document.querySelector("button.paper");
paperBtn.addEventListener("click", () => playRound("PAPER", getComputerChoice()));

const scissorsBtn = document.querySelector("button.scissors");
scissorsBtn.addEventListener("click", () => playRound("SCISSORS", getComputerChoice()));

const gameState = document.querySelector("div.gameState");

const gameLog = document.querySelector("ul.gameLog");
gameLog.addEventListener("scoreChange", () => this.textContent = updateScores());
