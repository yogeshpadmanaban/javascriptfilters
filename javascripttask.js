
function concat() {  
  var value = 'Today'; 
    var value = value.concat(' is',' monday'); 
    console.log(value);   
} 
concat(); 


function replace(){
	var string = 'Today is monday , It is cloud';
		var replace=string.replace(',', 'and');   
		console.log(replace);
 }
 replace();

 function replaceword(){
	var string = 'Today is monday , It is cloud';
		var replace=string.replace('monday', 'saturday');   
		console.log(replace);
 }
 replaceword();

 function firstletterUpper(){
	var string = 'all the letters are in small case';
		var change=string.charAt(0).toUpperCase()+ string.slice(1).toLowerCase();
		console.log(change);
 }
 firstletterUpper();

 function palindrome(){
	var string = 'NITIN';
	if (string == string.split('').reverse().join('')) {
		console.log(string + ' is palindrome.');
}
else {
		console.log(string + ' is not palindrome.');
}
 }
 palindrome();

 function stringReverse(){
	var stg = 'string reversed';
		var reverse=stg.split("").reverse().join("");
		console.log(reverse);
 }
 stringReverse();

 function findReplace(){
	var finded = 'finded string';
		var replace=finded.replace('finded', 'replaced');
		console.log(replace);
 }
 findReplace();

 function wordOccurences(passedInput, valueCheck) {
	let pattern = new RegExp("\\b" + (valueCheck) + "\\b", "gi");
	let matches = passedInput.match(pattern);
	let count = 0;
	for (let i in matches) {
			count++;
	}
	console.log(count);
}
wordOccurences("The waterfall was so high, that the child couldn’t see its peak.",
	"the");


	var car = [{
		brand:"toyota",
		model_no:"ss02",
		type:"mini",
		color:"gray",
		fuel:"petrol",
		engine_power:"800",
		fuel_capacity:"10",
		mileage:"25",
		gear_type:"auto",
		no_of_cars_sold:"500",
		killometers_runned:"2000",
		date_of_launch:"15-09-2018",
		date_of_manufacture:"11-01-2017"
},{
	brand:"ford",
		model_no:"ff05",
		type:"sedan",
		color:"white",
		fuel:"petrol",
		engine_power:"1000",
		fuel_capacity:"10",
		mileage:"20",
		gear_type:"manual",
		no_of_cars_sold:"400",
		killometers_runned:"2000",
		date_of_launch:"16-09-2018",
		date_of_manufacture:"10-01-2017"
},{
	brand:"skoda",
		model_no:"kk10",
		type:"mini",
		color:"brown",
		fuel:"diesel",
		engine_power:"900",
		fuel_capacity:"9",
		mileage:"20",
		gear_type:"auto",
		no_of_cars_sold:"500",
		killometers_runned:"1500",
		date_of_launch:"25-09-2018",
		date_of_manufacture:"25-01-2017"
}

]










