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

// svgBox.addEventListener('click', shoot);


(function(){
    let btn = document.querySelector('.btn');
    let btnTop = btn.offsetTop;
    let btnLeft = btn.offsetLeft;
    
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