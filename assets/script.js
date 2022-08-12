// I need a start button
// description of app: welcome to my quiz, this is how it works;
// i need an event listener on start button -- click
// when you click the start button, the landing page disappears and first question and answers appears AND timer appears and starts counting down
// need a timer that countdown
// i need a set of questions an array of objects
// Question text -- string
// Set of answers -- array of strings
// some way to check whether the amswer is correct -- give the string OR the index of the correct answer
// ! SOme way to track the answer the user selected is the correct answer 
// ! does not need to be with the other question info
// Need a way to display the questiion text, answers, and the answers need to be clickable
// When you click an answer
// Compares the answer you chose to the correct answer
// Displays some kind of feedback based on whether the selected answer is correct or incorrect
// if the answer is incorrect, time is subtracted from the clock 
// ! make a variable change itself
// Regardless whether the answer is incorrect, time is subtracted from the clock
// if the user is on the last questiom, once they select an answer, theyre presented with a ! form ! to enter their initials
// intitials amd remaining time is saved in local storage as teh score

// WORK IN PROGRESS 



//         First thing user sees is start button
//     addEventListener - function

// opens with a question and 4 answers, tells you if youre correct, start timer
//  querySelector A LOT innerHTML, textContext

// moves on to the next question
// if statement to determine if correct/incorrect


// timer rans out or last question answered
// setInterval, 

// show them their score and put in their initials to save their score STRETCH


//  ? what type of of animals started appearing during this prehistoric era
// ! birds 
// reptiles, insects, sharks

// ? how long did the jurassic era last?
// ! 56 million years
// 100 million years 
// 10 million years
// 76 million years

// ? what popular movie was made inspired by the beauty of the Jurassic era?
// ! Jurassic Park
// Jurassic City
// Jurassic Shark
// Triassic Park

// ? Due to warmer climates there was no _____ on Earth.
// ! ice
// santa claus
// ice cream
// polar bears

// ? most of the climate on earth was ______>
// ! tropical
// desert
// cool and dry
// there was no climate

//     test[1].favorite
//     var test = [{
//         favorite: "burrito",
//         toppings: [
//             {}
//         ]
//     },
//     {
//         favorite: "taco",
//         toppings: [
//             {}
//         ]
//     },
// ]



const questionIndex = [
    {
        question: 'what type of of animals started appearing during this prehistoric era',
        answersArray: [
            { answer: 'reptiles', correct: false },
            { answer: 'birds', correct: true },
            { answer: 'insects', correct: false },
            { answer: 'sharks', correct: false }]
    },


    {
        question: 'How long did the Jurassic era last?',
        answersArray: [
            { answer: '100 million years', correct: false },
            { answer: '10 million years', correct: false },
            { answer: '56 million years', correct: true },
            { answer: '76 million years', correct: false }]
    },
    {
        question: 'what popular movie was made inspired by the beauty of the Jurassic era?',
        answersArray: [
            { answer: "Jurassic Park", correct: true },
            { answer: "Jurassic Shark", correct: false },
            { answer: "Jurassic City", correct: false },
            { answer: "Triassic Venue", correct: false }]
    },

    {
        question: 'Due to warmer climates there was no _____ on Earth.',
        answersArray: [
            { answer: 'crabs', correct: false },
            { answer: 'mcdonalds', correct: false },
            { answer: 'ice', correct: true },
            { answer: 'polar bears', correct: false }]

    },
    {
        question: 'Most of the climate on Earth was _____________?',
        answersArray: [
            { answer: 'desert', correct: false },
            { answer: 'tropical', correct: true },
            { answer: 'arctic', correct: false },
            { answer: 'there was no climate', correct: false }
        ]
    },
]



var timeClock = 60;
var timeCountdown = "";
var changeQuestion = 0;
var finalScore;
var currentScore = 0;



const startButton = document.getElementById("#start");
const nextButton = document.getElementById("next-btn");
var timerElement = document.getElementById('timer');
var questionContainerElement = document.getElementById('#questionContainer')
var questionElement = document.getElementById('question');
var answerButtonsElement = document.getElementsByClassName('btn');
var finalScoreElement = document.getElementById('finalScore');
var buttonDiv = document.querySelector('.buttonDiv')
var initialsElement = document.getElementById('');

// var questionRandomizer = questionRandom();
var shuffledQuestions, currentQuestion;


// init 
//  onclick in html code
function gameStart(event) {
    setInterval(function () {
        // timer starts but probably doesnt end
        console.log(timeClock);
        timeClock--;
        document.getElementById("timer").textContent = timeClock;
        // shuffledQuestions = questionIndex.sort(() => Math.random() - .5)
        // currentQuestionIndex = 0;
        nextQuestion();

    }, 1000)
}
//     function questionRandom() {
//         let questionRandomizerClone = questionBank;
//         for (let i = 0; i < questionRandomizerClone.length; i++) {

//             let answersArray = questionRandomizerClone[i].answersArray;
//             answersArray.sort(() => {
//                 return (Math.floor(Math.random() *3) - 1);}
//             );
//             }

//     }


// questionRandomizerClone = questionRandomizerClone.sort(() => {
//     return (Math.floor(Math.random() *3) - 1);
// });
//     return questionRandomizerClone;


function nextQuestion() {
    resetGame()
    showQuestion(questionIndex[changeQuestion]) 
    
}


function showQuestion(question) {
    questionElement.innerText = question.question
    buttonDiv.innerHTML = "";
    question.answersArray.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.answer
        button.setAttribute("onClick", `handleAnswerClick(${answer.correct})`)
        button.classList.add('btn')
        // if (answer.correct) {
        //     button.dataset.correct = answer.correct
        // }
        button.addEventListener('click', selectAnswer)
            buttonDiv.appendChild(button)
    })
}

function handleAnswerClick(snails){
console.log(snails)

}

function resetGame() {
    nextButton.classList.add('hide')
    console.log(answerButtonsElement);
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
            (answerButtonsElement.removeChild(
                answerButtonsElement.firstChild)
            )
    }

}
    function chosenAnswer(e) {
        const selectedButton = e.target
        const correct = selectedButton.dataset.corrects
        setStatusClass(document.body, correct)
        Array.from(answerButtonsElement.children).forEach(button => {
            setStatusClass(button, button.dataset.correct)
        })

    }
