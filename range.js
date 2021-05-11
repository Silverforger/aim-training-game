const playingField = document.querySelector('.playing-field');
const hitCounter = document.querySelector('.hit-counter');
const timeCounter = document.querySelector('.remaining-counter');
const rangeGame = document.querySelector('#range-game');
const rangeDifContainer = document.querySelector('.range-dif-container');
const rangeDifButton = document.querySelectorAll('.range-dif');
let playSize = "";
let timesup = false;
let currentHeight;
let currentWidth;
let hits = 0;
let three = 3;
let timer = 30;
var threeSecondsID;
var gameTimerID;

rangeDifButton.forEach(button => {
    button.addEventListener('click', (e) => {
        playSize = e.target.textContent;
        rangeDifContainer.style.opacity = "0";
        rangeDifContainer.ontransitionend = () => {
            rangeDifContainer.style.display = "none";
            rangeGame.style.display = "block";
            gameStart();    
        }
    })
})
    
function gameStart() {
    threeSeconds();
    threeSecondsID = setInterval(threeSeconds, 1000);
    adjustFieldSize(playSize);
}

function threeSeconds() {
    const threeSecBox = document.querySelector('.three-sec-box');
    const threeSecText = document.querySelector('.three-sec-timer');
    if (three <= 0) {
        clearInterval(threeSecondsID);
        threeSecBox.style.display = "none";
        generateMark();
        generateMark2();
        gameTimer();
        gameTimerID = setInterval(gameTimer, 1000);
    }
    threeSecText.textContent = `${three}`
    three -= 1;
}

function gameTimer() {
    if (timer <= 0) {
        clearInterval(gameTimerID);
        timesup = true;
    }
    timeCounter.textContent = `REMAINING: ${timer}s`
    timer -= 1;
}

function adjustFieldSize(size) {
    if (size == "SMALL") {
        playingField.style.marginTop = "120px"
        playingField.style.height = "300px";
        playingField.style.width = "300px";
    }
    else if (size == "NORMAL") {
        playingField.style.height = "500px";
        playingField.style.width = "500px";
    }
    else if (size == "WIDE") {
        playingField.style.height = "500px";
        playingField.style.width = "1000px";
    }
    currentHeight = parseInt((playingField.style.height).replace("px", ""), 10)
    currentWidth = parseInt((playingField.style.width).replace("px", ""), 10)
}

function generateMark() {
    if (!timesup) {
        let topRand, leftRand = 0;
        topRand = Math.floor(Math.random() * (currentHeight - 50));
        leftRand = Math.floor(Math.random() * (currentWidth/2 - 50));

        const divcreate = document.createElement('div');
        divcreate.classList.add("mark");
        playingField.appendChild(divcreate);
      
        const mark = document.querySelector('.mark');
        mark.style.top = `${topRand}px`;
        mark.style.left = `${leftRand}px`;
        mark.style.transitionDuration = "0.1s";
        mark.style.transform = "scale(1)";
      
        mark.addEventListener('click', () => {
            mark.style.transform = "scale(0)";
            mark.ontransitionend = () => {
                mark.remove();
                generateMark();
                hits++;
                updateHits();
            }
        })
    }   
}

function generateMark2() {
    if (!timesup) {
        let top2Rand, left2Rand = 0;
        top2Rand = Math.floor(Math.random() * (currentHeight - 50));
        left2Rand = Math.floor((Math.random() * currentWidth/2) + currentWidth/2 -50);

        const div2create = document.createElement('div');
        div2create.classList.add("mark2");
        playingField.appendChild(div2create);
        
        const mark2 = document.querySelector('.mark2');
        mark2.style.top = `${top2Rand}px`;
        mark2.style.left = `${left2Rand}px`;
        mark2.style.transitionDuration = "0.1s";
        mark2.style.transform = "scale(1)";

        mark2.addEventListener('click', () => {
            mark2.style.transform = "scale(0)";
            mark2.ontransitionend = () => {
                mark2.remove();
                generateMark2();
                hits++;
                updateHits();
            }
        })
    }   
}

function updateHits() {
    hitCounter.textContent = `HITS: ${hits}`;
}

function updateTime() {
    timeCounter.textContent = `REMAINING: ${time}S`;
}