/*
	ga.js
	Simple genetic algoritm (GA)
	
	Sparisoma Viridi | https://github.com/dudung/jsxPhys
	
	20200501
	1255 Create this program.
	1318 Cancel the use of online compiler [1].
	
	Refrences
	1. https://jsconsole.com/ [20200501]
*/


// Execute main funtion
main();


// Define main function
function main() {
	var p1 = "10101111";
	var p2 = "11110101";
	
	var n = 4;
	[c1, c2] = crossover(p1, p2, n);
	
	console.log(p1);
	console.log(p2);
	console.log(c1);
	console.log(c2);
}


// Crossover two chromosome
function crossover() {
	var p1 = arguments[0];
	var p2 = arguments[1];
	var n = arguments[2];
	
	var c1 = p1.slice(0, n) + p2.slice(n);
	var c2 = p1.slice(n) + p2.slice(0, n);
	
	return [c1, c2];
}