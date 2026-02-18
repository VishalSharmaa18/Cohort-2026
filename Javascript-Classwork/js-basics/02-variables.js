var shipName = "The Amber"; //The "old way." It has quirky behaviors (like "hoisting") that often lead to bugs
console.log("Ship Name : ",shipName);


let crewCount = 12; // Use this when you know the value will change
console.log("Crew Count: ",crewCount);

const captainName = "Hitesh Sir"; // Use this for values that should not change.
console.log("Captain's Name:", captainName);

if(true){
    var leakyTreasure = "Gold coins"
}

for(var i = 0; i < 10; i++){
    //
}

for(var j = 0; j < 10; j++){
    //
}

console.log(leakyTreasure);

//Global Scope: Declared outside any function; accessible everywhere.

//Function Scope: Declared inside a function; only accessible there.

//Block Scope (let/const): Only accessible within the nearest curly braces {} (like inside an if statement or a for loop).


//Naming of a variable

let shipSpeed = 22;
let _privateLog = "Secret";
let MONGODB_URL = "";
let $name = "Vishal";

// Names cannot start with a number.

// Names are case-sensitive (user and User are different variables).

const treasureChest = { 
    gold : 100,
    rubbies : 50,
    maps : 2,
              // Mutating the contents are allowed
}

 treasureChest.gold = 150; // allowed // property change
 treasureChest = {gold : 50} // not allowed //give error assignment to constant variable. //complete re-ref

 console.log(treasureChest);

 const crewMembers = ["Hitesh Sir","Piyush Sir","Anirudh Sir"];

 crewMembers.push("Big Boss"); //allowed
 crewMembers[0] = "Shubam"

 crewMembers = ["Akash Sir"] //not allowed
 