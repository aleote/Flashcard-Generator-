var inquirer = require("inquirer");

var ClozeCard = function(text, cloze){
	this.text= text;
	this.cloze = cloze;
	this.partial = text.replace(cloze, '...');


};



// function ClozeCardPrototype () {
// 	this.clozeRemoved = function() {
// 		return
// 	}
// }



// ClozeCard.prototype = new ClozeCardPrototype();





module.exports = ClozeCard;