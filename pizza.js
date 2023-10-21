var anchoviesPizzaScore = 0;
var  pepperoniPizzaScore = 4;
var  hawaiianPizzaScore = 4;
var  chickenBaconRanchPizzaScore = 6;

var output =  anchoviesPizzaScore < pepperoniPizzaScore;
document.getElementById("viswa").innerHTML=output;

var output = chickenBaconRanchPizzaScore > hawaiianPizzaScore;
document.getElementById("viswa1").innerHTML=output;

var output =  hawaiianPizzaScore > pepperoniPizzaScore;
document.getElementById("viswa2").innerHTML=output;
var output =  pepperoniPizzaScore <= chickenBaconRanchPizzaScore;
document.getElementById("viswa3").innerHTML=output;
var output = hawaiianPizzaScore >= pepperoniPizzaScore;
document.getElementById("viswa4").innerHTML=output;

console.log( anchoviesPizzaScore < pepperoniPizzaScore);
console.log(chickenBaconRanchPizzaScore > hawaiianPizzaScore);
console.log( hawaiianPizzaScore > pepperoniPizzaScore);
console.log( pepperoniPizzaScore <= chickenBaconRanchPizzaScore);
console.log(hawaiianPizzaScore >= pepperoniPizzaScore);