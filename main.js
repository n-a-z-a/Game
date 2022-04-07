import {questions} from "./questions.js";

const start = document.getElementById("start");
const timer = document.getElementById("timer");
const reset = document.getElementById("reset");
const submit = document.getElementById("submit");
const gameOver = document.getElementById("gameOver");

let question = document.getElementById("question");
let answers = document.querySelectorAll(".answer");
let score = document.getElementById("points");

let chosenAnswer = "";

let currentQuestion = 0;



//the player starts the game and the first question comes up on screen 

start.addEventListener ("click", (e) => {
    question.innerHTML = questions[currentQuestion].question
    answers.forEach((answerButton, index) => {
        answerButton.innerHTML = questions[currentQuestion].answers[index];
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
    // console.log (questionNumber)
    // console.log (questions[0].right_answer)
    // console.log(questions[questionNumber].right_answer)
    if (questions[currentQuestion].right_answer == chosenAnswer) {
        //if the submitted answer is the right one then show the next question and the next answer
            currentQuestion++
            if (currentQuestion < questions.length) {
                question.innerHTML = questions[currentQuestion].question
                answers.forEach((answerButton, index) => {
                    answerButton.innerHTML = questions[currentQuestion].answers[index]
                })
            } else {
                gameOver.innerHTML = "Congratulations! You've won!"
            }
        } else {
        //if the submitted answer is wrong then prompt a GameOver pop-up
            gameOver.innerHTML = "Game Over"
        }
})   
        




// submit.addEventListener ("click")

// question.innerHTML = questions[questionNumber].question
// answers.forEach((answerButton, index) => {
//     answerButton.innerHTML = questions[questionNumber].answers[index]
// })



//if the answer is correct then the points are updated and the second question comes up and so on

//if the answer is wrong, game over
