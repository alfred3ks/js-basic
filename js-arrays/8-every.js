/*

Metodo every();

Determina si todos los elementos en el array satisfacen una condición.

Precaución: ¡Llamar este método en un array vacío devuelve true para cualquier condición!

Es lo contrario del metodo some()

Sintaxis:
arr.every(callback(element[, index[, array]])[, thisArg])

*/

const lista = [3, 6];
const everyList = lista.every((elem,) => {
    return elem >= 3;
});

// console.log(everyList);

const students = [
    {
        name: "Jill",
        lastname: "Doe",
        age: 20,
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
        age: 20,
        course: "Accounting",
    },
    {
        name: "Ryan Jones",
        lastname: "Ray",
        age: 20,
        course: "Web Development",
    },
    {
        name: "Jane",
        lastname: "Doe",
        age: 22,
        course: "Financial Management",
    },
];

console.log(
    students.every((student) => {
        return student.age === 20;
    })
);
// Retorna false porque revisa dentro del array si algun elemento no cumple la condicion devuelve false.

console.log(
    students.every((student) => {
        return student.name.includes('J');
    })
);
// Recuerda devolvera true si todos y solo todos lo incluyen.