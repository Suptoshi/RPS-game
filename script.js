const totalScore = { computerScore: 0, playerScore: 0 }


const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomComputer = Math.floor(Math.random() * choices.length);
    return choices[randomComputer];
}

// human wins score is 1
// otherwise human loses
// return score
const getResult = (playerChoice, computerChoice) => {
    let score;

    if (playerChoice == computerChoice) {
        score = 0

    } else if (playerChoice == 'rock' && computerChoice == 'scissors') {
        score = 1
    } else if (playerChoice == 'paper' && computerChoice == 'rock') {
        score = 1
    } else if (playerChoice == 'scissors' && computerChoice == 'paper') {
        score = 1

    } else {
        score = -1
    }

    return score
}


// updates winning score based on choice & displays total score
const showResult = (score, playerChoice, computerChoice) => {
    const resultDiv = document.getElementById('result')
    const handsDiv = document.getElementById('hands')
    const playerScoreDiv = document.getElementById('player-score')

    if (score == -1) {
        resultDiv.innerText = 'You Lose!';
    } else if (score == 1) {
        resultDiv.innerText = 'You win!';
    } else {
        resultDiv.innerText = "It's a Draw!";
    }

    handsDiv.innerText = `🧑 ${playerChoice} vs 🤖 ${computerChoice}`
    playerScoreDiv.innerText = totalScore['playerScore']
}

// calculates who won and displays on screen
const onClickRPS = (playerChoice) => {
    const computerChoice = getComputerChoice()
    const score = getResult(playerChoice, computerChoice)
    totalScore['playerScore'] += score
    showResult(score, playerChoice, computerChoice)
}


// selects all RPS buttons
// loops through buttons
// calls the onClickRPS function everytime player clicks
// end game button calls clearScores Function
const playGame = () => {
    const rpsButtons = document.querySelectorAll('.rpsButton')
    rpsButtons.onclick = () => rpsButtons.value
    rpsButtons.forEach(rpsButton => {
        rpsButton.onclick = () => onClickRPS(rpsButton.value)
    })

    const endGameButton = document.getElementById('endGameButton')
    endGameButton.onclick = () => clearScores()
}


// Ends the game and clears the scores
// calls global totalScore ojbect and updates user score to 0
// grabs ID's
// displays all score text to 0
const clearScores = () => {
    totalScore['playerScore'] = 0
    totalScore['computerScore'] = 0

    const resultDiv = document.getElementById('result')
    const handsDiv = document.getElementById('hands')
    const playerScoreDiv = document.getElementById('player-score')

    resultDiv.innerText = ''
    handsDiv.innerText = ''
    playerScoreDiv.innerText = ''
}

playGame()