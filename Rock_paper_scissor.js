let elements=document.querySelectorAll("#element");

let display=document.querySelector("#display");
let user=document.querySelector("#userScore");
let computer1=document.querySelector("#computerScore");

let userScore=0;
let computerScore=0;
const computerChoice=()=>{
    const array=["rock","paper","scissor"];
    const option=Math.floor(Math.random()*3);
    return array[option];
}
const game=(userChoice)=>{
     let computer=computerChoice();
     if(computer==userChoice){
        display.innerText="Game Draw!";
        display.style.color="white";
     }
     else if((computer=="rock" && userChoice=="paper") || (computer=="paper" && userChoice=="scissor")||(computer=="scissor" && userChoice=="rock")){
        let winner=`you won! ${userChoice} beats ${computer}`;
        display.innerText=winner;
        userScore++;
        user.innerText=userScore;
        display.style.color="green";
     }
     else if((computer=="paper" && userChoice=="rock")|| (computer=="scissor" && userChoice=="paper")||(computer=="rock" && userChoice=="scissor")){
        let winner=`computer won! ${computer} beats ${userChoice}`;
        display.innerText=winner;
        computerScore++;
        computer1.innerText=computerScore;
        display.style.color="red";
     }
}
elements.forEach((element)=>{
    element.addEventListener("click",()=>{
        let userChoice=element.getAttribute("class");
        game(userChoice);
    })
});
