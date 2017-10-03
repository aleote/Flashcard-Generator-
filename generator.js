var inquirer = require("inquirer");
var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");
var cardData = require('./basic.json');
var cardCData = require("./cloze.json");

// console.log(BasicCard);

var currentCard;
var cardArray = [];
var initalIndex = 0;
var initalScore = 0;

choose();

function choose(){

	inquirer.prompt([
	{
		type: 'list',
		message: 'BASIC or ADVANCED?',
		choices: ['BASIC', 'ADVANCED'],
		name: 'choice'
	}
	]).then(function(response){
		if(response.choice === 'BASIC'){
			gameSetup();
		} else{
			gameCreate();
		}

	})
}

// for Basic 
function gameSetup (){
	for (var i = 0; i < cardData.length; i++) {
		currentCard = new BasicCard(cardData[i].front, cardData[i].back);
		cardArray.push(currentCard);

		
	}
	askQuestion(initalScore, cardArray, initalIndex);
}



// for Cloze
function gameCreate (){
	for (var i = 0; i < cardCData.length; i++) {
		currentCard = new ClozeCard(cardCData[i].text, cardCData[i].cloze);
		cardArray.push(currentCard);
	}
	askQuestion2(initalScore, cardArray, initalIndex);
}



var askQuestion = function(score, arr, index) {
	if (index < 9) {
		inquirer.prompt([
		{
			message: arr[index].front,
			name:"question",
			type: "input"
			

		}
		]).then(function(response){
			if (response.question === arr[index].back) {
				console.log("correct!")
				score++;
				index++;

			} else {
				console.log('sike');
				index++;
			}

			askQuestion(score, arr, index);
		})
}
	else {
		console.log("total right:" + score);
	}
};



//Cloze 
var askQuestion2 = function(score, arr, index) {
	if (index < 9 ) {
		inquirer.prompt([
		{
			message: arr[index].partial,
			name: "question",
			type: "input" 
		}
		]).then(function(response){
			if (response.question === arr[index].cloze){
				console.log("correct");
				console.log(arr[index].text);
				score++;
				index++;
			} else { 
				console.log("nopers");
				console.log(arr[index].text);
				index++; 
			}
			askQuestion2(score, arr, index);
		})
	} else{
		console.log("total right:" + score);
	}
}