const gameBoard = document.querySelector("#gameBoard");
const conTxt = gameBoard.getContext("2d"); // 2d is one of the two canvas tags
const scoreCnt = document.querySelector("#scoreCnt"); 
const resetButton = document.querySelector("resetButton");

const myGameWidth = gameBoard.width; // define the width of the board assigned in canvas method
const myGameHeight = gameBoard.height; // define the height of the board assigned in canvas method

const backgroundBoard = "beige";
const snakeColor = 'green';
const snakeBorder = 'green';
const baitColor = 'red';

const boardSize = 25; // 25 is the size of a unit per pixel in the board 

let running = false;
let xAxis = boardSize; // snake will be moving 25 pixels in the x-Axis
let yAxis = 0; // won't be moving for now, 

let baitXaxis;
let baitYaxis;
let score = 0;

// create the snake graphically 
let snake = [
    {x: boardSize * 4 , y:0},
    {x: boardSize * 3 , y:0},
    {x: boardSize * 2 , y:0},
    {x: boardSize , y: 0},
    {x:0, y:0}
    
];

window.addEventListener('keydown' , changeDirection);
window.resetButton.addEventListener('click' , resetGame); 

playGame();




function playGame(){
    run = true;
    scoreCnt.textContent = score;
    createBait();
    inpBait();

};

function nextMove(){
    if (run){
        setTimeout(() =>{
            clearBoard();
            inpBait();
            moveSnake();
            inpSnake();
            gameResult();
            nextMove();
        }, 40);
    }else{
        showGameResult();
    }
};

function clearBoard(){
    conTxt.fillStyle = backgroundBoard;
    conTxt.fillRect(0 ,0, myGameWidth, myGameHeight);
};

function createBait(){
    function apple(min , max){
        const num = Math.round((Math.random() * (max - min) + min) / boardSize) * boardSize;
        return num;
    }
    appleX = apple(0 , myGameWidth - boardSize);
    appleY = apple(0 , myGameWidth - boardSize);
};

function inpBait(){
    conTxt.fillStyle = baitColor;
    conTxt.fillRect(appleX, appleY, boardSize, boardSize);
};

function moveSnake(){};

function inpSnake(){
    conTxt.fillStyle = snakeColor;
    conTxt.strokeStyle = snakeBorder;
    snake.forEach(snakePart => {
        conTxt.fillRect(snakePart.x , snakePart.y, boardSize, boardSize);
        conTxt.strokeRect(snakePart.x , snakePart.y, boardSize, boardSize);
    })
};

function changeDirection(){};

function gameResult(){};

function showGameResult(){};

function resetGame(){};






