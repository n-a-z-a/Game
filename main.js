import {questions} from "./questions.js";

const restart = document.getElementById("restart");
const timer = document.getElementById("countdown")
const submit = document.getElementById("submit");
const message = document.getElementById("message");

let question = document.getElementById("question");
let answers = document.querySelectorAll(".answer");
let score = document.getElementById("score");
let chosenAnswer = "";
let currentQuestion = 0;

const maximumScore = questions.length;


//countdown

let setCountdown;
const countdown = () => {
    timer.innerHTML--
    if (timer.innerHTML==0) {
        clearInterval(setCountdown)
    }
}

const stopTimer = () => {
    clearInterval(setCountdown)
}

const startTimer = () => {
    timer.innerHTML = 15
    setCountdown = setInterval(countdown,1500)
}


startTimer();
question.innerHTML = questions[currentQuestion].question
answers.forEach((answerButton, index) => {
    answerButton.innerHTML = questions[currentQuestion].answers[index];
    score.innerHTML = `0/${maximumScore}`;
    })



restart.addEventListener ("click", (e) => { 
    startTimer();
    question.innerHTML = questions[0].question
    answers.forEach((answerButton, index) => {
        answerButton.innerHTML = questions[0].answers[index];
    score.innerHTML = `0/${maximumScore}`;
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

//can't submit without a selected answer

submit.addEventListener ("click", (e) => {
    stopTimer()
    if (questions[currentQuestion].right_answer == chosenAnswer) {
        //if the submitted answer is the right one then show the next question and the next answer
            currentQuestion++
            if (currentQuestion < questions.length) {
                startTimer()
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
