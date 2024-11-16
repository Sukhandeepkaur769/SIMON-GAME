let gameSeq=[];
let userSeq=[];

//btn
let btns =["yellow","red","purple","blue"];
let started =false;
let level =0;

let h2 = document.querySelector("h2");
document.addEventListener("keyPress",function(){
    if(started == false){
        console.log("game is started");
        started = true;
        levelUp();
    }
});