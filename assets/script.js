var questionEl = document.querySelector(".questionTxt");
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
var nextBtn1 = document.querySelector(".next-button1");
var nextBtn2 = document.querySelector(".next-button2");
var nextBtn3 = document.querySelector(".next-button3");
var nextBtn4 = document.querySelector(".next-button4");
var button1 = document.querySelector(".button1");
var button2 = document.querySelector(".button2");
var button3 = document.querySelector(".button3");
var button4 = document.querySelector(".button4");
var buttonW = document.querySelectorAll(".buttonW");

var chosenQ = 0;
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

// function chooseQ() {

// }


function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerEl.textContent = timerCount;
        // console.log(timerCount);
        buttonW.addEventListener("click", function(event){
            penalize();
        });
        if (timerCount === 0) {
            clearInterval(timer);
            timerEl.textContent = 'Game Over!'
            timerTxt.textContent = ''
        }
        
        
    }, 1000);
}
function penalize() {
    timerCount -= 5;
}  

startBtn.addEventListener("click", startGame);



button1.addEventListener("click", function(e) {
    qset1.setAttribute("style", "display:none");
    qset2.setAttribute("style", "display:block");
    nextBtn1.disabled = true;
    nextBtn1.setAttribute("style", "display:none");
});

button2.addEventListener("click", function(event){
    qset2.setAttribute("style", "display:none");
    qset3.setAttribute("style", "display:block");
    nextBtn2.disabled = true;
    nextBtn2.setAttribute("style", "display:none");
});

button3.addEventListener("click", function(event){
    qset3.setAttribute("style", "display:none");
    qset4.setAttribute("style", "display:block");
    nextBtn3.disabled = true;
    nextBtn3.setAttribute("style", "display:none");
});

button4.addEventListener("click", function(event){
    qset4.setAttribute("style", "display:none");
    victory.setAttribute("style", "display:block");
    nextBtn4.disabled = true;
    nextBtn4.setAttribute("style", "display:none");
});


