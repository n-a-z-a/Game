"use strict";

var _questions = require("./questions.js");

var restart = document.getElementById("restart");
var timer = document.getElementById("countdown");
var submit = document.getElementById("submit");
var question = document.getElementById("question");
var answers = document.querySelectorAll(".answer");
var score = document.getElementById("score");
var chosenAnswer = "";
var currentQuestion = 0;
var maximumScore = _questions.questions.length; //countdown

var setCountdown;

var countdown = function countdown() {
  timer.innerHTML--;

  if (timer.innerHTML == 0) {
    clearInterval(setCountdown);
    question.innerHTML = "TIME'S UP";
    question.style.backgroundColor = "#FF8F4B";
    question.style.color = "#03444A";
    answers.forEach(function (answer) {
      answer.disabled = true;
      answer.innerHTML = "";
    });
    submit.disabled = true;
  }
};

var stopTimer = function stopTimer() {
  clearInterval(setCountdown);
};

var startTimer = function startTimer() {
  timer.innerHTML = 15;
  setCountdown = setInterval(countdown, 1500);
};

startTimer();
question.innerHTML = _questions.questions[currentQuestion].question;
answers.forEach(function (answer, index) {
  answer.innerHTML = _questions.questions[currentQuestion].answers[index];
  score.innerHTML = "0/".concat(maximumScore);
});
restart.addEventListener("click", function (e) {
  stopTimer();
  submit.disabled = false;
  startTimer();
  score.innerHTML = "0/".concat(maximumScore);
  question.innerHTML = _questions.questions[0].question;
  question.style.backgroundColor = "#03444A";
  question.style.color = "#F1BC52";
  currentQuestion = 0;
  answers.forEach(function (answer, index) {
    answer.disabled = false;
    answer.innerHTML = _questions.questions[0].answers[index];
  });
}); //check if the submitted answer is the right one

answers.forEach(function (item) {
  item.addEventListener("click", function (e) {
    chosenAnswer = e.target.innerHTML;
    console.log(chosenAnswer);
  });
}); //the player chooses an answer and submits it

submit.addEventListener("click", function (e) {
  stopTimer();

  if (_questions.questions[currentQuestion].right_answer == chosenAnswer) {
    //if the submitted answer is right then show the next question and the next answers
    currentQuestion++;

    if (currentQuestion < _questions.questions.length) {
      startTimer();
      question.innerHTML = _questions.questions[currentQuestion].question;
      answers.forEach(function (answer, index) {
        answer.innerHTML = _questions.questions[currentQuestion].answers[index];
      });
    } else {
      question.innerHTML = "YOU WON! WELL DONE";
      question.style.backgroundColor = "#F1BC52";
      question.style.color = "#00A8A8";
      submit.disabled = true;
      answers.forEach(function (answer) {
        answer.disabled = true;
        answer.innerHTML = "";
      });
    }

    score.innerHTML = "".concat(currentQuestion, "/").concat(maximumScore);
  } else {
    //if the submitted answer is wrong, Game Over
    question.innerHTML = "GAME OVER! TRY AGAIN!";
    question.style.backgroundColor = "#F1BC52";
    question.style.color = "#FF8F4B";
    submit.disabled = true;
    answers.forEach(function (answer) {
      answer.disabled = true;
      answer.innerHTML = "";
    });
  }
}); // TO DO
//can't submit without a selected answer