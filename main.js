import {questions} from "./questions.js";

const restart = document.getElementById("restart");
const timer = document.getElementById("countdown")
const submit = document.getElementById("submit");

let question = document.getElementById("question");
let answers = document.querySelectorAll(".answer");
let score = document.getElementById("score");
let chosenAnswer = "";
let currentQuestion = 0;

const maximumScore = questions.length;


//15sec countdown
//it stops when it reaches zero and then a time's up message is displayed and the submit button is disabled

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
        submit.disabled = true;
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
answers.forEach((answer, index) => {
    answer.innerHTML = questions[currentQuestion].answers[index];
    score.innerHTML = `0/${maximumScore}`;
    })


// the restart button resets the countdown and the score and displays the first question with the corresponding options 
restart.addEventListener ("click", (e) => { 
    stopTimer()
    submit.disabled = false;
    startTimer();
    score.innerHTML = `0/${maximumScore}`;
    question.innerHTML = questions[0].question
    question.style.backgroundColor = "#03444A";
    question.style.color = "#F1BC52";
    currentQuestion = 0;
    answers.forEach((answer, index) => {
        answer.disabled = false;
        answer.innerHTML = questions[0].answers[index];
    })
})  


//the player selects an answer, which is then stored 

answers.forEach(item => {
    item.addEventListener ("click", (e) => {
    chosenAnswer = e.target.innerHTML;
    })
})


//the player submits the chosen answer
submit.addEventListener ("click", (e) => {
    stopTimer()
    if (questions[currentQuestion].right_answer == chosenAnswer) {
        //if the submitted answer is right then the next question with the corresponding options is displayed
        currentQuestion++
        if (currentQuestion < questions.length) {
            startTimer()
            question.innerHTML = questions[currentQuestion].question
            answers.forEach((answer, index) => {
                answer.innerHTML = questions[currentQuestion].answers[index]
            }) 
        //if the submitted answer is right and it's the last one, then the player wins the game          
        } else {
            question.innerHTML = "YOU WON! WELL DONE!";
            question.style.backgroundColor = "#F1BC52";
            question.style.color = "#03444A";
            submit.disabled = true;
            answers.forEach (answer => {
            answer.disabled = true;
            answer.innerHTML = "";
            })
        }
    score.innerHTML = `${currentQuestion}/${maximumScore}`;
    } else {
        //if the submitted answer is wrong, Game Over
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
        

// TO DO
//can't submit without a selected answer




