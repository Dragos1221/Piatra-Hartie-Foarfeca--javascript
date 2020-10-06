var userScore = 0;
var pcScore = 0;
var score = document.getElementsByClassName("score_pc_user");
var messageP = document.getElementById("messageP");
const foarfece = document.getElementById("f");
const hartie = document.getElementById("h");
const piatra = document.getElementById("p");
var userDecision = document.getElementsByClassName("my_choice");
var pcDecision = document.getElementsByClassName("pc_choice");

var imgPiatra = document.createElement("img");
imgPiatra.src = "piatra.jpg";
var imgFoarfeca = document.createElement("img");
imgFoarfeca.src = "foarfece.jpg";
var imgHartie = document.createElement("img");
imgHartie.src = "hartie.jpg";
var imgPiatra2 = document.createElement("img");
imgPiatra2.src = "piatra.jpg";
var imgFoarfeca2 = document.createElement("img");
imgFoarfeca2.src = "foarfece.jpg";
var imgHartie2 = document.createElement("img");
imgHartie2.src = "hartie.jpg";

function pcChoice() {
  const choices = ["h", "p", "f"];
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

function game(choice) {
  var message = "";
  const pcRandomChoice = pcChoice();
  const rules = {
    h: ["p", imgHartie, imgHartie2, "Hartia acopera piatra!"],
    p: ["f", imgPiatra, imgPiatra2, "Piatra distruge hartia!"],
    f: ["h", imgFoarfeca, imgFoarfeca2, "Foarfeca taie hartia!"],
  };
  userDecision[0].innerHTML = "";
  userDecision[0].appendChild(rules[choice][1]);
  loading();
  pcDecision[0].innerHTML = "";
  pcDecision[0].appendChild(rules[pcRandomChoice][2]);
  if (choice == pcRandomChoice) {
    message = "Egalitate!";
  } else {
    if (rules[choice][0] == pcRandomChoice) {
      message = rules[choice][3] + "Ai castigat! :)";
      userScore += 1;
    } else {
      pcScore += 1;
      message = rules[pcRandomChoice][3] + "Ai pierdut! :(";
    }
  }
  messageP.innerHTML = message;
  console.log(score);
  score[0].innerHTML = userScore + ":" + pcScore;
}

function addEvents() {
  foarfece.addEventListener("click", () => {
    game("f");
  });
  hartie.addEventListener("click", () => {
    game("h");
  });
  piatra.addEventListener("click", () => {
    game("p");
  });
}

async function loading() {
  let spinnerWrapper = document.querySelector(".spinner-wrapper");
  spinnerWrapper.style.display = "flex";
  await wait(200);
  spinnerWrapper.style.display = "none";
}

function wait(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

addEvents();
