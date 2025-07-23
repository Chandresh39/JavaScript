let userScore = 0;
let compScore = 0;
const reset = document.querySelector('#reset');
const choices = document.querySelectorAll('.choice');

// select user choice
choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('data-choice');
        const compChoice = getComputerChoice();
        const result = determineWinner(userChoice, compChoice);
        
        reset.removeAttribute('hidden'); // Enable reset button 
        updates(result);
        displayResult(userChoice, compChoice);
        msgContainer(result);
    });
});

// get computer choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// get winner
function determineWinner(userChoice, compChoice) {
    if (userChoice === compChoice) {
        return;
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

// update score board and msg
function updates(result) {
    const msgContainer = document.querySelector('.msg-container');
    
    if (result === 'user') {
        userScore++;
        document.querySelector('#user-score').textContent = userScore;
        msgContainer.textContent = 'You win!';
        msgContainer.style.color = 'green';
    } else if (result === 'computer') {
        compScore++;
        document.querySelector('#comp-score').textContent = compScore;
        msgContainer.textContent = 'Computer wins!';
        msgContainer.style.color = 'red';
    } else {
        msgContainer.textContent = 'It\'s a draw!';
        msgContainer.style.color = 'black';
    }
}

// dispaly choice both sides
function displayResult(userChoice, compChoice) {
    const user = document.querySelector('#user-choice');
    const comp = document.querySelector('#comp-choice');

    user.textContent = `You chose: ${userChoice}`;
    comp.textContent = `Computer chose: ${compChoice}`;
}

// reset game
reset.addEventListener('click', () => {
    userScore = 0;
    compScore = 0;
    document.querySelector('#user-score').textContent = userScore;
    document.querySelector('#comp-score').textContent = compScore;
    document.querySelector('.msg-container').textContent = '';
    document.querySelector('#user-choice').textContent = '';
    document.querySelector('#comp-choice').textContent = '';
    reset.setAttribute('hidden',true); // Hide reset button 
});
