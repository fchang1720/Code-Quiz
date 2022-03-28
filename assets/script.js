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
var button4 = document. querySelector(".button4");

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
    timerCount = 50;
    startBtn.disabled = true;
    startTimer()
    chosenQ = 1
    penalize1();
}

function question2() {
    nextBtn2.setAttribute("style", "display:block");
    chosenQ = 2
    penalize2();
}
function question3(){
    nextBtn3.setAttribute("style", "display:block");
    chosenQ = 3
    penalize3();
}
function question4(){
    nextBtn4.setAttribute("style", "display: block");
    chosenQ = 4
    penalize4();
}

function penalize1(){
    if (chosenQ = 1) {
        button1.addEventListener("click", function(event){
            question2();
        })
        button2.addEventListener("click", function(event){
            timerCount -= 5;
        })
        button3.addEventListener("click", function(event){
            timerCount -= 5;
        })
        button4.addEventListener("click", function(event){
            timerCount -= 5;
        })  
    }
}
function penalize2(){
    chosenQ = 2;
    if (chosenQ = 2){
        button1.addEventListener("click", function(event){
            timerCount -= 5;
        })
        button2.addEventListener("click", function(event){
            timerCount -= 5;
        })
        button3.addEventListener("click", function(event){
            question3();
        })
        button4.addEventListener("click", function(event){
            timerCount -= 5;
        })
    }
}
function penalize3(){
    chosenQ = 3;
    if (chosenQ =3){
        button1.addEventListener("click", function(event){
            timerCount -=5
        })
        button2.addEventListener("click", function(event){
            timerCount -= 5;
        })
        button3.addEventListener("click", function(event){
            timerCount -= 5;
        })
        button4.addEventListener("click", function(event){
            question4();
        })
    }
}
function penalize4(){
    chosenQ = 4;
    if (chosenQ =4){
        button1.addEventListener("click", function(event){
            victory();
        })
        button2.addEventListener("click", function(event){
            timerCount -= 5;
        })
        button3.addEventListener("click", function(event){
            timerCount -= 5;
        })
        button4.addEventListener("click", function(event){
            timerCount -= 5;
        })
    }
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
    nextBtn1.setAttribute("style", "display:none");
});
nextBtn2.addEventListener("click", function(event){
    qset2.setAttribute("style", "display:none");
    qset3.setAttribute("style", "display:block");
    nextBtn2.disabled = true;
    nextBtn2.setAttribute("style", "display:none");


});
nextBtn3.addEventListener("click", function(event){
    qset3.setAttribute("style", "display:none");
    qset4.setAttribute("style", "display:block");
    nextBtn3.disabled = true;
    nextBtn3.setAttribute("style", "display:none");

});
nextBtn4.addEventListener("click", function(event){
    qset4.setAttribute("style", "display:none");
    victory.setAttribute("style", "display:block");
    nextBtn4.disabled = true;
    nextBtn4.setAttribute("style", "display:none");
});


