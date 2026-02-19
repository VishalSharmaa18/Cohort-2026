const crewMembers = 40;
const   fuelTons = 90.67;
const light_speed = 299_898_700; // syntantic sugar // underscores in numbers are completely ignored by the engine.

console.log("Crew Members :", crewMembers, "|", typeof crewMembers);
console.log("Fuel Tons :", fuelTons, "|", typeof fuelTons);
console.log("Light Speed :", light_speed, "|", typeof light_speed);

const infinityRange =  Infinity;
const negativeInfinityRange = -Infinity;
const notANumber = NaN;

console.log(  infinityRange);
console.log(negativeInfinityRange);
console.log(typeof notANumber);

console.log(1/0) //Infinity
console.log(-1/0); // -Infinity

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.EPSILON)

console.log(Number.isFinite(12.98));  // true
console.log(Number.isSafeInteger(23.3));   //false

const fuelReading = "2345 tons"
const sectorCode = "0xA3";
const countDown = "007";

console.log(parseInt(fuelReading)); // 245
console.log(parseInt(sectorCode)); // 163
console.log(parseInt(countDown)); // 7

console.log(parseInt("111", 8)) //convert "111" to octal // 73

const vechileTankCapacity = 25.56;

console.log(Math.floor(vechileTankCapacity));
console.log(Math.ceil(vechileTankCapacity));
console.log(Math.round(vechileTankCapacity));

const temp = [123, -48, 78, 896];

console.log(Math.min(temp));













