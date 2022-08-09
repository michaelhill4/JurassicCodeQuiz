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
        
        
        
        // const questions = ["Most of the climate on Earth was ________?", "What type of animals started appearing for the first time during the Jurassic Era?", "How long did the Jurassic era last?", "What popular movie was inspired bt the Jurassic era?", "Due to warmer climates there was no ______ on Earth?"]


        var timeClock = 60;
        var timeCountdown = "";
        var currentScore = 0;

        
        function gameStart(event) {
            setInterval( function(){
                // timer starts but probably doesnt end
                console.log(timeClock);
                timeClock--;
                document.getElementById("timer").textContent = timeClock;
            
            }, 1000) 
        }


