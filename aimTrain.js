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

// function shoot(event) {
//     console.log(event);
//     let wave = document.createElement('div');
//     wave.classList.add('wave');
//     wave.style.left = event.clientX;
//     wave.style.top = event.clientY;
//     svgBox.appendChild(wave);
//     setTimeout(function(){
//         wave.classList.add('wave-ani');
//         console.log(wave)
//     });
//     setTimeout(function(){
//             svgBox.removeChild(wave);
//           },1500);
//     }

(function(){
    var btn = document.querySelector('.btn');
    var btnTop = btn.offsetTop;
    var btnLeft = btn.offsetLeft;
    
    btn.addEventListener('click',function(e){
      var div = document.createElement('div');
      div.classList.add('wave');
      div.style.left = e.clientX - btnLeft - 3 + 'px';
      div.style.top = e.clientY - btnTop - 3 + 'px';
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