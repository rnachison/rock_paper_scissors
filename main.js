alert("Let's fight!");

var userWeapon;
var userChose;
var chooseRock = function() { 
  userWeapon = "rock";
};
var choosePaper = function() {
  userWeapon = "paper";
};
var chooseScissors = function() {
  userWeapon = "scissors";
}

var compChoice = Math.floor(Math.random() * 3);
if (compChoice = 1) {
  compWeapon = "rock";
} else if (compChoice = 2) {
  compWeapon = "paper";
} else {
  compWeapon = "scissors";
};
console.log(compWeapon);

var userChoseText = document.createElement('text');
userChoseText.innerHTML = userWeapon;
document.getElementById("userChose").appendChild(userChoseText);

/*var userChoseText = function() {
var userWeaponNode = document.createTextNode(userWeapon);
node.appendChild(userWeaponNode);
document.getElementById("userChose").appendChild(node);
}

var compChoseText = function() {
var compWeaponNode=document.createTextNode(compWeapon);
node.appendChild(compWeaponNode);
document.getElementById("compChose").appendChild(node);
}*/

userChoseText;
// compChoseText();