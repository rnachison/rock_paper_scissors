// alert("Let's fight!");

var userWeapon;
var userChose;
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
          document.getElementById("result").innerHTML = "I guess everyone both wins and loses.";
    } else if (compWeapon = "paper") {
          document.getElementById("result").innerHTML = "OH SORRY I GUESS I WON";
    } else {
          document.getElementById("result").innerHTML = "You win!";
    };
  } else if (userWeapon == "paper") {
      if (compWeapon == "rock") {
        document.getElementById("result").innerHTML = "You win!";
      } else if (compWeapon == "paper") {
            document.getElementById("result").innerHTML = "I hope we can both feel fine about this result.";
      } else {
            document.getElementById("result").innerHTML = "SNIP I WIN";
      };

  } else {
      if (compWeapon == "rock") {
          document.getElementById("result").innerHTML = "SMASH";
      } else if (compWeapon == "paper") {
          document.getElementById("result").innerHTML = "You win!";
      } else {
          document.getElementById("result").innerHTML = "Oh..I guess, truce?";
    };
  };
};


document.getElementById("okay").addEventListener("click", function() {
  game();
})


