// * this is for adding all recent friend on nytro type !!



const allButons = document.querySelectorAll('.btn.btn--positive.btn--thinner:not(.is-success)')

const timer = ms => new Promise(res => setTimeout(res, ms))

let i = 0

async function load () {
  for (const [index, one] of allButons.entries()) {
    console.log(one);
    console.log(index);
    one.click();
    i++;
    if (i > 6) {
      window.scroll({
        top: window.scrollY + 500,
        behavior: 'smooth'
      });
      i = 0
    }
    await timer(Math.random() * 900 + 100);
  }
}

load();

