function TataCar(chassisNumber,modelName){
    this.chassisNumber = chassisNumber;
    this.modelName = modelName;
    this.fuelLevel = 100;
}

TataCar.prototype.status = function(){
return `Tata ${this.modelName} #${this.chassisNumber} | Fuel : ${this.fuelLevel}`
}

const harrier = new TataCar("1234redf","Harrier 4x4")
console.log( harrier.status());


function createAutoRikshaw(id,route){
    return{
        id,
        route,
        run(){
            return `Auto ${this.id} running on ${this.route} route.`
        }
    }
}

const auto1 = createAutoRikshaw("Up-1","Lucknow-Kanpur");
const auto2 = createAutoRikshaw("Up-2","Mirzapur-Jonpur");
console.log(auto1.run());
console.log(auto2.run());



