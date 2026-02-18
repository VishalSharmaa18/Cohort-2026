const clue1 = "Muddy footprints near the window";
const clue2 = "Broken glass on the table";

console.log("Clue found", clue1);
console.log("Clue found", clue2);

const suspectName = "Vishal"
const suspectAge = 26;

console.log("Suspect:",suspectName, "| Suspect Age: ", suspectAge);

console.warn("Warning: Fingerprint Detected"); //Outputs a yellow warning symbol and message
console.error("Error: Error found in labs"); //Outputs a red error message.Use for giving errors

const evidenceLog = [
    {id : 1, item: "Muddy Footprints", location: "Window sill"},
    {id : 2, item: "Broken glass", location: "Living room"},
    {id : 3, item: "Red fibre stand", location: "Behind Door"},
]
console.table(evidenceLog); // This turns an array or an object into a clean, sortable table

console.group("Group Starts"); // It allows you to bundle related messages together into a collapsible block
console.log("Hey 1")
console.log("Hey 1")
console.log("Hey 1")
console.groupEnd("Group Ends")

console.time("time starts now"); //Starts and stops a timer.

let dnaMatches = 0;
for (let index = 0; index < 1_00_000; index++) {
   dnaMatches++;  
}
 console.timeEnd("time starts now");
