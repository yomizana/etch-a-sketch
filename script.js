const defaultSize = 16;
const gridContainer = document.querySelector('.grid-container');
const body = document.body;

let mouseDown = false;
let rainbow = false;
let eraser = false;

createGrid(defaultSize);

body.addEventListener('mousedown', (e) => bodyEventHandler(e));
body.addEventListener('mouseup', (e) => bodyEventHandler(e));
body.addEventListener('dragstart', (e) => bodyEventHandler(e));

function bodyEventHandler(e) {
    if (e.type === 'dragstart') e.preventDefault();
    if (e.type === 'mousedown') mouseDown = true;
    if (e.type === 'mouseup') mouseDown = false;
}

gridContainer.addEventListener('mouseenter', () => {

    let children = gridContainer.childNodes;
    children.forEach(child => hover(child));

});

function hover(child) {
    child.addEventListener('mousemove', () => {
        if (mouseDown && eraser) {
            child.style.backgroundColor = 'white';
        } else if (mouseDown && rainbow) {
            child.style.backgroundColor = randomRGB();
        } else if (mouseDown) {
            child.style.backgroundColor = 'black';
        }
    });
}

let counter = 1;

const buttonGridSize = document.querySelector('.grid-size');
buttonGridSize.addEventListener('click', () => {
    const sizeOptions = [8, 16, 32, 48, 64];

    if (counter >= sizeOptions.length - 1)
    {

        counter = 0;

    } else {

        counter++;

    }

    console.log(counter);

    buttonGridSize.textContent = sizeOptions[counter];

    createGrid(sizeOptions[counter]);
});

function createGrid(num) {
    if (!validateInput(num)) return;

    removeGrid();

    const containerHeight = gridContainer.offsetHeight;
    const containerWidth = gridContainer.offsetWidth;

    let square = document.createElement('div');
    square.classList.add('square');

    let squareQuantity = num ** 2;

    square.style.height = `${containerHeight / num}px`;
    square.style.width = `${containerWidth / num}px`;

    gridContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${num}, 1fr)`;

    gridContainer.appendChild(square);

    for (let i = 0; i < squareQuantity - 1; i++) {
        gridContainer.appendChild(square.cloneNode(true));
    }
}

function validateInput(input) {
    const notANumber = 'Invalid input. Enter a number.';
    const tooHigh = 'Enter a number no higher than 100.';

    if (isNaN(input)) {
        alert(notANumber);
        return false;
    }

    if (input > 100) {
        alert(tooHigh);
        return false;
    }

    return true;
}

function removeGrid() {
    let child = gridContainer.lastElementChild;

    while (child) {
        gridContainer.removeChild(child);
        child = gridContainer.lastElementChild;
    }

}

const buttonClear = document.querySelector('.clear');
buttonClear.addEventListener('click', () => {
    let children = gridContainer.childNodes;

    children.forEach(child => {
        child.style.backgroundColor = 'white';
    });

});

const buttonRainbow = document.querySelector('.rainbow');
buttonRainbow.addEventListener('click', () => {

    if (!rainbow) {
        rainbow = true;
        buttonRainbow.style.backgroundColor = 'black';
    } else {
        rainbow = false;
        buttonRainbow.style.backgroundColor = 'darkslategray';
    }
});

function randomRGB() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}

const buttonEraser = document.querySelector('.eraser');
buttonEraser.addEventListener('click', () => {

    if (!eraser) {
        eraser = true;
        buttonEraser.style.backgroundColor = 'black';
    } else {
        eraser = false;
        buttonEraser.style.backgroundColor = 'darkslategray';
    }
});
