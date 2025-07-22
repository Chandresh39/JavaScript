let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('data-choice');
        const compChoice = getComputerChoice();
        const result = determineWinner(userChoice, compChoice);
        
        updateScores(result);
        displayResult(userChoice, compChoice);
        msgContainer(result);
    });
});

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(userChoice, compChoice) {
    if (userChoice === compChoice) {
        return 'draw';
    }
    if (
        (userChoice === 'rock' && compChoice === 'scissor') ||
        (userChoice === 'paper' && compChoice === 'rock') ||
        (userChoice === 'scissor' && compChoice === 'paper')
    ) {
        return 'user';
    }
    return 'computer';
}

function updateScores(result) {
    if (result === 'user') {
        userScore++;
        document.querySelector('#user-score').textContent = userScore;
    } else if (result === 'computer') {
        compScore++;
        document.querySelector('#comp-score').textContent = compScore;
    }
}

function displayResult(userChoice, compChoice) {
    const user = document.querySelector('#user-choice');
    const comp = document.querySelector('#comp-choice');

    user.textContent = `You chose: ${userChoice}`;
    comp.textContent = `Computer chose: ${compChoice}`;
}

function msgContainer(result) {
    const msgContainer = document.querySelector('.msg-container');
    if (result === 'user') {
        msgContainer.textContent = 'You win!';
    } else if (result === 'computer') {
        msgContainer.textContent = 'Computer wins!';
    } else {
        msgContainer.textContent = 'It\'s a draw!';
    }
}   