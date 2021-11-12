//HTML elements
const statusDiv = document.querySelector('.status');
const resetDiv = document.querySelector('.reset');
const cellDivs = document.querySelectorAll('.game-cell');

//game variables
let runGame = true;
let nextX = true;


//functions
const handleWin = (letter) => {
    runGame = false;


    if (letter === 'x'){
        statusDiv.innerHTML = `${letter} has won!`;
        } else {
        statusDiv.innerHTML = `<strong>${letter}has won!<strong>`;
        }
};

const checkGameStatus = () => {
    const cell1 = cellDivs[0].classList[2];
    const cell2 = cellDivs[1].classList[2];
    const cell3 = cellDivs[2].classList[2];
    const cell4 = cellDivs[3].classList[2];
    const cell5 = cellDivs[4].classList[2];
    const cell6 = cellDivs[5].classList[2];
    const cell7 = cellDivs[6].classList[2];
    const cell8 = cellDivs[7].classList[2];
    const cell9 = cellDivs[8].classList[2];

    // winner conditions
    if (cell1 && cell1 === cell2 && cell1 === cell3){
        handleWin(cell1);
        cellDivs[0].classList.add('won');
        cellDivs[1].classList.add('won');
        cellDivs[2].classList.add('won');

    } else if(cell4 && cell4 === cell5 && cell4 ===cell6){
        handleWin(cell4);
        cellDivs[3].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[5].classList.add('won');

    } else if (cell7 && cell7 === cell8 && cell7 ===cell9){
        handleWin(cell7);
        cellDivs[6].classList.add('won');
        cellDivs[7].classList.add('won');
        cellDivs[8].classList.add('won');
    } else if (cell1 && cell1 === cell4 && cell1 ===cell7){
        handleWin(cell1);
        cellDivs[0].classList.add('won');
        cellDivs[3].classList.add('won');
        cellDivs[6].classList.add('won');
    } else if (cell2 && cell2 === cell5 && cell2 ===cell8){
        handleWin(cell2);
        cellDivs[1].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[7].classList.add('won');
    } else if (cell3 && cell3 === cell6 && cell3 ===cell9){
        handleWin(cell3);
        cellDivs[2].classList.add('won');
        cellDivs[5].classList.add('won');
        cellDivs[8].classList.add('won');
    } else if (cell1 && cell1 === cell5 && cell1 ===cell9){
        handleWin(cell1);
        cellDivs[0].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[8].classList.add('won');
    } else if (cell3 && cell3 === cell5 && cell3 ===cell7){
        handleWin(cell3);
        cellDivs[2].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[6].classList.add('won');
    } else if (cell1&&cell2&&cell3&&cell4&&cell5&&cell6&&cell7&&cell8&&cell9){
        runGame =false;
        statusDiv.innerHTML = 'Game is tied'
    } else {
        nextX = !nextX;
        if (nextX){
            statusDiv.innerHTML = '× is next';
        } else {
            statusDiv.innerHTML = `<span>○ is next <span>`;
        }
    }
};


//event handlers
const handleReset = (e) => {
    nextX = true;
    statusDiv.innerHTML = '× is next';
    for(const cellDiv of cellDivs){
        cellDiv.classList.remove('×');
        cellDiv.classList.remove('○');
        cellDiv.classList.remove('won');

    }
    runGame = true;

}


const handleCellClick = (e) => {
    const classList = e.target.classList;
    // console.log(e.target.classList);
    const location = classList[1];
    // console.log("location", location);
    if (!runGame || classList[2] === '×' || classList[2] === '○'){
        return;
    }

    if (nextX) {
        classList.add('×');
        checkGameStatus();
    } else{
        classList.add('○');
        checkGameStatus();
    }
};

//event listeners
resetDiv.addEventListener('click', handleReset);

for (const cellDiv of cellDivs) {
    cellDiv.addEventListener('click', handleCellClick);
}

