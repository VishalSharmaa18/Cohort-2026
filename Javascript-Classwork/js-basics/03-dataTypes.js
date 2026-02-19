//Primitive Data Types :- String,Number,Boolean,BigInt,Undefined,Null,Symbol

//String
const weaponName = "AKM 47";
console.log(typeof weaponName);

//Number
const attackPower = 75;
console.log(typeof attackPower);

const healthPercentage = 87.7897;
console.log(typeof healthPercentage);

//Boolean 
const isLogin = true;
console.log(typeof isLogin);

//BigInt
const weaponPower = 98n;
console.log("Weapon Power : " ,weaponPower , "|", typeof weaponPower);

//Undefined
let enemiesWeaponName;
console.log(typeof enemiesWeaponName);

//Null
let weatherApiResponse = null;
console.log(typeof weatherApiResponse);  // typeof null was "object" (This is a historical bug in JS!)

//Symbol
const uniqueRuneID = Symbol("M249"); //give gauurantee of uniqueness + immutable(not change)
console.log("Rune:", uniqueRuneID.toString(),"|", typeof uniqueRuneID);


//non-primitive datatypes :- Object,Array

//Object
const heroStats = {
    name : "Deepak",
    level : 2,
    class : "ranger"
}

console.log("Hero Stats: ",heroStats,"|",typeof heroStats);

//Array
const bag = ["AKM 47","Med Kit","Drinks"];
console.log("Bag: ", bag, "|", typeof bag);

//Function

function castSpell(){
return "Fireball"
}

console.log("Spell Type :",typeof castSpell) //even though it's type is function but its also object

// console.log(typeof "Hello")
// console.log(typeof 32);
// console.log(typeof true);
// console.log(typeof 32n);
// console.log(typeof undefined);
// console.log(typeof null);
// console.log(typeof Symbol);
// console.log(typeof {});
// console.log(typeof []);
// console.log(typeof function(){});

let orignalHp = 100;
let cloneHp = 100;

cloneHp = 80;

console.log(orignalHp);
console.log(cloneHp);
//These all are independent copy

const orignalSword = {
    name : "Flame Sword",
    damage : 96,
    type : "fire"
}

const cloneSword = orignalSword;
// console.log(cloneSword);
// cloneSword.name = "Ice Sword"
// console.log(orignalSword);
// console.log(cloneSword);  //Problem : Sharing is caring | Change in orignal sword also

const myInventory = {
    dress : "Flame Fire",
    coins : 100,
    weapons : {
        longRange : "AWM",
        brust : "M416A",
        mediumRange : "M416",
    }
}

const copyInventory = {...myInventory};
copyInventory.weapons.brust = "UMP45"
console.log(myInventory);

console.log(copyInventory);

const potionOrignal = {
    name : "Health",
    effects :{heal : 40, mana : 30},
}

const potionCopy = structuredClone(potionOrignal)
potionCopy.effects.heal = 948;
console.log(potionOrignal)
console.log(potionCopy);
;





























