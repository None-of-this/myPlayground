
// const selectingNextChapter = ()
let thePNG = ""
let wholeChapter = document.querySelector('#theOpeningMoves');

const chapterFlow = async () => {

    wholeChapter = document.querySelector('#theOpeningMoves');
    // variation(wholeChapter);
    
}

const generator = (input) => {
    thePNG = thePNG + ' ' + input;
}

const variation = (thisVar) => {
    let list = thisVar.children
    console.log('___________')
    for (let item of list) {
        console.log(`this item = ${item}`)
        console.log(item)
        console.log(`this list = ${list}`)
        console.log(list)
        // console.log(item.className)
        if(item.tagName === 'svg'){
            return;
        }

        if(item.className.includes('commentMoveSmallMargin')){

        }
        
        if(item.className.includes('commentTopvar') || item.className.includes('commentSubvar')){
            thePNG = thePNG + "("
            variation(item);
            thePNG = thePNG + ")"
        }
        else if (item.className.includes('openingNum')){
            generator(item.innerText)
        }
        else if(item.dataset.san){
            generator(item.innerText);
            variation(item);
        }
        else if(item.className.includes('commentInVariation')){
            thePNG = thePNG + "{"
            generator(item.innerText)
            variation(item);
            thePNG = thePNG + "}"
        }
        else {
            variation(item)
        }
    }
    // chapterFlow()
}



const link = document.createElement("a");
const file = new Blob([thePNG], { type: 'text/plain' });
link.href = URL.createObjectURL(file);
let chapterTitle = document.querySelector('#theOpeningTitle')
link.download = `${chapterTitle.innerText}.pgn`;
link.click();
URL.revokeObjectURL(link.href);

