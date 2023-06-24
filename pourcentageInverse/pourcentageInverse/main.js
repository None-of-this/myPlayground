import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

import _ from 'lodash';
import Chart from 'chart.js/auto';


const handleRange = (first, last) => {
  const range = _.range(first, last, 0.1);
  range.forEach(number => {
    calcPercent(number);
  });
  // console.log(numberToPercentArray)
}
const numberToPercentArray = []; 

const calcPercent = (number) => {
  const inversedNum = invert(number);
  const diff = inversedNum - number;
  const percent = diff / number * 100;
  console.log(`num :  ${number} inver : ${inversedNum} diff : ${diff} pourcent : ${percent}`);
  const numberToPercent = {number, diff};
  numberToPercentArray.push(numberToPercent);
}

const invert = (number) => {
  const inversedNum = String(number).split('').map(Number).reverse().join("");
  return inversedNum;
}

// calcPercent(24);
handleRange(10, 12);


(async function() {
  const data = numberToPercentArray;

  new Chart(
    document.getElementById('acquisitions'),
    {
      type: 'line',
      data: {
        labels: data.map(row => row.number),
        datasets: [
          {
            label: 'poucentage de la difference',
            data: data.map(row => row.diff)
          }
        ]
      }
    }
  );
})();
 
