let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

/* COMPUTER CHOICE */

const genCompChoice = () => {

    const options = ["rock", "paper", "scissors"];

    const randomIndex = Math.floor(Math.random() * 3);

    return options[randomIndex];
};

/* DRAW */

const drawGame = (choice) => {

    msg.innerText = `🤝 Draw! Both chose ${choice}`;

    msg.style.backgroundColor = "#1e293b";
};

/* SHOW WINNER */

const showWinner = (userWin, userChoice, compChoice) => {

    if(userWin){

        userScore++;

        userScorePara.innerText = userScore;

        msg.innerText =
        `🔥 You Win! ${userChoice} beats ${compChoice}`;

        msg.style.backgroundColor = "green";

    } else {

        compScore++;

        compScorePara.innerText = compScore;

        msg.innerText =
        `❌ You Lose! ${compChoice} beats ${userChoice}`;

        msg.style.backgroundColor = "red";
    }
};

/* GAME */

const playGame = (userChoice) => {

    const compChoice = genCompChoice();

    if(userChoice === compChoice){

        drawGame(userChoice);

    } else {

        let userWin = true;

        if(userChoice === "rock"){

            userWin = compChoice === "paper"
            ? false
            : true;

        } else if(userChoice === "paper"){

            userWin = compChoice === "scissors"
            ? false
            : true;

        } else {

            userWin = compChoice === "rock"
            ? false
            : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
};

/* CLICK EVENTS */

choices.forEach((choice) => {

    choice.addEventListener("click", () => {

        const userChoice = choice.getAttribute("id");

        playGame(userChoice);
    });
});