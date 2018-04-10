// TEMPLATE LITERALS AND DEFAULT PARAMETERS VALUE
function favMovie(movie="The Room", name="World") {
    console.log(`My name is ${name} and my favorite movie is ${movie}`);
}
// favMovie("The Lion King");
// favMovie();
favMovie("The Lion King", "Jessie");
favMovie();

// ES6 ARROW FUNCTIONS
let favMovie = (movie="The Room", name="World") => {
    console.log(`My name is ${name} and my favorite movie is ${movie}`);
}

// Concise body syntax
let favMovie = (movie="The Room", name="World") => console.log(`My name is ${name} and my favorite movie is ${movie}`);

favMovie();

let getFirstName = (fullName) => {
    let array = fullName.split(" ");
    return array[0];
}

let getFirstName = (fullName) => (fullName.split(" "))[0];

let myFunc = (a, b) => ({
    squareOfFirstArg: a*a,
    squareOfSecondArg: b*b, 
    product: a*b
});

console.log(myFunc(2, 3).squareOfFirstArg);
console.log(myFunc(2, 3).squareOfSecondArg);
console.log(myFunc(2, 3).product);

// #11 "create an object named user..."
let user = {

}

// SPREAD SYNTAX
// #1 - #4
function myFunc(name, location, favFood) {
    console.log(name);
    console.log(location);
    console.log(favFood);
}
let array = ["Paul", "Birmingham", "Kimchi"];
myFunc(...array);


// #5 - #8
let name = "Jessie";
function anotherFunc(name) {
    let array = [...name];
    for (let i=0; i<array.length; i++) {
        console.log(array[i]);
    }
}
anotherFunc(name);
