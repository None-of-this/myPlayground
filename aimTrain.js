const fireRange = document.querySelector('#fire-range');
const aim = document.querySelector('circle');
const svgBox = document.querySelector('svg')

aim.addEventListener("click", hit);

let x;
let y;
const { width, height } = fireRange;
const { cx, cy } = aim;


function hit() {
    console.log('ok')
    x = Math.floor(Math.random() * 100)
    y = Math.floor(Math.random() * 100)
    aim.cx = `${x}px`
    aim.cy = `${y}px`
}