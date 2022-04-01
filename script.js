const defaultSize = 16;
const gridContainer = document.querySelector('.grid-container');
const containerHeight = gridContainer.offsetHeight;
const containerWidth = gridContainer.offsetWidth;

createGrid(defaultSize);

gridContainer.addEventListener('mouseenter', () => {
    let children = gridContainer.childNodes;

    children.forEach(child => hover(child));

});

const button = document.querySelector('button');
button.addEventListener('click', () => {
    let input = prompt('Enter an integer', '');

    removeGrid();
    createGrid(input);
});

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
    let grid = document.createElement('div');
    grid.classList.add('grid');

    let gridSize = num ** 2;

    grid.style.height = `${containerHeight / num}px`;
    grid.style.width = `${containerWidth / num}px`;

    gridContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${num}, 1fr)`;

    gridContainer.appendChild(grid);

    for (let i = 0; i < gridSize - 1; i++) {
        gridContainer.appendChild(grid.cloneNode(true));
    }
}