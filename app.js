let userScore = 0;
let ComputerScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#Computer-score");

const genCompChoice = () => {
    // rock , paper , scissors
    const options = ["Rock","Paper","Scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText="Game Drawn Keep it up!";
    msg.style.backgroundColor="#081b31";
}

const ShowWinner = (userwin, userChoice, compchoice) => {
    if(userwin) {
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText = `Congratulations! Your ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        ComputerScore++;
        compScorePara.innerText=ComputerScore;
        msg.innerText = `Hard Luck! Computer's ${compchoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (UserChoice) => {
    // Generate Computer Choice -> Modular Programming
    const compchoice = genCompChoice();

    if(UserChoice === compchoice){
    drawGame();
    } 
    else{
        let userwin = true;
        if(UserChoice === "Rock"){
            userwin = compchoice==="Paper" ? false : true;
        } else if(UserChoice === "Paper"){
            userwin = compchoice==="Scissors" ? false : true;
        }else{
            userwin= compchoice === "Rock" ? false : true;
        }
        ShowWinner(userwin, UserChoice, compchoice);
    }
};


choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click" , () => {
        const UserChoice = choice.getAttribute("id");
        playGame(UserChoice);
    })
})