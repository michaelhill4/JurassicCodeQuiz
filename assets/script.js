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
                    { answer: 'birds', correct: true},
                    { answer: 'insects', correct: false},
                    { answer: 'sharks', correct: false}]    
            },
    

        {
            question: 'How long did the Jurassic era last?',
        answersArray: [
            {answer: '100 million years', correct: false},
            {answer: '10 million years', correct: false},
            {answer: '56 million years', correct: true},
            {answer: '76 million years', correct: false}]
        },
{
        question: 'what popular movie was made inspired by the beauty of the Jurassic era?',
        answersArray :[
        {answer: "Jurassic Park", correct: true},
        {answer: "Jurassic Shark", correct: false},
        {answer: "Jurassic City", correct: false},
        {answer: "Triassic Venue", correct: false}]
},

     { question: 'Due to warmer climates there was no _____ on Earth.',
        answersArray: [
            {answer: 'crabs', correct: false},
            {answer: 'mcdonalds', correct: false},
            {answer: 'ice', correct: true},
            {answer: 'polar bears', correct: false}]

     },
     { question: 'Most of the climate on Earth was _____________?',
        answersArray: [
            {answer: 'desert', correct: false},
            {answer: 'tropical', correct: true},
            {answer: 'arctic', correct: false},
            {answer: 'there was no climate', correct: false}
        ]},
    ]


    
        var timeClock = 60;
        var timeCountdown = "";
        var changeQuestion = -1;
        var finalScore;
        var currentScore = 0;

        var timerElement = document.getElementById('timer');
        var questionElement = document.getElementById('question');
        var firstAnswer = document.getElementById('answer1');
        var secondAnswer = document.getElementById('answer2');
        var thirdAnswer = document.getElementById('answer3');
        var fourthAnswer = document.getElementById('answer4');
        var finalScoreElement = document.getElementById('finalScore');
        
        var initialsElement = document.getElementById('');
        
        var questionRandomizer = questionRandom();
        
        function changeQuestion(curr, next) {
            document.getElementById(curr).classList.add('hide');
            document.getElementById(next).removeAttribute('class');
        }
        
        // init
        function gameStart(event) {
            setInterval( function() {
                // timer starts but probably doesnt end
                console.log(timeClock);
                timeClock--;
                document.getElementById("timer").textContent = timeClock;
            
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
    questionRandomizer++
    if (changeQuestion === questionRandomizer.length) {
        timeClock = 0;
        gameOver();
    } 
    else {
        questionElement.textContent = questionRandomizer[changeQuestion].question;
        // answer buttons work?????
        let arr = [firstAnswer, secondAnswer, thirdAnswer, fourthAnswer];
        let i = 0;
        arr.forEach(element => {
            element.textContent = questionRandomizer[changeQuestion].answersArray[i].answer;
            i++
        }, i);
        }
    }


   // answer clicks
    function handleAnswerClick(event) {
        let correctAnswer = getCorrectAnswer(currentQuestion);
        if (event.target.textContent === correctAnswer) {
            currentScore += 10;
            event.target.classList.add('correct')
        } else {
            secondsLeft -= 10;
            event.target.classList.add('wrong')
        }
        setTimeout(
            () => {
                event.target.className = 'btn';
                nextQuestion();
            }, 500);
        }

