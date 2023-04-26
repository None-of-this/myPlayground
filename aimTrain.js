// const fireRange = document.querySelector('#fire-range');
const aim = document.querySelector('circle');
const svgBox = document.querySelector('svg')
const counter = document.querySelector('.counter')
const btn = document.querySelector('.btn');

const startBtn = document.querySelector('.startBtn')

let countdown = document.createElement('h2');
countdown.classList.add('countdown');

startBtn.addEventListener("click", start)

function start() {
  console.log('ok');
  btn.appendChild(countdown);
  for(let i = 3; i >= 0 ; i--){
    setTimeout(() => {
      countdown.innerText = `${i}`;
      // countdown.classList.toggle("countdown-active");
      if(i === 0) {
        countdown.remove();
        hit(false);
        hitCount = 0;
        aim.classList.remove('circle-inactive')
        stopwatch();
      }
    }, (3 - i) * 1000);
  }
}

let x;
let y;
const { clientWidth, clientHeight } = svgBox;
const { cx, cy } = aim;
let hitCount = 0

aim.addEventListener("click", hit);
//* this is giving a new position to the aim, incrementing the count

function hit(hitted = true) {
  x = Math.floor(Math.random() * clientWidth);
  y = Math.floor(Math.random() * clientHeight);
  aim.setAttribute('cx', x);
  aim.setAttribute('cy', y);
  if (hitted) {
    hitCount += 1;
    counter.textContent = `Hit Count : ${hitCount}`
  }
}


let timer = document.querySelector('.stopwatch')
let [milliseconds, seconds] = [0,3];

console.log(timer)

function stopwatch() {
  int = setInterval(moving, 1000);
}

function moving() {
  console.log(seconds);
  seconds--;
  if (seconds === 0) {
    clearInterval(int)
  }
  timer.innerHTML = `${seconds}`
}









//* this is the wave fonction, might be use better to the misses count
let btnTop = btn.offsetTop;
let btnLeft = btn.offsetLeft;

(function(){
  
  btn.addEventListener('click',function(e){
    let div = document.createElement('div');
    div.classList.add('wave');
    div.style.left = e.clientX - btnLeft + 'px';
    div.style.top = e.clientY - btnTop + 'px';
    btn.appendChild(div);
    setTimeout(function(){
      div.classList.add('wave-ani');
    });
    setTimeout(function(){
      btn.removeChild(div);
      },1500);
    });
    btn.addEventListener('mousedown',function(){
      btn.classList.add('btn-active');
    });
    btn.addEventListener('mousedown',function(){
      btn.classList.remove('btn-active');
    });
    
  })();