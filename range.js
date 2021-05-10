const playingField = document.querySelector('.playing-field');
const hitCounter = document.querySelector('.hit-counter');
const timeCounter = document.querySelector('.remaining-counter');
let playSize = "normal";
let timesup = false;
let currentHeight;
let currentWidth;
let hits = 0;
let time = 30;

function gameStart() {
    let countdown = setInterval(() => {
        if (time <= 0) {
            clearInterval(countdown);
            timesup = true;
        }
        timeCounter.textContent = `REMAINING: ${time}S`
        time -= 1;
    }, 1000);

    adjustFieldSize(playSize);
    generateMarks();
}

function adjustFieldSize(size) {
    if (size == "small") {
        playingField.style.marginTop = "100px"
        playingField.style.height = "300px";
        playingField.style.width = "300px";
    }
    else if (size == "normal") {
        playingField.style.height = "500px";
        playingField.style.width = "500px";
    }
    else if (size == "wide") {
        playingField.style.height = "500px";
        playingField.style.width = "1000px";
    }
    currentHeight = parseInt((playingField.style.height).replace("px", ""), 10)
    currentWidth = parseInt((playingField.style.width).replace("px", ""), 10)
}

function generateMarks() {
    if (!timesup) {
        let topRand, leftRand = 0;
        topRand = Math.floor(Math.random() * (currentHeight - 50));
        leftRand = Math.floor(Math.random() * (currentWidth - 50));

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
                generateMarks();
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

gameStart();