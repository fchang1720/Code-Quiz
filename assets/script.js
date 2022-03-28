var questionEl = document.querySelector(".questionTxt");
var info = document.querySelector(".info");
var qset = document.querySelector(".display-questions");
var qset1 = document.querySelector(".display-question1");
var qset2 = document.querySelector(".display-question2");
var timerEl = document.querySelector(".timer-count");
var timerTxt = document.querySelector(".timer-text2");
var startBtn = document.querySelector(".start-button");
var nextBtn1 = document.querySelector(".next-button1");
var nextBtn2 = document.querySelector(".next-button2");
var nextBtn3 = document.querySelector("next-button3");
var nextBtn4 = document.querySelector("next-button4");
var buttons = document.querySelector(".buttons");

var chosenQ = "";
var timer;
var timerCount;

function question1() {

}

// start function
function startGame() {
    info.setAttribute("style", "display:none");
    qset.setAttribute("style", "display:block");
    qset1.setAttribute("style", "display:block");
    timerCount = 5;
    startBtn.disabled = true;
    startTimer()
    buttons.addEventListener("click", function(event){
    nextBtn1.setAttribute("style", "display:block");
    })
}

function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerEl.textContent = timerCount;
        // console.log(timerCount);
        if (timerCount === 0) {
            clearInterval(timer);
            timerEl.textContent = 'Game Over!'
            timerTxt.textContent = ''
        }

        
    }, 1000);
}

startBtn.addEventListener("click", startGame);

nextBtn1.addEventListener("click", function(event) {
    qset1.setAttribute("style", "display:none");
    qset2.setAttribute("style", "display:block");
    nextBtn1.disabled = true;
});


