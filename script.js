const defaultSize = 16;
const gridContainer = document.querySelector('.grid-container');

createGrid(defaultSize);

gridContainer.addEventListener('mouseenter', () => {
    let children = gridContainer.childNodes;

    children.forEach(child => hover(child));

});

const button = document.querySelector('button');
button.addEventListener('click', () => {
    let input = parseInt(prompt('Enter an integer', ''));

    createGrid(input);
});

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

function hover(child) {
    child.addEventListener('mouseenter', () => {
        child.style.backgroundColor = 'black';
    });
}

function removeGrid() {
    let child = gridContainer.lastElementChild;

    while (child) {
        gridContainer.removeChild(child);
        child = gridContainer.lastElementChild;
    }

}

function createGrid(num) {
    if (!validateInput(num)) return;

    removeGrid();

    const containerHeight = gridContainer.offsetHeight;
    const containerWidth = gridContainer.offsetWidth;

    let square = document.createElement('div');
    square.classList.add('square');

    let squareSize = num ** 2;

    square.style.height = `${containerHeight / num}px`;
    square.style.width = `${containerWidth / num}px`;

    gridContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${num}, 1fr)`;

    gridContainer.appendChild(square);

    for (let i = 0; i < squareSize - 1; i++) {
        gridContainer.appendChild(square.cloneNode(true));
    }
}