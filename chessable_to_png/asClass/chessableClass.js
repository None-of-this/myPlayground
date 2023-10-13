let thePgn = ''
let mainLineNum = 0
let chapter = [];

const chapterFlow = () => {
    mainLineNum = 0
    chapter = [];
    let wholeChapter = document.querySelector('#theOpeningMoves');
    let theOpeningTitle = document.querySelector('#theOpeningTitle').textContent
    thePgn = thePgn + `[Event "${theOpeningTitle}"]
    [Site ""]
    [Result ""]
    [UTCDate ""]
    [UTCTime ""]
    [Variant ""]
    [ECO ""]
    [Opening ""]
    [Annotator ""]\n\n`
    parseVariation(wholeChapter, chapter);
    formatToPGN(chapter);
    thePgn = thePgn + " *\n\n\n"
    
    let nextButton = document.querySelector('#variation-btn-next-variation');
    if (true) {
        // thePGN = thePGN.replace('*','');
        // thePGN = thePGN.replaceAll('+','');
        downloadPNG(thePgn);
        return
    }
    nextButton.click();
    setTimeout(chapterFlow, 3000);
}

class Move {
    constructor(rawMove) {
        this.fen = rawMove.dataset.fen
        this.move = rawMove.dataset.san
        this.absoluteMoveNum = this.calcAbsoluteMoveNum()
        this.moveNum = this.calcMoveNum()
        this.innerText = rawMove.innerText
    }

    calcAbsoluteMoveNum() {
        let fenArray = this.fen.split(" ")
        let absolMoveNum = (parseInt(fenArray.slice(-1), 10) - 1) * 2;
        if (fenArray[1] == "b") {
            absolMoveNum += 1;
        }
        return absolMoveNum
    }

    calcMoveNum() {
        let fenArray = this.fen.split(" ")
        let moveNum = parseInt(fenArray.slice(-1), 10)
        if (fenArray[1] == "w") {
            moveNum -= 1;
        }
        return fenArray[1] == "w" ? `${moveNum}...` : `${moveNum}.`
    }
}

class SubVar {
    constructor(rawSubVar) {
        this.rawSubVar = rawSubVar
        this.subVar = []
    }

    fillVar() {
        parseVariation(this.rawSubVar, this.subVar)
    }
}


class Comment {
    constructor(rawComment) {
        this.text = rawComment.innerText
    }
}

const parseVariation = (RawVariation, currentChapter) => {
    let list = RawVariation.children
    for (let item of list) {

        if (item.className.includes('commentTopvar') || item.className.includes('commentSubvar')) {
            let subVar = new SubVar(item);
            subVar.fillVar();
            currentChapter.push(subVar)
        }
        else if (item.className.includes('commentInVariation')) {
            currentChapter.push(new Comment(item))
        }
        else if (item.hasAttribute('data-san')) {
            currentChapter.push(new Move(item))
            parseVariation(item, currentChapter)
        }
        else {
            parseVariation(item, currentChapter)
        }
    }
}


const formatToPGN = objectChapter => {
    objectChapter.forEach(element => {
        if (element.constructor.name === 'Move') {
            addAMove(element);
            mainLineNum = element.absoluteMoveNum
        }
        else if (element.constructor.name === 'Comment') {
            addAComment(element)
        }
        else if (element.constructor.name === 'SubVar') {
            formatSubToPGN(element)
        }
    });
}

const formatSubToPGN = subVar => {
    let firstMove = subVar.subVar.find((element) => element.constructor.name === 'Move')
    if (firstMove.absoluteMoveNum > mainLineNum || firstMove.san === '--') {
        thePgn = thePgn + '{'
        subVar.subVar.forEach((element) => {
            if (element.constructor.name === 'Move') {
                thePgn = thePgn + ` ${element.innerText} `
            }
            else if (element.constructor.name === 'Comment') {
                thePgn = thePgn + ` ${element.text} `
            }
            else {
                formatToPGN(element)
            }
        })
        thePgn = thePgn + '}'
    }
    else {
        if (subVar.subVar[0].constructor.name === 'Comment') {
            addEveryFirstComment(subVar)
        } else {
            thePgn = thePgn + '('
            formatToPGN(subVar.subVar)
            thePgn = thePgn + ')'
        }
    }
}

const addEveryFirstComment = subVar => {
    let shouldSkip = false
    thePgn = thePgn + '{'
    subVar.subVar.forEach((element) => {
        if(element.constructor.name === 'Comment' && !shouldSkip) {
            addAComment(subVar.subVar[0]);
            subVar.subVar = subVar.subVar.slice(1);
        } else {
            shouldSkip = true;
        }
    }
    )
    thePgn = thePgn + '}'
    formatSubToPGN(subVar)
}

const addAMove = move => {
    let toAdd = `${move.moveNum} ${move.move} `
    thePgn = thePgn + toAdd
}

const addAComment = comment => {
    let toAdd = `{ ${comment.text} } `
    thePgn = thePgn + toAdd
}

const downloadPNG = (thePGN) => {
    const link = document.createElement("a");
    const file = new Blob([thePGN], { type: 'text/plain' });
    link.href = URL.createObjectURL(file);
    let title = document.querySelector('.top-breadcrumbs').lastElementChild
    link.download = `${title.innerText}.pgn`;
    link.click();
    URL.revokeObjectURL(link.href);
}

chapterFlow()