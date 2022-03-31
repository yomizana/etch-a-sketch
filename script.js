const gridContainer = document.querySelector('.grid-container');
const grid = document.createElement('div');

grid.classList.add('grid');
gridContainer.appendChild(grid);

let containerHeight = gridContainer.offsetHeight;
let containerWidth = gridContainer.offsetWidth;
let gridHeight = grid.offsetHeight;
let gridWidth = grid.offsetWidth;

let size = (containerHeight / gridHeight) * (containerWidth / gridWidth);

for (let i = 0; i < size - 1; i++) {
    gridContainer.appendChild(grid.cloneNode(true));
}

let grids = document.querySelectorAll('.grid');
grids.forEach(singleGrid => {
    singleGrid.addEventListener('mouseover', () => {
        singleGrid.style.backgroundColor = 'black';
    });
});