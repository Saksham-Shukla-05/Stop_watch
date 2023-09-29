var sec_1 = document.querySelector("#sec-1");
var sec_2 = document.querySelector("#sec-2");
var min_1 = document.querySelector("#min-1");
var min_2 = document.querySelector("#min-2");
var play = document.querySelector("#play");
var reset = document.querySelector("#reset");
var pause = document.querySelector("#pause");
var timerInterval; 

var sec1 = 0;
var sec2 = 0;
var min1 = 0;
var min2 = 0;

function updateTimerDisplay() {
    sec_1.innerHTML = sec1;
    sec_2.innerHTML = sec2;
    min_1.innerHTML = min1;
    min_2.innerHTML = min2;
}

function startTimer() {
    timerInterval = setInterval(function () {
        sec2++;
        if (sec2 >= 10) {
            sec2 = 0;
            sec1++;
            if (sec1 >= 6) {
                sec1 = 0;
                min2++;
                if (min2 >= 10) {
                    min2 = 0;
                    min1++;
                }
            }
        }
        updateTimerDisplay();
    }, 1000);
}

function resetTimer() {
    clearInterval(timerInterval); 
    sec1 = sec2 = min1 = min2 = 0;
    updateTimerDisplay();
}

play.addEventListener("click", function () {
    startTimer();
    play.disabled = true; 
    reset.disabled = false;
});

reset.addEventListener("click", function () {
    resetTimer();
    play.disabled = false; 
    reset.disabled = true; 
});

pause.addEventListener("click", function(){
    clearInterval(timerInterval)
    play.disabled = false; 
})


reset.disabled = true;