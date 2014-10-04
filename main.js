// alert("Let's fight!");

var userWeapon;
var userChose;
var startOver = function() {
  document.getElementById("result").innerHTML = "";
  document.getElementById("reset").innerHTML = "";
  var compChoice = Math.floor(Math.random() * 3);
    if (compChoice == 1) {
      compWeapon = "rock";
    } else if (compChoice == 2) {
      compWeapon = "paper";
    } else {
      compWeapon = "scissors";
    };
    console.log(compWeapon);
};
var chooseRock = function() { 
  userWeapon = "rock";
  document.getElementById("userChose").innerHTML = "You chose " + userWeapon + "!";
};
var choosePaper = function() {
  userWeapon = "paper";
  document.getElementById("userChose").innerHTML = "You chose " + userWeapon + "!";
};
var chooseScissors = function() {
  userWeapon = "scissors";
  document.getElementById("userChose").innerHTML = "You chose " + userWeapon + "!";
};

var compChoice = Math.floor(Math.random() * 3);
if (compChoice == 1) {
  compWeapon = "rock";
} else if (compChoice == 2) {
  compWeapon = "paper";
} else {
  compWeapon = "scissors";
};
console.log(compWeapon);

var compChoose = function() {
  document.getElementById("compChose").innerHTML = "I chose " + compWeapon + " though.";
  document.getElementById("okay").innerHTML = "Okay";
};

document.getElementById("button").addEventListener("click", function() {
    document.getElementById("compChose").innerHTML = "I chose " + compWeapon + " though.";
    document.getElementById("okay").innerHTML = "Okay";
});


var game = function() {
  if (userWeapon == "rock") {
    if (compWeapon == "rock") {
          document.getElementById("userChose").innerHTML = "";
          document.getElementById("compChose").innerHTML = "";
          document.getElementById("result").innerHTML = "I guess everyone both wins and loses.";
          document.getElementById("reset").innerHTML = "Reset";
          document.getElementById("okay").innerHTML = "";
    } else if (compWeapon = "paper") {
          document.getElementById("userChose").innerHTML = "";
          document.getElementById("compChose").innerHTML = "";
          document.getElementById("result").innerHTML = "OH SORRY I GUESS I WON";
          document.getElementById("reset").innerHTML = "Reset";
          document.getElementById("okay").innerHTML = "";
    } else {
          document.getElementById("userChose").innerHTML = "";
          document.getElementById("compChose").innerHTML = "";
          document.getElementById("result").innerHTML = "You win!";
          document.getElementById("reset").innerHTML = "Reset";
          document.getElementById("okay").innerHTML = "";
    };
  } else if (userWeapon == "paper") {
      if (compWeapon == "rock") {
          document.getElementById("userChose").innerHTML = "";
          document.getElementById("compChose").innerHTML = "";
          document.getElementById("result").innerHTML = "You win!";
          document.getElementById("reset").innerHTML = "Reset";
          document.getElementById("okay").innerHTML = "";
      } else if (compWeapon == "paper") {
          document.getElementById("userChose").innerHTML = "";
          document.getElementById("compChose").innerHTML = "";
          document.getElementById("result").innerHTML = "I hope we can both feel fine about this result.";
          document.getElementById("reset").innerHTML = "Reset";
          document.getElementById("okay").innerHTML = "";
      } else {
          document.getElementById("userChose").innerHTML = "";
          document.getElementById("compChose").innerHTML = "";
          document.getElementById("result").innerHTML = "SNIP I WIN";
          document.getElementById("reset").innerHTML = "Reset";
          document.getElementById("okay").innerHTML = "";
      };

  } else if (userWeapon == "scissors") {
      if (compWeapon == "rock") {
          document.getElementById("userChose").innerHTML = "";
          document.getElementById("compChose").innerHTML = "";
          document.getElementById("result").innerHTML = "SMASH";
          document.getElementById("reset").innerHTML = "Reset";
          document.getElementById("okay").innerHTML = "";
      } else if (compWeapon == "paper") {
          document.getElementById("userChose").innerHTML = "";
          document.getElementById("compChose").innerHTML = "";
          document.getElementById("result").innerHTML = "You win!";
          document.getElementById("reset").innerHTML = "Reset";
          document.getElementById("okay").innerHTML = "";
      } else if (compWeapon == "scissors") {
          document.getElementById("userChose").innerHTML = "";
          document.getElementById("compChose").innerHTML = "";
          document.getElementById("result").innerHTML = "Oh..I guess, truce?";
          document.getElementById("reset").innerHTML = "Reset";
          document.getElementById("okay").innerHTML = "";
      } else {
        console.log("nice try");
      };
    } else {
      console.log("nice try");
    };
};

document.getElementById("okay").addEventListener("click", function() {
  game();
})

