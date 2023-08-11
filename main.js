const canvas = document.querySelector('#main');
const ctx = canvas.getContext('2d');


let painting = false;
let brushColor = 'black';
let brushSize = 2;

function startPosition(e) {
    painting = true;
    draw(e);
}

function finishedPosition() {
    painting = false;
    ctx.beginPath();
}

function draw(e) {
    if (!painting) return;
    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';
    ctx.strokeStyle = brushColor;

    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
}

canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', finishedPosition);
canvas.addEventListener('mousemove', draw);

document.querySelector('#blue').addEventListener('click', () => {
    brushColor = 'blue';
});

document.querySelector('#black').addEventListener('click', () => {
    brushColor = 'black';
});

document.querySelector('#pink').addEventListener('click', () => {
    brushColor = 'pink';
});

document.querySelector('#yellow').addEventListener('click', () => {
    brushColor = 'yellow';
});

document.querySelector('#erase').addEventListener('click', () => {
    brushColor = 'white';
});

document.querySelector('#slider').addEventListener('input', (e) => {
    brushSize = e.target.value;
});

document.querySelector('#new').addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});