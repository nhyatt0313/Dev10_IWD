/*
 *  Project: Lucky Sevens
 *	Created By: Nathan Hyatt
 *	Date Created: 9/19/18
 *	Date Modified: 9/20/18
 */

function rollDice() {
	var d1 = Math.floor(Math.random()*6)+1;
	var d2 = Math.floor(Math.random()*6)+1;
	return d1 + d2;
}
function playLuckySevens() {
	// initialize variables
	var startingBet = 0;
	var totalRolls = 0;
	var highAmmount = 0;
	var countAtHigh = 0;
	
	// set starting bet equal to input
	startingBet = Number(document.forms["diceRoll"]["bet"].value);
	
	if( (startingBet == "" )||(isNaN(startingBet))||(startingBet <= 0) ){
		alert("Starting bet must be filled in with a positive number greater than zero.");
		document.forms["diceRoll"]["bet"].focus();
		return false;	
	}
	
	// roll the dice until the money is gone
	var bet = startingBet;
	highAmmount = startingBet;
	while(bet != 0){
		
		// calculate winnings / losses
		var roll = rollDice();
		totalRolls++;

		if (roll == 7){
			bet += 4;
		}
		else{
			bet--;
		}
		
		// track the highest ammount of money held
		if (bet > highAmmount){
			highAmmount = bet;
			countAtHigh = totalRolls - 1; // roll count starts at zero
		}
	}
	// display the table
	document.getElementById("results").style.display = "block";
	// display the statistics
	document.getElementById("startingBet").innerText = "$ "+startingBet;
	document.getElementById("totalRolls").innerText = totalRolls;
	document.getElementById("highAmmount").innerText = "$ "+highAmmount;
	document.getElementById("countAtHigh").innerText = countAtHigh;
	return false;
}

