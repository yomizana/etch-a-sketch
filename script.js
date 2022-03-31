const gridContainer = document.querySelector('.grid-container');
const grid = document.createElement('div');

grid.classList.add('grid');
gridContainer.appendChild(grid);

let containerHeight = gridContainer.offsetHeight;
let containerWidth = gridContainer.offsetWidth;

console.log (containerHeight, containerWidth);