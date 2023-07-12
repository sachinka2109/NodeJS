var stopwatch = document.querySelector('#timer');
let milliseconds= 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let int = null;
let elapsedTime;

function start() {
    if (int !== null) {
        clearInterval(int);
    }
    int = setInterval(timer,1);
}

function stop() {
    clearInterval(int);
}

function reset() {
    stop();
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    stopwatch.innerHTML = '00 : 00 : 00 : 00'
}

function timer() {
    milliseconds++;
    if(milliseconds == 100) {
        milliseconds = 0;
        seconds++;
    }
    if(seconds == 60) {
        seconds = 0;
        minutes++;
    }
    if(minutes == 60) {
        minutes = 0;
        hours++;
    }

    let h = String(hours).padStart(2, '0');
    let m = String(minutes).padStart(2, '0');
    let s = String(seconds).padStart(2, '0');
    let ms = String(milliseconds).padStart(2, '0');
    stopwatch.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}
