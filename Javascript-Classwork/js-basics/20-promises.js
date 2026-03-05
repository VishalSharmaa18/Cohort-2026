function boilWater(ms){
    return new Promise((resolve,reject)=>{
        console.log("Karte h ji boil")
        if(typeof ms != Number && ms < 0){
           return reject("ms must be in number and greater than zero")
        }
        return setTimeout(() => {
           return resolve("Ubal gaya ji paani")
        }, ms);
    })
}

boilWater(5000).then((data)=>{
    console.log('Resolved:',data)
})
.catch((err)=>{
console.log('Rejected:', err.message)
})