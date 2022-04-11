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
        question.innerHTML = "TIME'S UP";
        question.style.backgroundColor = "#FF8F4B";
        question.style.color = "#03444A";
        answers.forEach (answer => {
            answer.disabled = true;
            answer.innerHTML = "";
        })
        // answers.style.color = "#FF8F4B";
    //     document.body.style.backgroundColor = "#FF8F4B";
    //     document.body.innerHTML = "TIME'S UP";
    //     document.body.style.alignContent = center;
    //     document.body.style.fontSize = 74;
    //     document.body.style.fontFamily = Bungee;
    //     document.body.style.color = "#03444A";
    }
}

const stopTimer = () => {
    clearInterval(setCountdown)
}

const startTimer = () => {
    timer.innerHTML = 15;
    setCountdown = setInterval(countdown,1500);
}


startTimer();
question.innerHTML = questions[currentQuestion].question;
answers.forEach((answerButton, index) => {
    answerButton.innerHTML = questions[currentQuestion].answers[index];
    score.innerHTML = `0/${maximumScore}`;
    })


restart.addEventListener ("click", (e) => { 
    submit.disabled = false;
    startTimer();
    countdown();
    score.innerHTML = `0/${maximumScore}`;
    question.innerHTML = questions[0].question
    currentQuestion = 0;
    answers.forEach((answer, index) => {
        answer.disabled = false;
        answer.innerHTML = questions[0].answers[index];
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
                answers.forEach((answer, index) => {
                    answer.innerHTML = questions[currentQuestion].answers[index]
                })
            } else {
                question.innerHTML = "YOU WON! WELL DONE";
                question.style.backgroundColor = "#F1BC52";
                question.style.color = "#00A8A8";
                submit.disabled = true;
            }
        score.innerHTML = `${currentQuestion}/${maximumScore}`;
        } else {
        //if the submitted answer is wrong then prompt a GameOver pop-up
            question.innerHTML = "GAME OVER! TRY AGAIN!";
            question.style.backgroundColor = "#F1BC52";
            question.style.color = "#FF8F4B";
            submit.disabled = true;
            answers.forEach (answer => {
                answer.disabled = true;
                answer.innerHTML = "";
            })
        }
})   
        


// submit.addEventListener ("click")

// question.innerHTML = questions[questionNumber].question
// answers.forEach((answerButton, index) => {
//     answerButton.innerHTML = questions[questionNumber].answers[index]
// })



//if the answer is correct then the points are updated and the second question comes up and so on

//if the answer is wrong, game over
