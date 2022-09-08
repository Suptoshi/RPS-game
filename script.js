const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors']
    const computerChoice = Math.floor(Math.random() * choices.length);
    console.log(computerChoice);
    return choices[computerChoice];
}


const getResult = (playerChoice, computerChoice) => {
    let score;

    if (playerChoice == computerChoice) {
        score = 0;
        // human wins score is 1
    } else if (playerChoice == 'rock' && computerChoice == 'scissors') {
        score = 1
    } else if (playerChoice == 'paper' && computerChoice == 'rock') {
        score = 1
    } else if (playerChoice == 'scissors' && computerChoice == 'paper') {
        score = 1
        // otherwise human loses
    } else {
        score = -1;
    }
    //return score
    return score;
}


const showResult = (score, playerChoice, computerChoice) => {

}


//calculates who won and displays on screen
const onClickRPS = (playerChoice) => {
    const computerChoice = getComputerChoice()
    const score = getResult(playerChoice, computerChoice)
    totalScore['playerScore'] += score
    showResult(score, playerChoice, computerChoice)
}


// selects all RPS buttons
// loops through buttons
// calls the onClickRPS function everytime player clicks

const playGame = () => {
    const rpsButtons = document.querySelectorAll('.rpsButton')
    rpsButtons.onclick = () => rpsButtons.value
    rpsButtons.forEach(rpsButton => {
        rpsButton.onclick = () => onClickRPS(rpsButton.value)
    })
}

playGame()

