

console.log("Hola chicos de DAW")
let nombre = "Francisco"
let apellido1 = "Alia"
let apellido2 = "Hernandez"

//alert("Buenas a todos")
/*console.log("Este va después")
let n1 = 33
let n2 = 33
var total = n1 + n2
console.log('El total de la operacion es: '+total)*/

if (nombre == 'Francisco'){
    console.log('Soy Profesor')
} else {
    console.log('Soy Alumno')
}

//1-18 niño
//19 - 45 es joven
//46-65 adulto
//65 en adelante es anciano.

let seguir = true
let edad = 0
//CONFIRMAR LA EDAD UNA VEZ QUE SE HA INTRODUCIDO EL VALOR, SI EL USURIO LE DA
//A CANCELAR VOLVERA A PREGUNTAR
while (seguir){
    edad = parseInt(prompt('Dime tu edad'))

    const seguro = confirm('¿Estás seguro?')
    if (seguro){
        if(edad < 1 || edad > 100){
        //seguir = true
        //ALERT INFORMATIVO
        alert('El rango introducido no es correcto')
        } else {
            seguir = false
        }
    } 

    
} 
    

if (edad > 1 && edad <= 18){
    console.log('Soy niño')
} else if (edad >= 19 && edad <=45){
    console.log('es joven')
} else if (edad >= 46 && edad <=65){
    console.log('adulto')
} else if (edad > 65){
    console.log('anciano')
}
    
//BUCLES
//Cuando utilizo for? Conozco el número de interacciones
//Cuando utilizo While? No conozco el número de interacciones






