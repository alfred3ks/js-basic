/*

Vamos a utilizar todos los metodos vistos:

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


// Destructuracion de objetos:
const result = students.map(({ name, lastname, age }) => {
    return {
        student: `${name} ${lastname}`,
        age
    }
}).filter((student) => {
    if (student.age > 20) {
        return student
    }
}).sort((a, b) => {
    if (a.age - b.age) {
        return -1
    }
}).reduce((total, student) => total + student.age, 0
)

console.log(result);

// Aqui podemos ver aplicados algunos de los metodos que hemos visto.
// Seguimos.....