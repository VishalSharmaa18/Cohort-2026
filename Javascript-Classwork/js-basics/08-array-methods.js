const orders = [
  { dish: "Pasta Carbonara", price: 14, spicy: false, qty: 2 },
  { dish: "Dragon Ramen", price: 12, spicy: true, qty: 1 },
  { dish: "Caesar Salad", price: 9, spicy: false, qty: 3 },
  { dish: "Truffle Risotto", price: 11, spicy: true, qty: 5 },
];

// const myOrders = orders.forEach((order,index)=>{
// console.log(`${index + 1} : ${order.qty} * ${order.price}`)
// });

// console.log(myOrders)

const myOrders = orders.map((order,index)=>{
    let  myOder =  `${order.dish} : ${order.price} * ${order.qty}`
    return myOder
})

console.log(myOrders);

const spicyFood = orders.filter((o)=>!o.spicy);
console.log(spicyFood);

const totalPirce = orders.reduce((acc,order)=>{
     return acc+= order.price * order.qty;
},0)

console.log(totalPirce)

const total = orders.reduce((acc,order)=>{
const cateogry = order.spicy ? "spicy" : "mild";
console.log(cateogry)
acc[cateogry].push(order.dish)
console.log(acc)
return acc
},{spicy : [], mild : []})

console.log(total)

const ticketNumber = [100,34,5,677,554,33];
const sorted = [...ticketNumber].sort((a,b)=>a-b);
console.log(sorted);

const kitchenOrders = [
  {dish : "Pasta Carbonara", price : 14, spicy : false, qty : 2},
  {dish : "Dragon Ramen", price : 14, spicy : true, qty : 2},
  {dish : "Caesar Salad", price : 14, spicy : false, qty : 2},
  {dish : "Inferno Wings", price : 14, spicy : true, qty : 2},
  {dish : "Truffle Risotto", price : 14, spicy : false, qty : 2}
]

const mildReport = kitchenOrders.filter((oder)=>!oder.spicy)
.map((oder)=>({
dish : oder.dish,
totals : oder.price * oder.qty,
}))
console.log(mildReport)




