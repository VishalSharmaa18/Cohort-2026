class Cricketer {
    constructor(name,role,matchesPlayed){
        this.name = name;
        this.role = role;
        this.matchesPlayed = matchesPlayed;
        this.stamina = 100;
    }

    introduce(){
        return `${this.name} the ${this.role} | ${this.matchesPlayed} | ${this.stamina}`
    }
}

const firstPlayer = new Cricketer("Virat","Top-Oder Batsman",120)
const secondPlayer = new Cricketer("Jasprit Bumrah","Right-Arm Fast Bowler",50)
console.log(firstPlayer.introduce());

console.log(typeof Cricketer);

class Debutant{
    constructor(name){
        this.name = name;
        this.walkout = () => `${this.name} walks out to bat for the first time.`
    }
}

const debutant1 = new Debutant("Shubman Gill")
const somethingFromlastClass = debutant1.walkout;
console.log(somethingFromlastClass());

