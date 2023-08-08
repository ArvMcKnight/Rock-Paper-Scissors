let choices = ["✊🏻", "🖐🏻", "✌🏻"];

function computerChoice() {
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function play(playerChoice) {
    let computer = computerChoice();
    let result = determineWinner(playerChoice, computer);
    displayResult(result, playerChoice, computer);
}

function determineWinner(player, computer) {
    if (player === computer) {
        return "It's a tie!";
    } else if (
        (player === "✊🏻" && computer === "✌🏻") ||
        (player === "✌🏻" && computer === "🖐🏻") ||
        (player === "🖐🏻" && computer === "✊🏻")
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

function displayResult(result, playerChoice, computerChoice) {
    let resultElement = document.getElementById("result");
    resultElement.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`;
}

document.addEventListener("DOMContentLoaded", function () {
    let choiceButtons = document.querySelectorAll(".choice");
    
    choiceButtons.forEach((button) => {
        button.addEventListener("click", function () {
            let playerChoice = button.id;
            play(playerChoice);
        });
    });
});