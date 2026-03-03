const aadhar_of_vishal = Symbol("aadhar");
const aadhar_of_piyush = Symbol("aadhar");

console.log(typeof aadhar_of_piyush);
console.log(aadhar_of_vishal === aadhar_of_piyush);
console.log(aadhar_of_piyush.toString());
console.log(aadhar_of_vishal.description);

const nonIndian = Symbol();
console.log(nonIndian.description);

const biometricHash = Symbol("biometrichash");
const bloodGroup = Symbol("bloodgroup");

const citizenRecord = {
    name: "Vishal",
    age : 26,
    [biometricHash]: "akndjdjdnjk",
    [bloodGroup]: "A+"
}

console.log(Object.keys(citizenRecord));
console.log(Object.getOwnPropertySymbols(citizenRecord))


