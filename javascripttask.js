
function concat() {
	var value = 'Today';
	value = value.concat(' is', ' monday');
	console.log(value);
}
concat();


function replace() {
	var string = 'Today is monday , It is cloud';
	var replace = string.replace(',', 'and');
	console.log(replace);
}
replace();

function replaceword() {
	var string = 'Today is monday , It is cloud';
	var replace = string.replace('monday', 'saturday');
	console.log(replace);
}
replaceword();

function firstletterUpper() {
	var string = 'all the letters are in small case';
	var change = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
	console.log(change);
}
firstletterUpper();

function palindrome() {
	var string = 'NITIN';
	if (string == string.split('').reverse().join('')) {
		console.log(string + ' is palindrome.');
	}
	else {
		console.log(string + ' is not palindrome.');
	}
}
palindrome();

function stringReverse() {
	var stg = 'string reversed';
	var reverse = stg.split("").reverse().join("");
	console.log(reverse);
}
stringReverse();

function findReplace() {
	var finded = 'finded string';
	var replace = finded.replace('finded', 'replaced');
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
wordOccurences("The waterfall the was so high, that the child couldn’t see its peak.",
	"the");

var car = [{
	brand: "toyota",
	model_no: "ss02",
	type: "mini",
	gear: "2",
	//rearcamera: "false",
	direction: "left",
	color: "gray",
	fuel: "petrol",
	engine_power: "800",
	fuel_capacity: "10",
	mileage: "25",
	gear_type: "auto",
	no_of_cars_sold: "500",
	killometers_runned: "2000",
	date_of_launch: "01/18/2010",
	date_of_manufacture: "2005"
}, {
	brand: "ford",
	model_no: "ff05",
	type: "sedan",
	gear: "1",
	//rearcamera: "true",
	direction: "left",
	color: "white",
	fuel: "petrol",
	engine_power: "1000",
	fuel_capacity: "10",
	mileage: "20",
	gear_type: "manual",
	no_of_cars_sold: "400",
	killometers_runned: "2000",
	date_of_launch: "02/18/2010",
	date_of_manufacture: "2007"
}, {
	brand: "skoda",
	model_no: "kk10",
	type: "sedan",
	gear: "neutral",
	//rearcamera: "true",
	direction: "left",
	color: "brown",
	fuel: "diesel",
	engine_power: "900",
	fuel_capacity: "9",
	mileage: "20",
	gear_type: "manual",
	no_of_cars_sold: "500",
	killometers_runned: "1500",
	date_of_launch: "06/18/2010",
	date_of_manufacture: "2010"
}

];
var newCar = {
	brand: "audi",
	model_no: "kk10",
	type: "mini",
	gear: "3",
	//rearcamera: "true",
	direction: "left",
	color: "brown",
	fuel: "diesel",
	engine_power: "900",
	fuel_capacity: "9",
	mileage: "20",
	gear_type: "manual",
	rearcamera: "yes",
	no_of_cars_sold: "500",
	killometers_runned: "1500",
	date_of_launch: "07/18/2010",
	date_of_manufacture: "25-01-2017"

};

console.log("*******add array by value************");
addNew();
function addNew() {
	car.push(newCar);
	for (var i = 0; i < car.length; i++) {
		console.log(car[i].brand + " " + car[i].color + " " + car[i].date_of_launch + " " + car[i].date_of_manufacture + " " + car[i].engine_power + " " + car[i].fuel);
	}
}
	
console.log("*******rearcamera update************");
rearcameraUpdate();
/*function rearcameraUpdate(){	
	for(var i=0;i<car.length;i++){
		car.push({});
	}
	console.log(car);
}*/
function rearcameraUpdate() {
	let oi = car.findIndex((obj => obj.rearcamera = "true"));
	car[oi].rearcamera = "false"
	console.log("After update: ", car[oi])

}
console.log("*******direction update************");
directionUpdate();
function directionUpdate() {
	let oi = car.findIndex((obj => obj.direction == "left"));
	//console.log("Before update: ", update[oi])
	car[oi].direction = "right"
	console.log("After update: ", car[oi])

}

gearChange();
function gearChange() {

}
console.log("*******car running state************");
runningStatus();
function runningStatus() {
	for (var i = 0; i < car.length; i++) {
		if ((car[i].gear == 1)) {
			console.log(car[i].brand + " ", "100km runned");
		}
		else if (car[i].gear == 2) {
			console.log(car[i].brand, " " + "200km runned");
		}
		else if (car[i].gear == "neutral") {
			console.log(car[i].brand, " " + "0km runned");
		}

	}

}
console.log("*******car mileage************");
findMileage();
function findMileage() {
	for (var i = 0; i < car.length; i++) {
		if ((car[i].gear == 1)) {
			var m = 100 / 5.5;//5.5 litre diesel
			console.log(car[i].brand + " ", "has" + " " + m + " " + "litre mileage");
		}
		else if (car[i].gear == 2) {
			var m = 200 / 5.5;//5.5 litre diesel
			console.log(car[i].brand + " ", "has" + " " + m + " " + "litre mileage");
		}
		else if (car[i].gear == "neutral") {
			console.log(car[i].brand + " ", "is in neutral state");
		}
		console.log("*******updated details************");
		getFunction();

	}

}

function getFunction() {
	for (var i = 0; i < car.length; i++) {
		if ((car[i].gear == 1)) {
			console.log(car[i].brand + " " + car[i].model_no + " " + car[i].type + " " + car[i].color);
			console.log(car[i].brand + " ", "100km runned");
			//	console.log(car[i].brand + " ", "has" + " " + m + " " + "litre mileage");
		}
	}
}
console.log("*******car manufactured before 2010************");
manufactureDate();
function manufactureDate() {
	for (var i = 0; i < car.length; i++) {
		if ((car[i].date_of_manufacture < 2010)) {
			console.log("Manufacture date before 2010,", " " + car[i].brand + " " + car[i].date_of_manufacture);
		}

	}
}
console.log("*******launched car between specific date************");
listofLaunchedcar();
function listofLaunchedcar() {
	var count=1;
	for (var i = 0; i < car.length; i++)
		if ((car[i].date_of_launch >= "03/18/2010") && (car[i].date_of_launch < "12/18/2010")) {
			c=count++;
			console.log("launched car between specific date is "+c+" " +car[i].brand + " " + car[i].date_of_launch);
		}

}

console.log("*******Auto geared car************");
countAutogeared();
function countAutogeared() {
	var count = 0;
	for (var i = 0; i < car.length; ++i) {
		if (car[i].gear_type == "auto") {
			console.log(car[i].brand + " " + car[i].gear_type);
			count++;
		}
	}
	console.log(count + " no of auto geared cars");
}

console.log("*******Manual geared car************");
countManualgeared();
function countManualgeared() {
	var count = 0;
	for (var i = 0; i < car.length; ++i) {
		if (car[i].gear_type == "manual") {
			console.log(car[i].brand + " " + car[i].gear_type);
			count++;
		}
	}
	console.log(count + " no of manual geared cars");
}

console.log("*******sort by launchdate************");
launchdateSort();
function launchdateSort() {
	var d = car.sort(function (a, b) {
		var date1 = new Date(a.date_of_launch), date2 = new Date(b.date_of_launch)
		return date1 - date2 //sort by date ascending
	})
	console.log(d);

}

console.log("*******concat two array************");
concatArray();
function concatArray() {
	var concat = car.concat(newCar);
	console.log(concat);
}

console.log("*******count no of mini type cars************");
countMinitype();
function countMinitype() {
	var count = 0;
	for (var i = 0; i < car.length; ++i) {
		if (car[i].type == "mini") {
			console.log(car[i].brand + " " + car[i].type);
			count++;
			console.log(count + " no of mini cars");
		}
		
	}
}

console.log("*******count no of sedan type cars************");
countSedantype();
function countSedantype() {
	var count = 0;
	for (var i = 0; i < car.length; ++i) {
		if (car[i].type == "sedan") {
			console.log(car[i].brand + " " + car[i].type);
			count++;
			console.log(count + " no of sedan cars");
			}
	}
}

console.log("*******remove mini car************");
removeMinicar();
function removeMinicar(){
	for (var i = 0; i < car.length; ++i) {
		if (car[i].type == "mini") {
			delete car[i].type;
			console.log(car[i].brand+" mini removed from array");
			}
	}
}


console.log("*******javascript class************");
function jsclass(){
	this.brand= "skoda",
	this.model_no="kk10",
	this.type= "sedan",
	this.gear= "neutral",
	this.rearcamera= "true",
	this.direction= "left",
	this.color= "brown",
	this.fuel= "diesel",
	this.engine_power= "900",
	this.fuel_capacity= "9",
	this.mileage= "20",
	this.gear_type= "manual",
	this.no_of_cars_sold= "500",
	this.killometers_runned= "1500",
	this.date_of_launch= "June 18, 2010",
	this.date_of_manufacture= "2010"
}
var jclass=new jsclass();
console.log("car brandname "+jclass.brand+" ,car type "+jclass.type+" ,car model "+jclass.model_no+" ,car color "+jclass.color);

/*console.log("*******count no of car type************");
countCartype();
function countCartype() {
	var count = 0;
	for (var i = 0; i < car.length; ++i) {
		if (car[i].type == "mini") {

			console.log(car[i].brand + " " + car[i].type);
			count++;
			console.log(count + " no of mini cars");
		}
		else if (car[i].type == "sedan") {

			console.log(car[i].brand + " " + car[i].type);
			count++;
			console.log(count + " no of sedan cars");
		}
		else if (car[i].type == "prime") {

			console.log(car[i].brand + " " + car[i].type);
			count++;
			console.log(count + " no of prime cars");
		}
	}
}*/





















