const playingField = document.querySelector('.playing-field');

let playSize = "normal";
let currentHeight;
let currentWidth;

function gameStart() {
    adjustFieldSize(playSize);
    generateMarks();

}

function adjustFieldSize(size) {
    if (size == "small") {
        playingField.style.marginTop = ""
        playingField.style.height = "300px";
        playingField.style.width = "300px";
    }
    else if (size == "normal") {
        playingField.style.height = "400px";
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
    for (let i=0; i<40; i++) {
        const divcreate = document.createElement('div');
        
    }
}

gameStart();