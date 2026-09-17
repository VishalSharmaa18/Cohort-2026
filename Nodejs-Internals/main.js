import fs from "fs"

//TOP LEVEL CODE
console.log("Hello from Node.js Internals!");

//IO POLLING
fs.readFile("sample.txt", "utf-8", (err, data)=>{
    console.log("File reading complete")
})

//EXPIRED CALLBACKS
setTimeout(() => {
    console.log("Expired Callbacks")
}, 0);

//TOP LEVEL CODE
const a = 4 + 4;
console.log(a)