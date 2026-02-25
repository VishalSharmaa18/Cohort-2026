console.log(this); // global object {}

function ranveerSinghOnGlobalStage(){
    console.log(typeof this); // this is a global object {}
}

console.log(ranveerSinghOnGlobalStage());


// function ranveerWithNoScript(){
//     //console.log(this); // this is a global obj in node env but in browser it will be window obj.
// }

// ranveerWithNoScript();

const bollywoodFilm = {
    name : "Bajirao Mastani",
    lead : "Ranveer Singh",

    introduce(){
        return `The name of film was ${this.name} and lead actor was ${this.lead}.` // in this the this keyword is refeering to the bollywood film object.
    }
}

console.log(bollywoodFilm.introduce())

// function starPlayerIntroduction(){
//     let name = "Virat Kohli";
//     let role = "Top-oder Batsman";

//    return function introduce(){
//         return `The name of star player is ${this.name} and his role is ${this.role}.`
//     }
//     introduce(); // this will not work because this is a regular function and in regular function this keyword is undefined in strict mode and in non strict mode it will refer to global object but here we are not in global object so it will be undefined.
// }

// console.log(starPlayerIntroduction())

const starPlayerIntro = {
    name : "Virat Kohli",
    role : ["Top-oder Batsman", "Right-arm quick bowler", "Sharp fielder"],

    announcePlayer(){
        this.role.forEach((roled)=>{
             console.log(`The name of the player was ${this.name} and the role of the player was ${roled}`)
             // in this case the this keyword is referring to the starPlayerIntro object because arrow function does not have its own this keyword and it will refer to the this keyword of the enclosing scope which is starPlayerIntro object.
        })
    }
}

console.log(starPlayerIntro.announcePlayer());

const filmSet = {
    crew : "Spot Boys",
    prepareProps(){
        console.log(`Outer this crew : ${this.crew}`)

        function arrangeChairs(){
            console.log(`Inner this crew : ${this.crew}`)
        }
        arrangeChairs();

        const arrangeLights = ()=>{
          console.log(`Arrow crew : ${this.crew}`)  
        };
        arrangeLights();
    }
}

console.log(filmSet.prepareProps());



