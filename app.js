import {steps, results} from './objects.js';

const userAnswers = [];
const cards = document.querySelectorAll('.card');
let nextCard = 0

function init(){
    for(let i=1; i<cards.length ; i++){        
        cards[i].style.display = 'none';
    } 
    startQuiz(0);
}
function startQuiz(currentIndex) {
    console.log(`start quiz current index is:  ${currentIndex}`);
    console.log(`cards.length ${cards.length}`);
    if (currentIndex < cards.length) {
     attachEventListener(currentIndex);
    } 
    else
    {
        const score = calculatescore(userAnswers);
        const result = interpretResult(score);
        console.log("Quiz complete!");
        console.log(`user result: ${result.description} `);
        const img = document.createElement('img');
        img.src = result.image;
        img.alt = 'Description of the image';
        img.width = 500; 

        // Append the image to a specific element in the DOM
        document.getElementById('result-container').appendChild(img);


        
    }

}
function toggleDisplay(currentIndex, nextCard){
    cards[currentIndex].style.display = 'none';
    if (cards[nextCard] !== null && cards[nextCard] !== undefined ) {
        cards[nextCard].style.display = 'block' ;   
    }   
}

 function attachEventListener(currentIndex){
    let currentCardId = `step-${currentIndex}`;
    const currentButtons = document.querySelectorAll(`#${currentCardId} button`);

    currentButtons.forEach((button, choiceIndex) => {
        button.addEventListener('click', () => {
            console.log(`user choosed ${button.textContent} with index ${choiceIndex}`);
             console.log(steps[currentIndex].choices[choiceIndex].score);
            
            userAnswers.push(steps[currentIndex].choices[choiceIndex].score);
                nextCard = currentIndex + 1;
                toggleDisplay(currentIndex, nextCard); 
                startQuiz(nextCard); 
        });
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

init();

//start the game
//the first card is displayed => attache eventlistener to buttons of card 
//handle user click
//every time that a new card display , we attache eventlisteners on his buttons
//after every click we increment currentcard index and save the users'choice and toggle the display od current card and we reattache the the eventlistener 
// to the new card's buttons


