import {steps, results} from './objects.js';

let userAnswers = [];
const cards = document.querySelectorAll('.card');
const h2elements = document.querySelectorAll('h2');
const restartBtn = document.getElementById('restart-btn');
const resultElement = document.getElementById('result-container')
const startButton = document.getElementById("start-button");

let nextCard = 0
let score = 0;
let result = 0;

// Store event listeners
let eventListeners = [];

function init(){    
    for(let i=1; i<cards.length ; i++){        
        cards[i].style.display = 'none';
        h2elements[i].style.display = 'none';
    } 
    restartBtn.classList.toggle('hidden');    
    startQuiz(0);
}
function startQuiz(currentIndex) {
    console.log(`start quiz current index is:  ${currentIndex}`);
    if (currentIndex < cards.length) {
     attachEventListener(currentIndex);
    } 
    else
    {
        console.log(`user answers ${userAnswers }`);
        
        score = calculatescore(userAnswers);
        result = interpretResult(score);
        console.log("Quiz complete!");
        console.log(`user result: ${result.description} `);
        const img = document.createElement('img');
        img.src = result.image;
        img.alt = 'Description of the image';
        img.id = 'result-img';
        resultElement.appendChild(img);
        restartBtn.classList.toggle('hidden'); 
        restartBtn.addEventListener('click', restartGame);       
    }

}
function toggleDisplay(currentIndex, nextCard){
    cards[currentIndex].style.display = 'none';
    h2elements[currentIndex].style.display = 'none'
    if (cards[nextCard] !== null && cards[nextCard] !== undefined ) {
        cards[nextCard].style.display = 'flex' ;  
        h2elements[nextCard].style.display = 'block'; 
    }   
}

 function attachEventListener(currentIndex){
    let currentCardId = `step-${currentIndex}`;
    const currentButtons = document.querySelectorAll(`#${currentCardId} button`);

    currentButtons.forEach((button, choiceIndex) => {
        const handler = () => {
            // userAnswers.push(steps[currentIndex].choices[choiceIndex].score);
            userAnswers.push(Math.floor(Math.random() * 10) + 1);
            nextCard = currentIndex + 1;
            toggleDisplay(currentIndex, nextCard); 
            startQuiz(nextCard); 
        };
        button.addEventListener('click', handler);

        // Store the listener for future removal
        eventListeners.push({ button, handler });
    
    });
}
function calculatescore(userAnswers) {
    let score = 0;
    userAnswers.forEach(answer => {
    score = score + parseInt(answer);
    });
    return score;
}

function interpretResult(score) {
    let resultIndex;

    switch (true) {
        case (score <= 5):
            resultIndex = 0; // Sea Otter
            break;
        case (score <= 10):
            resultIndex = 1; // Honey Bee
            break;
        case (score <= 15):
            resultIndex = 2; // Whooping Crane
            break;
        case (score <= 20):
            resultIndex = 3; // Pangolin
            break;
        case (score <= 25):
            resultIndex = 4; // Red-Capped Manakin
            break;
        case (score <= 30):
            resultIndex = 5; // Woolly Mammoth
            break;
        case (score <= 35):
            resultIndex = 6; // Cuttlefish
            break;
        case (score <= 40):
            resultIndex = 7; // Komodo Dragon
            break;
        case (score <= 45):
            resultIndex = 8; // Mantis Shrimp
            break;
        case (score <= 50):
            resultIndex = 9; // Honey Badger
            break;
        default:
            resultIndex = 0; // Fallback to Sea Otter
    }

    return results[resultIndex];
}
function restartGame(){
    // Remove all event listeners
    eventListeners.forEach(({ button, handler }) => {
        button.removeEventListener('click', handler);
    });
    eventListeners = []; // Clear the list of listeners
    userAnswers = [];
    score = 0
    result = 0
    // Reset the display and other elements
    cards[0].style.display = 'flex';
    h2elements[0].style.display = 'block'
    const existingImg = document.getElementById('result-img');
    if (existingImg) {
        console.log('remove img');        
        existingImg.remove();
    }
    init();
}

function startGame() {
    const username = document.getElementById("username").value;
    if (username) {
        document.getElementById("greeting").style.display = "block";
        document.getElementById("greeting").querySelector("#greeting h2").textContent = `Hello, ${username}! Let's start the game.`;
        document.querySelector(".welcome-container").style.display = "none"; // Hide the input section after greeting
        
        init(); // Start the quiz after displaying the greeting
    } else {
        alert("Please enter your name to start the game.");
    }
}


init();

//start the game
//the first card is displayed => attache eventlistener to buttons of card 
//handle user click
//every time that a new card display , we attache eventlisteners on his buttons
//after every click we increment currentcard index and save the users'choice and toggle the display od current card and we reattache the the eventlistener 
// to the new card's buttons


