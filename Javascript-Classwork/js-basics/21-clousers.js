function boilWater(ms){
    return new Promise((res,rej)=>{
        setTimeout(() => {
           res("Paani ubal gaya") 
        }, ms);
    })
}

function addTea(paani){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res(`${paani} aur Chai patti daal di`)
        }, 2000);
    })
}

function serveChai(finalChai){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            res(`${finalChai} aur garam chai tyar hai`) 
        }, 1000);

    })
}

// boilWater(3000).then((data)=>{
//     console.log(data);
//      return addTea(data)
// })
// .then((data)=>{
//     console.log(data)
//     return serveChai(data)
// })
// .then((data)=>{
//     console.log(data)
// })

async function ChaiBanao(){
    try{
        console.log("Chalo ji! Chai banate hai jii!")
        const paani = await boilWater(3000);
        console.log(paani);
        const chaiUbalo = await addTea(paani);
        console.log(chaiUbalo);
        const finalChai = await serveChai(chaiUbalo);
        console.log(finalChai);
        console.log("Mubarak ho chai ban gayi");
        

    }
    catch(e){
      console.log("Ofo! Gadbad ho gayi:", e);
    }
}

ChaiBanao()

