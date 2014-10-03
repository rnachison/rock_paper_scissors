alert("Let's fight!");
var choose = function() { 
  var userWeapon = document.getElementById('userChoice').value;
};
var compChoice = Math.floor(Math.random() * 6) + 1;
if (compChoice <= 2) {
  compWeapon = "rock";
} else if (compChoice <= 4) {
  compWeapon = "paper";
} else {
  compWeapon = "scissors";
};
console.log(compWeapon);