const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors']
    const computerChoice = Math.floor(Math.random() * choices.length);
    console.log(computerChoice);
    return choices[computerChoice];
}