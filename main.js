alert("Let's fight!");
var choose = function() { 
  var userWeapon = document.getElementById('userChoice').value;
};
var compChoice = Math.floor(Math.random() * 3);
if (compChoice = 1) {
  compWeapon = "rock";
} else if (compChoice = 2) {
  compWeapon = "paper";
} else {
  compWeapon = "scissors";
};
console.log(compWeapon);

var choseText = function() {
var compWeaponNode=document.createTextNode(compWeapon);
node.appendChild(compWeaponNode);
document.getElementById("chose").appendChild(node);
}