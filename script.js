console.log("Welcome to Tic-Tac-Toe");

let audio= new Audio("tictactoe/music.mp3");
let aturn= new Audio("tictactoe/ting.mp3");
let gameover= new Audio("tictactoe/gameover.mp3");
let turn="X";
let game=false;


//Function to change the aturn
const changeturn=()=>{
    return turn==="X"?"0":"X"
}


//Function to check for a win
const checkwin=()=>{
    let boxtext=document.getElementsByClassName('boxtext')
let win= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
]
win.forEach(e=>{
    if((boxtext[e[0]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[2]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[0]].innerText!=='') ){
        document.querySelector('.info').innerText=boxtext[e[0]].innerText+" won"
        game=true
        document.querySelector('.gif').getElementsByTagName("img")[0].style.width="20vw"
    }
})
}



//Game Logic
//audio.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext= element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn = changeturn();
            aturn.play();
            checkwin();
            if(!game){
                document.getElementsByClassName("info")[0].innerText="Turn for "+ turn;
            }
        }
    })
})



reset.addEventListener("click",()=>{
    let boxtext=document.querySelectorAll('.boxtext')
    Array.from(boxtext).forEach(element=>{
        element.innerText=""
    })
    turn = 'X'
    game=false
    document.getElementsByClassName("info")[0].innerText="Turn for "+ turn;
    document.querySelector('.gif').getElementsByTagName("img")[0].style.width="0px"


})


