const phritviRaj = {
    name : "Prithviraj",
    generation : "grandfather",
    cookTraditionalDish(){
        return `${this.name} cooks an ancient family dish `;
    }
}

const raj = Object.create(phritviRaj);
raj.name = "raj";
raj.generation = "father";
raj.runBusiness = function(){
return `${this.name} runs the family business`
};
console.log(raj);

const ranbir = Object.create(raj);
ranbir.name = "ranbir";
ranbir.generation = "son";
ranbir.makeFilm = function(){
    return `${this.name} also directs blockbuster films.`
};

console.log(ranbir.cookTraditionalDish())



