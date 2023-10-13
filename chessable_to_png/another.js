
    // const selectingNextChapter = ()
    let thePGN = ""
    let wholeChapter = document.querySelector('#theOpeningMoves');
    let previousMove = 0
    let variationState = false

    const chapterFlow = () => {
        wholeChapter = document.querySelector('#theOpeningMoves');
        thePGN = thePGN + `[Event "Alekhine's Defense: 5 ... 3.612960797611018"]
[Site "https://lichess.org/study/AP0Zt4VP/5FLobSdP"]
[Result "*"]
[UTCDate "2023.09.03"]
[UTCTime "23:14:47"]
[Variant "Standard"]
[ECO "B20"]
[Opening "Sicilian Defense"]
[Annotator "https://lichess.org/@/Ho-no-none"]\n\n`
        variation(wholeChapter);
        thePGN = thePGN + " *\n\n\n"
        
        let nextButton = document.querySelector('#variation-btn-next-variation');
        if (nextButton.disabled) {
            // thePGN = thePGN.replace('*','');
            thePGN = thePGN.replaceAll('+','');
            downloadPNG(thePGN);
            return
        }
        nextButton.click();
        setTimeout(chapterFlow, 3000);
    }

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

            // if (item.className.includes('commentMoveSmallMargin')) {

            // }

            if (item.className.includes('commentTopvar') || item.className.includes('commentSubvar')) {
                thePGN = thePGN + "("
                // variationState = true
                variation(item);
                // variationState = false
                thePGN = thePGN + ")"
            }
            else if (item.className.includes('openingNum')) {
                generator(item.innerText)
            }   
            else if (item.dataset.san) {

                let fen = item.dataset.fen.split(" ");
                let move = (parseInt(fen.slice(-1),10) - 1) * 2;
                if(fen[1] == "b"){
                    move += 1;
                }

                // if(move > previousMove && variationState ){
                //     console.log('okokokokokokokokokokokokokkokok')
                //     console.log(previousMove)
                //     console.log(move)
                //     console.log(item)
                //     console.log('**********************************')
                //     // lastParant = thePGN.lastIndexOf('(')
                //     // thePGN = thePGN.slice(0, lastParant) + thePGN.slice(lastParant + 1, thePGN.length);
                //     variationState = false
                //     previousMove = move
                // }

                console.log(previousMove)
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


    const downloadPNG = (thePGN) => {
        const link = document.createElement("a");
        const file = new Blob([thePGN], { type: 'text/plain' });
        link.href = URL.createObjectURL(file);
        let chapterTitle = "the grunfeld"
        link.download = `${chapterTitle.innerText}.pgn`;
        link.click();
        URL.revokeObjectURL(link.href);
    }

    chapterFlow()
