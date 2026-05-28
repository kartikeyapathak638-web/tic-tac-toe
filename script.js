console.log("Welcome To Tic Tac Toe");
let boxes = document.getElementsByClassName("box");
let info = document.getElementById("info");
let button = document.getElementById("reset");
let video = document.getElementById("vid");
let boxtext = document.getElementsByClassName("boxtext");
let turn = "X";
let gameOver = false;
let win = new Audio("vikram_rolex_bgm.mp3")

let audioTurn = new Audio("turn.mp3");
const changeTurn = () =>{
    return turn === "X"?"0":"X";
}

const checkWin = () =>{
    let wins = [
        [0,1,2],
        [3,4,5],  
        [6,7,8],
        [0,3,6],
        [1,4,7],    
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            info.innerText = boxtext[e[0]].innerText + " Won";
            win.play();
            gameOver = true;
                video.classList.remove("hidden");
                
        }});
    
    checkDraw();
}

const checkDraw = () =>{
    if(gameOver !== true){
        let isDraw = true;
        let boxText = document.querySelectorAll(".boxtext");
        Array.from(boxText).forEach(element =>{
            if(element.innerText === ""){
                isDraw = false;
            }
        });
        if(isDraw == true){
            info.innerText = "It's a Draw";
            gameOver = true;
        }
    }
}

Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener("click",()=>{
        if(boxtext.innerText === ""){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(gameOver == false){
            document.getElementById("info") .innerText = "Turn For " + turn;
        }
        }
})});

button.addEventListener('click', ()=>{
  let boxText = document.querySelectorAll(".boxtext");
   Array.from(boxText).forEach(element =>{
    element.innerText = ""});
    gameOver = false;
    turn = "X";
    win.pause();
    win.currentTime = 0;
    video.classList.add("hidden");

    document.getElementById("info") .innerText = "Turn For " + turn;

   
 
}
    
);

checkWin();
if(!gameOver){
let isDraw = true;

 let boxText = document.querySelectorAll(".boxtext");
   Array.from(boxText).forEach(element =>{
   if(element.innerText === ""){
       isDraw = false;
   }
}
);
   if(isDraw){

       info.innerText = "It's a Draw";

    setTimeout(() => {
        
   Array.from(boxText).forEach(element =>{
    element.innerText = "";
});
    gameOver = false;
    turn = "X";
    document.getElementById("info").innerText = "Turn For " + turn;
 }
    , 1500);
   }  
}