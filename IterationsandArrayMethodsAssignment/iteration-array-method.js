//This was tested using a browser so the two lines below may need to be activated if it were to be tested in a different environment

//const { clear } = require('console');
//const fetch = require('node-fetch');

console.log("This is the assignement for Iterations and Array Methods");

const myData = [

	{
		"name": "Banana Man",
		"age": 89,
		"gender": "Male",
		"contact": "0918234756",
		"address": "89 Banana St",
		"email": "bananaman@banana.com"
	},

	{
		"name": "Orange Woman",
		"age": 57,
		"gender": "Female",
		"contact": "0982579253",
		"address": "82 Orange Ln",
		"email": "ojw@orenji.net"
	},

	{
		"name": "Burger Lettuce",
		"age": 78,
		"gender": "Male",
		"contact": "0989753445",
		"address": "97 Borgar Ave",
		"email": "blt@bigborgar.org"
	},

	{
		"name": "Ars Far",
		"age": 23,
		"gender": "Male",
		"contact": "0923489768",
		"address": "87 Far North Rd",
		"email": "afar@returnofjafar.eu"
	},

	{
		"name": "Aluminum Can",
		"age": 95,
		"gender": "Female",
		"contact": "0958976324",
		"address": "81 Cancan Pkwy",
		"email": "yesican@alumni.us"
	}



]

let objectMethods = {

	printObjects: function() {
		console.log("Print whole array")
		console.log(myData);
		}

}

console.log("Print whole array")
console.log(myData);

// console.log("Print using for loop")
// let x = 0;
// for (x=0; x < myData.length; x++)
// {
// 	console.log(myData[x]);
// }

// console.log("Print using for in loop")
// for (x in myData)
// {
// 	console.log(myData[x]);
// }

// console.log("Print using for of loop")
// for (x in myData)
// {
// 	console.log(myData[x]);
// }

// console.log("Print using while loop")
// x=0;
// while ( x < myData.length)
// {
// 	console.log(myData[x]);
// 	x++;
// }

// console.log("Print using forEach loop");

// myData.forEach (function(value, index)
// {
// 	console.log(myData[index]);
// })

// console.log("Print portion of data using filter (People above 60)");
// let peopleAbove60filter = myData.filter( function(data) {return data.age > 60} );
// console.log(peopleAbove60filter);

// console.log("Print portion of data using map (Name and age)");
// let peopleAbove60map = myData.map( function(data) { return `${data.name}: ${data.gender}` } );
// console.log(peopleAbove60map);

// console.log("Print portion of data using reduce (Average of ages)");
// let ageSum = myData.reduce( function(incrementor, data) { return incrementor + data.age}, 0);
// let ageAverage = ageSum/myData.length;
// console.log(ageAverage);