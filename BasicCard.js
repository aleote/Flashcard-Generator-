var inquirer = require("inquirer");

// constructor for Basic 
var BasicCard = function(front, back){
	this.front = front;
	this.back = back;
	


};



var AL = new BasicCard("please", "work");

module.exports = BasicCard;

// each question can be a new basic card. you can link from your json or not 
// text.replace 