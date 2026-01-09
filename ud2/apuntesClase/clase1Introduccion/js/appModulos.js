let edad
function init() {
    let nombre = 'Francisco'
    let nombre1 = 'Miguel Angel'
    edad = preguntarEdad()
    saludar(nombre,edad)
    edad = preguntarEdad()
    saludar(nombre1,edad)
}



function saludar(nombre,edad){
    console.log('Buenos días, estamos en Marcas: ' +nombre+' y tienes '+edad)
}

init()

function preguntarEdad() {
    let edad = prompt('¿Cuantos años tienes?')
    return edad;

}

//Programa para que te calcule cuando una persona sea mayor de edad mediante funciones.
//La funcion mayorDeEdad recibe como pametro un numero y devuelve true o false.


