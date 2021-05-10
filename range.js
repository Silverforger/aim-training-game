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
    generateMark();
    generateMark2();
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

gameStart();