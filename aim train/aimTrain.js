// const fireRange = document.querySelector('#fire-range');
const aim = document.querySelector('circle');
const svgBox = document.querySelector('.game-view ')
const counter = document.querySelector('.counter')
const btn = document.querySelector('.btn');
const miss = document.querySelector('.miss')
const startBtn = document.querySelector('.startBtn')
let timer = document.querySelector('.stopwatch')

let countdown = document.createElement('h2');
countdown.classList.add('countdown');

let bestScore = 0;
//* this is updating the board hit and miss, i guess they never miss

function updateBoard() {
  counter.textContent = `${hitCount}`
  miss.textContent = `${missClickCount - hitCount}`
}


startBtn.addEventListener("click", start)

function start() {
  startBtn.removeEventListener('click', start);
  // as the game begging everyone should have a chance to take a fresh start
  
  hitCount = 0;
  missClickCount = 0;
  updateBoard();

  btn.appendChild(countdown);
  for(let i = 3; i >= 0 ; i--){
    setTimeout(() => {
      countdown.innerText = `${i}`;
      if(i === 0) {
        countdown.remove();
        hit(false);
        hitCount = 0;
        aim.classList.remove('circle-inactive');
        timer.classList.remove('hide');
        startBtn.classList.add('hide');
        seconds = 30;
        stopwatch();
        btn.addEventListener('click', clicking)

        // gameActive();
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
    updateBoard();
  }
}

let [milliseconds, seconds] = [0,10];

function stopwatch() {
  int = setInterval(moving, 1000);
}

function moving() {
  seconds--;
  if (seconds === 0) {
    clearInterval(int);
    result();
  }
  timer.innerHTML = `${seconds}.`
}

//* this is the wave fonction, might be use better to the misses count

let btnTop = btn.offsetTop;
let btnLeft = btn.offsetLeft;
let missClickCount = 0;


//! all of this was usefull in the structure before, keep it for legacy ?
// function gameActive(){
//   // btn.addEventListener('click', clicking)
  
//   //* those might be important, not sur why ??
  // btn.addEventListener('mousedown',function(){
  //     btn.classList.add('btn-active');
  //   });
  //   btn.addEventListener('mousedown',function(){
  //       btn.classList.remove('btn-active');
  //     });
      

//* this function handle any click on the area of the game
//* but not when the aim is hit or not

function clicking(e) {
missClickCount += 1;
updateBoard()
  // let div = document.createElement('div');
  // div.classList.add('wave');
  // div.style.left = e.clientX - btnLeft + 'px';
  // div.style.top = e.clientY - btnTop + 'px';
  // btn.appendChild(div);

  // setTimeout(function(){
  //   div.classList.add('wave-ani');
  // });
  // setTimeout(function(){
  //   btn.removeChild(div);
  //   },1500);
  };


//* this is the function that return the result to the user
//* and stop all the features of the game

const displayedBest = document.querySelector('.best')

function result() {
  aim.classList.add('circle-inactive');
  timer.classList.add('hide');
  startBtn.classList.remove('hide');
  bestScore = hitCount > bestScore ? hitCount : bestScore;
  console.log(`you're accruacy is ${(hitCount / missClickCount) * 100}%`);
  displayedBest.textContent = `Best ${bestScore}`
  // btn.appendChild()

  startBtn.addEventListener("click", start);
  btn.removeEventListener('click', clicking)
}
