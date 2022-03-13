let second;
let total = 300;

const showTimerSecond = function () {
    let m = Math.floor(total / 60);
    let s = Math.floor(total % 60);
    const op = document.getElementById("minute-text");
    op.innerText = `${m}m`;
    const op2 = document.getElementById("second_text");
    op2.innerText = `${s}s`;

    total = total - 1;
   
}



const startTimer = function () {
    second = setInterval(showTimerSecond, 1000);
   
}

const start_btn = document.getElementById("btn");
start_btn.addEventListener('click', startTimer);

