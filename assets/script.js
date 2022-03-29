// Selecting our variables
var info = document.querySelector(".info");
var qset = document.querySelector(".display-questions");
var qset1 = document.querySelector(".display-question1");
var qset2 = document.querySelector(".display-question2");
var qset3 = document.querySelector(".display-question3");
var qset4 = document.querySelector(".display-question4");
var victory = document.querySelector(".victory");
var timerEl = document.querySelector(".timer-count");
var timerTxt = document.querySelector(".timer-text2");
var startBtn = document.querySelector(".start-button");
var button1 = document.querySelector(".button1");
var button2 = document.querySelector(".button2");
var button3 = document.querySelector(".button3");
var button4 = document.querySelector(".button4");

// querySelectorAll returns a Nodelist, so we do the following to attach event listener to all buttonW
let buttonW = document.querySelectorAll(".buttonW");
buttonW.forEach(buttonW => {
  buttonW.addEventListener('click', () => timerCount -= 5);
});

var win = false;
var timer;
var timerCount;

// start function
function startGame() {
    info.setAttribute("style", "display:none");
    qset.setAttribute("style", "display:block");
    qset1.setAttribute("style", "display:block");
    timerCount = 50;
    startBtn.disabled = true;
    startTimer()

}

function winGame() {
    localStorage.setItem("timeLeft", timerEl.textcontent)
}

function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerEl.textContent = timerCount;
        if (win && timerCount > 0){
            clearInterval(timer);
            timerTxt.textContent = 'is your final score!!'
            winGame();
        }
        if (timerCount === 0) {
            clearInterval(timer);
            timerEl.textContent = 'Game Over!'
            timerTxt.textContent = ''
            loseGame();
        }
        if (timerCount < 0) {
            clearInterval(timer);
            timerEl.textContent = 'Game Over!'
            timerTxt.textContent = ''
            loseGame();
        }
        
    }, 1000);
}

startBtn.addEventListener("click", startGame);

button1.addEventListener("click", function(e) {
    qset1.setAttribute("style", "display:none");
    qset2.setAttribute("style", "display:block");

});

button2.addEventListener("click", function(event){
    qset2.setAttribute("style", "display:none");
    qset3.setAttribute("style", "display:block");

});

button3.addEventListener("click", function(event){
    qset3.setAttribute("style", "display:none");
    qset4.setAttribute("style", "display:block");

});

button4.addEventListener("click", function(event){
    qset4.setAttribute("style", "display:none");
    victory.setAttribute("style", "display:block");
    win = true;

});

