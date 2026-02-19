const codeName = "Shadow Fox";
const backupName = String("Night Owl");
const templateName = `Agent ${codeName}`;
console.log(templateName);

let intercepted = "HELLO";
intercepted[0] = "J"  // silent fail
console.log(intercepted);

const secretCode = "OMEGA-7";
console.log(secretCode.length);
console.log(secretCode.charAt(99));
console.log(secretCode.at(-1));
console.log(secretCode.includes("OM"));


const rawTransmission = "The eagle has landed";

console.log(rawTransmission.toLowerCase());
console.log(rawTransmission.indexOf("has"));
console.log(rawTransmission.valueOf());

const orders = "move-north|hold-position|extract-vip"
console.log(orders.split("|"));

const myDataValue = "SOS".split("");
console.log(typeof myDataValue);
console.log(myDataValue);
console.log(Array.isArray(myDataValue));

const missionNumber = '42';
console.log(missionNumber.padStart(6,"0"));
console.log(missionNumber.padEnd(10,"9"));

console.log(void "vishal") //returns undefined
//void k baad aap kch bhi likho vo humesha undefined hi return krega kch nahi return krega
















