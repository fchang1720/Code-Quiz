var questionEl = document.querySelector(".questionTxt");
var info = document.querySelector(".info");
var qset = document.querySelector(".display-questions");
var qset1 = document.querySelector(".display-question1");
var timerEl = document.querySelector(".timer-count");
var startBtn = document.querySelector(".start-button");
var timerTxt = document.querySelector(".timer-text2");

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
