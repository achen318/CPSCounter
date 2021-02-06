var totalClicks, timeElapsed, cps, gameRunning, duration;
var info = document.getElementById('info');
var play_again = document.getElementById('play_again');
var click_box = document.getElementById('click_box');
var total_clicks = document.getElementById('total_clicks');
var time_elapsed = document.getElementById('time_elapsed');
var cps_counter = document.getElementById('cps_counter')

function initInfo() {
    totalClicks = 0;
    timeElapsed = 0;
    cps = 0;
    gameRunning = false;
    duration = 5;
    info.style.display = 'none';
    play_again.style.display = 'none';
    click_box.style.display = 'block';
}

initInfo();

function updateInfo() {
    total_clicks.innerHTML = totalClicks;
    time_elapsed.innerHTML = timeElapsed;
    cps_counter.innerHTML = cps;
}

function startGame() {
    gameRunning = true;
    startTime = new Date().getTime();
    info.style.display = 'block';
    runGame();
}

function runGame() {
    var clock = setInterval(function() {
        let secsElapsed = (new Date().getTime() - startTime) / 1000;
        if (secsElapsed < duration) {
            timeElapsed = Math.round(secsElapsed * 10) / 10;
            if (totalClicks === 0) {
                cps = 0;
            } else {
                cps = Math.round(totalClicks / timeElapsed * 10) / 10;
            }
            updateInfo();
        } else {
            clearInterval(clock);
            endGame();
        }
    }, 1); 
}

function endGame() {
    gameRunning = false;
    click_box.style.display = 'none';
    play_again.style.display = 'block';
    alert('Seriously? That little? I can click ' + (cps + 0.1).toFixed(1) + ' CPS! Get on my level!')
}

click_box.addEventListener('click', function(e) {
    if (!gameRunning) {
        startGame();
    } else {
        totalClicks += 1;
    }
    updateInfo();
})