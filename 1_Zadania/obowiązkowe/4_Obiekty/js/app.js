//zadanie 0a
const city = {
    capital: String,
    population: Number,
    president: String,
    primeMinisters: Array,
}
console.log(city);


//zadanie 0b
const timeMachine = {
    shape: String,
    model: String,
    run(date, place) {
        this.date = String;
        this.place = String;
    }
}
console.log(timeMachine);

timeMachine.run();
//zad 1
const book = {
    title: String,
    author: String,
    numberOfPages: Number,
}
console.log(book);

//zad 2
const person = {
    name: "mateusz",
    age: 11,
    sayHello() {
        console.log("hello");
    }
}
console.log(person);
person.sayHello();

//zad 3
const recipe = {
    title: "mój przepis",
    servings: 4,
    ingredients: [String],
}

recipe.ingredients = ["banan", "śmietana", "jajka"];
console.log(recipe);

//zad 4 
var movie = {
    director: "Peter Jackson",
    writers: [" J.R.R. Tolkien ", "Fran Walsh", "Philippa Boyens", "Peter Jackson"],
    stars: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
    country: "New Zealand | USA",
    budget: "$93,000,000",
    imdbPoints: 8.8,
    year: 2001,
    time: "2h 58 min",
    category: " Adventure, Drama, Fantasy"
}

for (const prop in movie) {
    console.log(`${prop} = ${movie[prop]}`);
}

//zad 5
var animals = [
    {
        type: "cat",
        breed: "persian",
        name: "Tiberius",
        health: [
            {
                date: "2012-03-03",
                visitType: "grafting"
            },
            {
                date: "2015-06-23",
                visitType: "bowel surgery"
            }
        ]
    },
    {
        type: "Guinea pig",
        breed: "The Rex",
        name: "Marko",
        health: [
            {
                date: "2015-12-04",
                visitType: "grafting"
            },
            {
                date: "2016-03-15",
                visitType: "ear cleaning"
            }
        ]
    }

]


for (let i = 0; i < animals.length; i++) {
    for (const options in animals[i]) {
        console.log(options+"= "+animals[i][options]);
    }
}

var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist  = false;

console.log(spoon.isExist);