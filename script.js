const gridElements = document.querySelectorAll('.gridElement');
const restartButton = document.querySelector('#restartButton');
const scoreXElement = document.getElementById('scoreX');
const scoreOElement = document.getElementById('scoreO');
const winMessage = document.querySelector('.winMessage');
let scoreX = 0;
let scoreO = 0;
// counter decides if we add X or Y class
let counter = 0;
startGame();

function startGame() {
    gridElements.forEach(function (element) {

        //event occurs when clicking
        element.addEventListener('click', function () {
            if (!element.classList.contains('O') && !element.classList.contains('X')) {
                if (counter % 2 === 0) {
                    element.classList.add('O');
                    element.classList.remove('O-hovered');
                } else {
                    element.classList.add('X');
                    element.classList.remove('X-hovered');
                }
                counter++;
                checkIf_O_Win();
                checkIf_X_Win();
            }
            // console.log('KLIKNIETO ELEMENT');

        })

        //evenet occurs when entering grid element
        element.addEventListener('mouseover', function () {
            if (!element.classList.contains('O') && !element.classList.contains('X')) {
                if (counter % 2 === 0) {
                    element.classList.add('O-hovered');
                } else {
                    element.classList.add('X-hovered');
                }
            }
        })

        //event occurs when leaving grid element
        element.addEventListener('mouseout', function () {
            if (!element.classList.contains('O') && !element.classList.contains('X')) {
                if (counter % 2 === 0) {
                    element.classList.remove('O-hovered');
                } else {
                    element.classList.remove('X-hovered');
                }
            }
        })


    })
    scoreXElement.innerHTML = scoreX;
    scoreOElement.innerHTML = scoreO;
    restartButton.addEventListener('click', restartGame)

}





function restartGame() {


    //reset counter add remove all X/Y/win classes
    counter = 0;
    gridElements.forEach(function (element) {
        if (element.classList.contains('O')) element.classList.remove('O');
        if (element.classList.contains('X')) element.classList.remove('X');
        if (element.classList.contains('win')) element.classList.remove('win');


    })
    if (winMessage.classList.contains('active')) winMessage.classList.remove('active');
    startGame();
}
//checking 8 possibiliites when O wins
function checkIf_O_Win() {

    let value0 = gridElements[0].classList.contains('O');
    let value1 = gridElements[1].classList.contains('O');
    let value2 = gridElements[2].classList.contains('O');
    let value3 = gridElements[3].classList.contains('O');
    let value4 = gridElements[4].classList.contains('O');
    let value5 = gridElements[5].classList.contains('O');
    let value6 = gridElements[6].classList.contains('O');
    let value7 = gridElements[7].classList.contains('O');
    let value8 = gridElements[8].classList.contains('O');

    if (value0 && value1 && value2) {

        gridElements[0].classList.add('win');
        gridElements[1].classList.add('win');
        gridElements[2].classList.add('win');

        stopGame('O');
        return;
    }

    if (value3 && value4 && value5) {
        gridElements[3].classList.add('win');
        gridElements[4].classList.add('win');
        gridElements[5].classList.add('win');
        stopGame('O');
        return;
    }

    if (value6 && value7 && value8) {
        gridElements[6].classList.add('win');
        gridElements[7].classList.add('win');
        gridElements[8].classList.add('win');
        stopGame('O');
        return;
    }

    if (value0 && value3 && value6) {

        gridElements[0].classList.add('win');
        gridElements[3].classList.add('win');
        gridElements[6].classList.add('win');
        stopGame('O');
        return;
    }

    if (value1 && value4 && value7) {

        gridElements[1].classList.add('win');
        gridElements[4].classList.add('win');
        gridElements[7].classList.add('win');
        stopGame('O');
        return;
    }

    if (value2 && value5 && value8) {

        gridElements[2].classList.add('win');
        gridElements[5].classList.add('win');
        gridElements[8].classList.add('win');
        stopGame('O');
        return;
    }

    if (value0 && value4 && value8) {

        gridElements[0].classList.add('win');
        gridElements[4].classList.add('win');
        gridElements[8].classList.add('win');
        stopGame('O');
        return;
    }

    if (value2 && value4 && value6) {

        gridElements[2].classList.add('win');
        gridElements[4].classList.add('win');
        gridElements[6].classList.add('win');
        stopGame('O');
        return;
    }


}
//checking 8 possibiliites when X wins
function checkIf_X_Win() {

    let value0 = gridElements[0].classList.contains('X');
    let value1 = gridElements[1].classList.contains('X');
    let value2 = gridElements[2].classList.contains('X');
    let value3 = gridElements[3].classList.contains('X');
    let value4 = gridElements[4].classList.contains('X');
    let value5 = gridElements[5].classList.contains('X');
    let value6 = gridElements[6].classList.contains('X');
    let value7 = gridElements[7].classList.contains('X');
    let value8 = gridElements[8].classList.contains('X');

    if (value0 && value1 && value2) {
        gridElements[0].classList.add('win');
        gridElements[1].classList.add('win');
        gridElements[2].classList.add('win');


        stopGame('X');
        return;
    }

    if (value3 && value4 && value5) {

        gridElements[3].classList.add('win');
        gridElements[4].classList.add('win');
        gridElements[5].classList.add('win');

        stopGame('X');
        return;
    }

    if (value6 && value7 && value8) {

        gridElements[6].classList.add('win');
        gridElements[7].classList.add('win');
        gridElements[8].classList.add('win');

        stopGame('X');
        return;
    }

    if (value0 && value3 && value6) {
        gridElements[0].classList.add('win');
        gridElements[3].classList.add('win');
        gridElements[6].classList.add('win');

        stopGame('X');
        return;
    }

    if (value1 && value4 && value7) {

        gridElements[1].classList.add('win');
        gridElements[4].classList.add('win');
        gridElements[7].classList.add('win');

        stopGame('X');
        return;
    }

    if (value2 && value5 && value8) {

        gridElements[2].classList.add('win');
        gridElements[5].classList.add('win');
        gridElements[8].classList.add('win');

        stopGame('X');
        return;
    }

    if (value0 && value4 && value8) {

        gridElements[0].classList.add('win');
        gridElements[4].classList.add('win');
        gridElements[8].classList.add('win');

        stopGame('X');
        return;
    }

    if (value2 && value4 && value6) {

        gridElements[2].classList.add('win');
        gridElements[4].classList.add('win');
        gridElements[6].classList.add('win');

        stopGame('X');
        return;
    }

}

function stopGame(val) {

    if (val === "O") {
        scoreO++;
        winMessage.innerHTML = 'O WINS!'
    }
    if (val === "X") {
        scoreX++;
        winMessage.innerHTML = "X WINS!"
    }
    winMessage.classList.add('active');
}