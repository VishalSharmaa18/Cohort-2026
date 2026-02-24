// const hero = {
//     name : "Luna the Brave",
//     class : "Mage",
//     level : 12,
//     health : 85,
//     mana : 120,
//     isAlive : true
// }

// delete hero.class
// console.log(hero);

// const ranger = {
//     name : "Vishal the swift",
//     agility : 80,
//     stealth : undefined
// }

// console.log("name" in ranger)
// console.log("toString" in ranger);

// console.log(ranger.hasOwnProperty("toString"))

// const artifact = {
//     name : "Obsidian Crown",
//     era : "Ancient",
//     value : 500000,
//     material : "volcanic glass"
// }

// const keys = Object.keys(artifact)
// const values = Object.values(artifact)
// const entries = Object.entries(artifact)

// console.log(keys);
// console.log(values)
// console.log(entries)

// for (const [key,value] of Object.entries(artifact)) {
//     console.log(`${key}: ${value}`)
// }
// let priceList = [
//     ["Obsidian Crown", 4798798],
//     ["Ruby PEndant",988888]
// ]
//  const priceObject = Object.fromEntries(priceList)
//  console.log(priceObject);

const displayCase = {
    artifact : "Obsidian",
    location : "Hall A, Case 3",
    locked : true,
}

Object.freeze(displayCase);  //cannot add new prop //cannot remove existing prop // cannot chnage value of ex prop
displayCase.newProp = "testCases";
console.log(displayCase)

const catalogEntry = {
    id : "ART-001",
    description : "Ancient Crows",
    verified : true
}

Object.seal(catalogEntry); //cannot add new prop //cannot remove existing prop // can change value of existing prop
catalogEntry.verified = false;
console.log(catalogEntry);

const secureArtificats = {name : "Ruby Pendant"};
Object.defineProperty(secureArtificats,"catalogId",{
    value
})



 
 
