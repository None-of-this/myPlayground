// const fireRange = document.querySelector('#fire-range');
const aim = document.querySelector('circle');
const svgBox = document.querySelector('svg')

aim.addEventListener("click", hit);

let x;
let y;
const { clientWidth, clientHeight } = svgBox;
const { cx, cy } = aim;

function hit() {
    x = Math.floor(Math.random() * clientWidth);
    y = Math.floor(Math.random() * clientHeight);
    aim.setAttribute('cx', x);
    aim.setAttribute('cy', y);
}

svgBox.addEventListener('click', shoot)

function shoot() {
    console.log('ok')
}