let thePNG = ""

const theOpeningMoves = document.querySelector('#theOpeningMoves');
let moves = theOpeningMoves.getElementsByTagName("*");
moves = Array.from(moves);

const formatPNG = (move) => {
    thePNG = thePNG.concat(' ', move)
}

const variation = (thisVar) => {

}








const variation = () => {
    moves.forEach(el => {
        console.log('-----------')
        const elClass = el.className;
        
        // console.log(el);
        // console.log(elClass);
    
        if (typeof elClass != 'string') {
            // console.log(typeof elClass)
            return;
        }
        
        
        // console.log(typeof elClass)
        if (typeof elClass == 'string' && elClass.includes("whiteMove") || elClass.includes("blackMove")) {
            console.log(el.dataset.san);
            formatPNG(el.dataset.san);
        }
    });
}

variation()
console.log(thePNG)


