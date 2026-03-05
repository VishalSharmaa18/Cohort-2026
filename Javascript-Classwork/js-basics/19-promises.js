//pending //done(fullfilled,resolve) //nope(not,rejected) 

const promise = new Promise((resolve,reject)=>{
    return setTimeout(() => {
      return resolve("Hello Promises")  
    // return reject("Error: Something went wrong")
    }, 2000);
})
// setTimeout(() => {
//     console.log(promise)
// }, 3000);

promise.then((data)=>{
newData = data.toUpperCase();
return newData
})
.then((data)=>{
    return data + '.com'
})
.then(console.log)
.catch((error)=>{
    console.log(error)
})


const turant = Promise.resolve("Instant Resolved")
console.log(turant);

const allPromises = Promise.all([
    Promise.resolve("Hello Promise 1"),
    Promise.reject("Hello Promise 2")
])

allPromises.then(console.log).catch((error)=>{
    console.log("All are not resolved",error)
})
