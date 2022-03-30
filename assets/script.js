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
var form = document.querySelector(".form");
var initials = document.querySelector("#initials")
var submitBtn = document.querySelector(".submitBtn");
var hsText = document.querySelector(".high-scores-text");
var verify = document.querySelector(".verify");

// querySelectorAll returns a Nodelist, so we do the following to attach event listener to all buttonW
let buttonW = document.querySelectorAll(".buttonW");
buttonW.forEach(buttonW => {
 
  buttonW.addEventListener('click', () => timerCount -= 5,);
  buttonW.addEventListener('click', () => verify.textContent = "Wrong!");
  
});
// making sure player doesn't win at start
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
    victory.setAttribute("style", "display:none");
    startTimer()

}

// Form prevent default
form.addEventListener('submit', (e) => {
    e.preventDefault();
});

// sets lose state, preventing interaction with buttons.

function loseGame(){
    qset1.setAttribute("style", "display:none");
    qset2.setAttribute("style", "display:none");
    qset3.setAttribute("style", "display:none");
    qset4.setAttribute("style", "display:none");
    verify.textContent = "";
}

// Function to set up and start timer
function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerEl.textContent = timerCount;
        
        // win effect on timer
        if (win && timerCount > 0){
            clearInterval(timer);
            timerTxt.textContent = 'is your final score!!'
        
        }
        // lose effect on timer
        if (timerCount === 0) {
            clearInterval(timer);
            timerEl.textContent = 'Game Over!'
            timerTxt.textContent = ''
            loseGame();
        }
        // if timer goes into negative values
        if (timerCount < 0) {
            clearInterval(timer);
            timerEl.textContent = 'Game Over!'
            timerTxt.textContent = ''
            loseGame();
        }
        
    }, 1000);

}

// Displays stored scores in local storage onto page.
function setScore() {
    var hsDisplay = localStorage.getItem("initials")
    var timeDisplay = localStorage.getItem("time score")
    hsText.textContent = hsDisplay + timeDisplay;
}

// event listener for start button
startBtn.addEventListener("click", startGame);

// event listener for correct answer choices
button1.addEventListener("click", function(e) {
    qset1.setAttribute("style", "display:none");
    qset2.setAttribute("style", "display:block");
    verify.textContent = "Correct!"
});

button2.addEventListener("click", function(event){
    qset2.setAttribute("style", "display:none");
    qset3.setAttribute("style", "display:block");
    verify.textContent = "Correct!"
});

button3.addEventListener("click", function(event){
    qset3.setAttribute("style", "display:none");
    qset4.setAttribute("style", "display:block");
    verify.textContent = "Correct!"
});

button4.addEventListener("click", function(event){
    qset4.setAttribute("style", "display:none");
    victory.setAttribute("style", "display:block");
    win = true;
    verify.textContent = ""
    
});

// event listener for submit button, also adds prevent default.
submitBtn.addEventListener("click", function(event) {
    event.preventDefault();
    
    localStorage.setItem("initials", initials.value);
    localStorage.setItem("time score", timerCount);
    setScore();
    startBtn.disabled = false;
});