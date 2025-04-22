const students = ["Mandar", "Aryan", "Viraj", "Panshul"];
const number = [1, 2, 3, 4, 5];

const squares = number.map(square);
const Cubes = number.map(cube);

const studentUpper = students.map(uppercase);
const studentLower = students.map(lowercase)

console.log( squares );
console.log( Cubes );
console.log( studentUpper );
console.log( studentLower );


function square(element) {
    return Math.pow(element, 2);
}

function cube(element) {
    return Math.pow(element, 3);
}

function uppercase(element) {
    return element.toUpperCase();
}

function lowercase(element) {
    return element.toLowerCase();
}

