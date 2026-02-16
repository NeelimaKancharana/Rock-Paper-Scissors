let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

const gencomputerchoice=()=>
{
    let options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawgame=()=>
{
    console.log("game was draw");
    msg.innerText="Game was draw , play again.";
    msg.style.backgroundColor= "#081b31";
}
const showwinner=(userwin,userchoice,compchoice)=>
{
    if(userwin)
    {
        userscore++;
        userscorepara.innerText=userscore;
        console.log("you win");
        msg.innerText=`you win! ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        console.log("you lose");
        msg.innerText=`you lose!  ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userchoice)=>
{
    console.log("user choice=",userchoice);
    // generate computer choice  ----> modular programming
    const compchoice= gencomputerchoice();
    console.log("computer choice=",compchoice);

    if(userchoice === compchoice)
    {
        drawgame();
        //console.log("game was draw");
    }
    else{
        let userwin=true;
        if(userchoice === "rock")
        {
            //  scissors,paper
           userwin =  compchoice === "paper" ? false : true;
        }
        else if(userchoice === "paper")
        {
            // rock,scissors
            userwin=compchoice === "scissors" ?  false : true;
        }
        else
        {
             //rock,paper
            userwin = compchoice==="rock" ? false : true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
};


choices.forEach((choice)=>
{
    choice.addEventListener("click", ()=>
    {
        const userchoice=choice.getAttribute("id");
        console.log("choice was clicked");
        playGame(userchoice)

    })
})
