"use strict";

module.exports = function(amount, code){

	let acceptable = ["ca", "mx", "eu"];
	let multiplierIndex = [1.3, 1.6. 0.4]

	if(!acceptable.includes(code)){
		throw new TypeError("[any-currency] unknown code or improperly formatted code provided");
	 }

	return amount * multiplierIndex[acceptable.indexOf(code)];


}
