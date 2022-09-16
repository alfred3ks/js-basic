/*

Metodo filter():
El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

Sintaxis:

const newArray = arr.filter(callback(currentValue[, index[, array]])[, thisArg])

*/

const students = [
    {
        name: "Jill",
        lastname: "Doe",
        age: 23,
        course: "Marketing",
    },
    {
        name: "John",
        lastname: "Doe",
        age: 20,
        course: "Web Development",
    },
    {
        name: "Jack",
        lastname: "Doe",
        age: 22,
        course: "Accounting",
    },
    {
        name: "Ryan",
        lastname: "Ray",
        age: 20,
        course: "Web Development",
    },
    {
        name: "Jane",
        lastname: "Doe",
        age: 21,
        course: "Financial Management",
    },
];

const developer = students.filter(student => {
    if (student.course === 'Web Development') {
        return student;
    }
});

console.log(developer);

// Podemos encadenar metodos:
const result = students.filter(student => {
    if (student.course === 'Web Development') {
        return true;
    }
}).map(student => {
    return student.name;
})

console.log(result);