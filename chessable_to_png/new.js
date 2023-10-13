let thePGN = ""
let wholeChapter = document.querySelector('#theOpeningMoves');

const generator = (input) => {
    thePGN = thePGN + ' ' + input;
}

const variation = (thisVar) => {
    let list = thisVar.children;
    // console.log('___________');
    for (let item of list) {

        if (item.tagName === 'svg') {
            return;
        }

        if (item.className.includes('commentTopvar') || item.className.includes('commentSubvar')) {
            thePGN = thePGN + "("
            variation(item);
            thePGN = thePGN + ")"
        }
        else if (item.className.includes('openingNum')) {
            generator(item.innerText)
        }   
        else if (item.dataset.san) {
            // console.log(previousMove)
            generator(item.innerText);
            variation(item);
        }
        else if (item.className.includes('commentInVariation')) {
            thePGN = thePGN + "{"
            generator(item.innerText)
            variation(item);
            thePGN = thePGN + "}"
        }
        else {
            variation(item)
        }
    }
}



variation(wholeChapter);
