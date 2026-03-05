// function prepareorderCB(dish,cb){
//     setTimeout(()=>cb(null, {dish,status: "prepared"}),1000)
// }

// function pickupOrderCB(order,cb){
//     setTimeout(()=>cb(null,{...order, status: "Pickup"}),1000)
// }

// function deliverOrderCB(order,cb){
//     setTimeout(()=>cb(null,{...order,status: "Delivered"}),1000)
// }

// prepareorderCB("Dal-Chawal",(err,order)=>{
//     if(err) return console.log(err);
//     pickupOrderCB(order,(err,order)=>{
//         if(err) return console.log(err)
//             deliverOrderCB(order,(err,order)=>{
//         if(err) return console.log(err)
//             console.log(`${order.dish} : ${order.status}`)
//             })
//     })
// })

//promisified way

function prepareorder(dish){
    return new Promise((resolve,reject)=>{
        if(!dish){
            return reject("No dish provided")
        }
        setTimeout(()=>{
            return resolve({dish,status: "prepared"})
        },3000)
    })
}

function pickuporder(order){
    return new Promise((resolve,reject)=>{
        if(!order){
            return reject("No order found")
        }
        setTimeout(() => {
         return resolve({...order,status: "order pickuped"})   
        }, 3000);
    })
}

function deliverOrder(order){
    return new Promise((resolve)=>{
        setTimeout(() => {
            return resolve({...order, status: "Order Delivered"}) 
        }, 3000);
    })
}

prepareorder("Matar-Paneer").then((o)=>{
console.log(o);
return pickuporder(o)
}).then((o)=>{
    console.log(o)
    return deliverOrder(o)
}).then((o)=>{
    console.log(o)
})
.catch((error)=>{
    console.log("No dish passed",error)
})



