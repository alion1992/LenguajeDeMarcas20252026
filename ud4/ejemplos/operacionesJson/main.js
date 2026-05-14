const alumnos = [
    { nombre: "Ana", nota: 8 },
    { nombre: "Luis", nota: 6 },
    { nombre: "Marta", nota: 9 }
];
let listaResultado = document.getElementById("listaAlumnos")


//for each
alumnos.forEach(alumno => {
    console.log(alumno.nombre)
})

console.log("El RESULTADO DE LA BUSQUEDA ES \n")
const resultadoBusqueda = alumnos.find(alumno => alumno.nota > 6)
console.log(resultadoBusqueda)


console.log("EL RESULTADO DEL FILTRADO ES \n")
const resultadoFiltrado = alumnos.filter(alumno => alumno.nota > 6)
console.log(resultadoFiltrado)

resultadoFiltrado.forEach(alumno => {
    listaResultado.innerHTML = listaResultado.innerHTML + `<li> ${alumno.nombre} </li>`

})