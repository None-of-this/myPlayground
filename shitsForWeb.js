
const timer = ms => new Promise(res => setTimeout(res, ms))

async function load () {
  const allButons = document.querySelectorAll('[type="connect"]')
  
  for (const [index, one] of allButons.entries()) {
    console.log(one);
    console.log(index);
    one.click();
    setTimeout(() => {
      const accept = document.querySelector('[aria-label="Envoyer maintenant"]');
      console.log(accept);
      accept.click();
    }, "1000");
    await timer(Math.random() * 2000 + 1000);
  }
  setTimeout(scroll, 1000);
}


const scroll = () => {
  window.scroll({
    top: 900,
    behavior: 'smooth'
  });
  setTimeout(nextPage, "1000");
}

let i = 0

const nextPage = () => {
  i++;
  const nextPageBtn = document.querySelector('[aria-label="Suivant"]')
  if (nextPageBtn) {
    nextPageBtn.click()
  } else {
    console.log("next page not found");
    setTimeout(nextPage, "1000")
  }
  // const pagesList = document.querySelector(".artdeco-pagination__pages.artdeco-pagination__pages--number");
  // if (pagesList) {
  //   const pages = pagesList.querySelectorAll('.ember-view');
  //   pages[i].firstElementChild.click();
  // } else {
  //   console.log('nextPage not fount')
  // }
  setTimeout(load, "8000");
}

load();