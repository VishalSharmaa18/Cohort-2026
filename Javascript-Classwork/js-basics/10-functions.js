console.log(typeof brewPoint("Healing Herbs",3))
function brewPoint(ingredient,dose){
return `Brewing portion with ${ingredient} (x${dose})... Portion ready`
}

const mixElixir = function(ingredients){
return ` Mixing elixir with ${ingredients}`
}

console.log(typeof mixElixir("Black Herbs"));


//no own this // no own arguments
const distilEssence = (ingredients)=>{
return `Mixing elexir with ${ingredients}`
}

console.log(distilEssence("Green Herbs"));

function oldBrewingLogs(){
    console.log("Type: ", typeof arguments);
    console.log(arguments);
    console.log(Array.isArray(arguments))
    const argsArray = Array.from(arguments);
    console.log( argsArray);
    console.log(typeof arguments);
    console.log(typeof argsArray);
}

oldBrewingLogs("Sage","Rosemarry")

let globalCount = 0;

function brewAndCount(name){
    globalCount++;
}

//Higher oder functions
function anotherFunctionForClass(brewAndCount){
    return function newBrew(){
         //do Something
}
}

