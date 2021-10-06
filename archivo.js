
let edad1 = Number(prompt("Se han registrado 4 personas. Por favor, ingrese la edad de cada una de ellas. \n Edad Primera persona."))
let edad2 = Number(prompt("Edad segunda persona."))
let edad3 = Number(prompt("Edad tercera persona."))
let edad4 = Number(prompt("Edad cuarta persona."))


function PersonasRegistradas(edad1, edad2, edad3, edad4) {

    let edades = Number(edad1) + Number(edad2) + Number(edad3) + Number(edad4)

    let promedio = edades / 4

    return promedio
}


console.log (`El promedio de edad de personas registradas es de ${PersonasRegistradas(edad1, edad2, edad3, edad4)} años.`)