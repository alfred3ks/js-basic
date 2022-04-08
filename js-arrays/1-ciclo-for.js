/*
Formas de recorrer un array:
Existen 5 formas de recorrer un array:
- ciclo for,
- ciclo forEach(),
- ciclo while,
- ciclo do while,
- usando metodo map(),

Ciclo For:
Sintaxis básica:
for ([expresion-inicial]; [condicion]; [expresion-final]){
    code...
}

Sintaxis declarativa:
Metodo .forEach(), metodo que nos permite recorrer un arreglo. Este metodo recibe un funcion como callback una funcion, dicha funcion recibe por 3 parametros opcionales, usaremos el que mas nos interese:

array.forEach((element, index, elements) => {
    //code..
    console.log(element);
    console.log(index);
    console.log(elements);
});

*/

// Objeto de estudiantes:
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

// Sintaxis básica:
for (let i = 0; i < students.length; i++) {
  // console.log(students[i]);
  // console.log(students[i].name);
  // console.log(students);
}

console.log("----------------");

/* Sintaxis declarativa:

OJO el metodo forEach() no retorna nada, osea que si necesitamos trabajar con el array debemos en una variable incluir esos datos.

*/
const studentCouse = [];

students.forEach((student, index, students) => {
  // console.log(student);
  // console.log(index);
  // console.log(students);
  // console.log(`name: ${student.name}`);
  // console.log(`course: ${student.course}`);
  // console.log(`${student.name} ${student.lastname} ${student.course}`);
    studentCouse.push(student.name + " " + student.course);
});

console.log(studentCouse);

/*
Podemos comprobar si un metodo devuelve a no valor poniendolo dentro de una variable asi:

*/
let result = students.forEach((student, index, students) => {
    return student.name;
});

console.log(result); // undefined
