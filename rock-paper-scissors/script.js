
console.log("Howdy fellers");
//console.log(getComputerChoice());
//console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

counter = 5;
while (counter > 0){
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Scores: player has ${humanScore} and bot has ${computerScore}`);
    counter -=1;
}

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
}
function win(){
    humanScore +=1;
    console.log("player wins!");
}
function draw(){
    console.log("It's a draw! No points");
}

function playRound(humanChoice, computerChoice){
    console.log(`player:${humanChoice} Vs. bot:${computerChoice}`);
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