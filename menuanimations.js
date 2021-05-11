const homeButton = document.querySelector('.homebtn');
const optionsBox = document.querySelector('.options-slide');

let menuIsOpen = false;

homeButton.addEventListener('click', () => {
    if (!menuIsOpen) {
        optionsBox.style.right = "0px";
        menuIsOpen = !menuIsOpen;
    }
    else if (menuIsOpen) {
        optionsBox.style.right = "-250px";
        menuIsOpen = !menuIsOpen;
    }
})