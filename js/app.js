let size = 0;

const start = document.querySelector('.start');
const clear = document.querySelector('.clear');
const color = document.querySelector('.pickColor');
const grid = document.querySelector('.container');

function startGrid() {
    size = prompt('Please enter the side of the grid (max: 64)');
    if (size <= 64) {
        grid.innerHTML = '';
        makeRows(size, size);
    } else if (size > 64) {
        alert('Oops! The maximum is 64, kid.');
    }
}

function clearGrid() {
    grid.innerHTML = '';
    makeRows(size, size);
}

function makeRows(rows, colms) {
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-colms', colms);
    grid.style.border = '3px solid #ffffff';
    grid.style.boxShadow = '4px 4px 8px rgba(0, 0, 0, 0.5)';

    for (let i = 0; i < (rows * colms); i++) {
        let cell = document.createElement('div');
        grid.appendChild(cell).className = 'grid-item';
        cell.addEventListener('mouseover', paint);
    }
}

function paint(e) {
    let pickColor = color.value;
    e.target.style.backgroundColor = pickColor;
}


start.addEventListener('click', startGrid);
clear.addEventListener('click', clearGrid);
document.addEventListener('keypress', stopPaint);