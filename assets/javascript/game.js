// Beginning of game needs to reset all buttonValues

// these variables are based on HTML "id" tags
var scoreTarget
var buttonTally = 0;
var wins = 0;
var losses = 0;
var phil = 0;

// Need to generate a random scoreTarget automatically

function randNum(){
	scoreTarget = Math.floor((Math.random()+1) * 40);

	buttonTally = 0
// Need to link C1, C2, C3, C4 to generate buttonValues

	button1 = Math.floor((Math.random()+1) * 2);
	button2 = Math.floor((Math.random()+1) * 3);
	button3 = Math.floor((Math.random()+1) * 4);
	button4 = Math.floor((Math.random()+1) * 5);

	document.getElementById("scoreTarget").innerHTML = "Target: "+scoreTarget;
	document.getElementById("buttonTally").innerHTML = buttonTally;	

	document.getElementById("wins").innerHTML = "Wins: "+wins;
	document.getElementById("losses").innerHTML = "Losses: "+losses;
}

randNum();

console.log(scoreTarget);
console.log(button1);
console.log(button2);
console.log(button3);
console.log(button4);

// Need to combine buttonValues into buttonTally

document.getElementById("crys1").addEventListener("click", function(){
	buttonTally += button1;
	document.getElementById("buttonTally").innerHTML = buttonTally;
	if (scoreTarget == buttonTally){
		wins ++;
		randNum();
	} 

	if (scoreTarget < buttonTally){
		losses ++;
		randNum();
	}});

document.getElementById("crys2").addEventListener("click", function(){
	buttonTally += button2;
	document.getElementById("buttonTally").innerHTML = buttonTally;
	if (scoreTarget == buttonTally){
		wins ++;
		randNum();
	} 

	if (scoreTarget < buttonTally){
		losses ++;
		randNum();
	}});

document.getElementById("crys3").addEventListener("click", function(){
	buttonTally += button3;
	document.getElementById("buttonTally").innerHTML = buttonTally;
	if (scoreTarget == buttonTally){
		wins ++;
		randNum();
	} 

	if (scoreTarget < buttonTally){
		losses ++;
		randNum();
	}});

document.getElementById("crys4").addEventListener("click", function(){
	buttonTally += button4;
	document.getElementById("buttonTally").innerHTML = buttonTally;
	if (scoreTarget == buttonTally){
		wins ++;
		randNum();
	} 

	if (scoreTarget < buttonTally){
		losses ++;
		randNum();
	}});

// Need to compare scoreTarget and buttonTally


// If scoreTarget=buttonTally, need to win++
// If scoreTarget<buttonTAlly, need to lose++


