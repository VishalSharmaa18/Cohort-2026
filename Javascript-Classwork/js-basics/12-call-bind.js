// call and apply are used to invoke a function with a specific this value and arguments provided individually (call) or as an array (apply).

// bind is used to create a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

// call & apply = basic chef(kitchen)

//bind = master chef(return a new function)

function cookDish(ingredient,style){
    return `${this.name} prepares ${ingredient} in ${style} style!;`
}

const sharmaJiKaKitchen = {name : "Sharma ji ka kitchen"};
const guptaJiKaKitchen = {name : "Gupta ji ka kitchen"};

console.log(cookDish.call(sharmaJiKaKitchen,"Paneer and Onion","Mexican Style"));
console.log(cookDish.apply(guptaJiKaKitchen,["Soya chap marinate","Indian Style"]));

function reportDelivery(location,status){
return `${this.name} at ${location} : ${status}`
}

const reporter = reportDelivery.bind(sharmaJiKaKitchen)
console.log(reporter("Jaipur","Open"));
