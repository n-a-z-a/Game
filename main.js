import {questions} from "./questions.js";

const start = document.getElementById("start");
const timer = document.getElementById("timer");
const reset = document.getElementById("reset");
const submit = document.getElementById("submit");
const message = document.getElementById("message");

let question = document.getElementById("question");
let answers = document.querySelectorAll(".answer");
let score = document.getElementById("score");

let chosenAnswer = "";

let currentQuestion = 0;

const maximumScore = questions.length;


//the player starts the game and the first question comes up on screen 

start.addEventListener ("click", (e) => {
    question.innerHTML = questions[currentQuestion].question
    answers.forEach((answerButton, index) => {
        answerButton.innerHTML = questions[currentQuestion].answers[index];
    score.innerHTML = `${currentQuestion}/${maximumScore}`;
    })
})

//check if the submitted answer is the right one

answers.forEach(item => {
    item.addEventListener ("click", (e) => {
    chosenAnswer = e.target.innerHTML;
    console.log (chosenAnswer);
    })
})

//the player chooses an answer and submits it

submit.addEventListener ("click", (e) => {
    if (questions[currentQuestion].right_answer == chosenAnswer) {
        //if the submitted answer is the right one then show the next question and the next answer
            currentQuestion++
            if (currentQuestion < questions.length) {
                question.innerHTML = questions[currentQuestion].question
                answers.forEach((answerButton, index) => {
                    answerButton.innerHTML = questions[currentQuestion].answers[index]
                })
            } else {
                message.innerHTML = "Congratulations! You've won!"
            }
        score.innerHTML = `${currentQuestion}/${maximumScore}`;
        } else {
        //if the submitted answer is wrong then prompt a GameOver pop-up
            message.innerHTML = "Game Over"
        }
})   
        


// submit.addEventListener ("click")

// question.innerHTML = questions[questionNumber].question
// answers.forEach((answerButton, index) => {
//     answerButton.innerHTML = questions[questionNumber].answers[index]
// })



//if the answer is correct then the points are updated and the second question comes up and so on

//if the answer is wrong, game over
