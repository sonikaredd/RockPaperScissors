let userScore=0;//inital scores for both user and computer
let compScore=0;

const choices=document.querySelectorAll(".choice");//to acess all choices
const msg=document.querySelector("#msg");
const userScorePar=document.querySelector("#user-score");
const cmpScorePar=document.querySelector("#comp-score");


const genCompChoice=() =>{
    const options = ["rock","paper","scissors"];//array
    const randIdx=Math.floor( Math.random()*3);
    return options[randIdx];
};

const drawGame=() =>{
    console.log("Game was Draw");
    msg.innerText="Game was Draw.play again";
    msg.style.backgroundColor="rgb(7, 1, 55";
}

const showWinner=(userWin) =>{
    if(userWin){
        userScore++;
        userScorePar.innerText=userScore;
        console.log("you Win!");
        msg.innerText="you Win! ";
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        cmpScorePar.innerText=compScore;
        console.log("you lose!");
        msg.innerText="you lose!";
        msg.style.backgroundColor="red";
}

};

const playGame = (userChoice )=> {
    console.log("userchoice=", userChoice);
    //generate comp choices
    const compChoice=genCompChoice();
    console.log("comp choice=", compChoice);

    if(userChoice===compChoice){
        //draw game
        drawGame();
    }else{
        let userWin = true;
        if(userChoice==="rock"){
            //scissors,papers
            userWin = compChoice==="paper" ? false : true;
        }else if(userChoice==="paper"){
            //rock,scissors
            userWin = compChoice==="scissors" ? false : true;
        }else{
            //rock,paper
            userWin = compChoice=="rock" ? false : true;
        }
        showWinner(userWin);

    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() =>{//applying click event for all choices
        const userChoice= choice.getAttribute("id");//we also bring each choices id
        console.log("choice was clicked", userChoice);//after clicking a choice a msg was displayed
        playGame(userChoice);
    });
}); 