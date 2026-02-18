
let btnGuardar = document.getElementById("btnGuardar")
let nombre = document.getElementById("nombre")
let apellidos = document.getElementById("apellido")
let btnLimpiar = document.getElementById("btnLimpiar")

btnGuardar.addEventListener("click", function(){
    //VAMOS A GUARDAR LOS DATOS EN SESION
    guardar()

})

//Vamos a dejar por defecto el localstorage
btnLimpiar.addEventListener("click", function(){
    nombre.value = ""
    apellidos.value = ""
    localStorage.clear()

})


function init(){

    if (localStorage.getItem("nombre")!= null){
        nombre.value = localStorage.getItem("nombre")
    }
    if(localStorage.getItem("apellido") != null){
        apellidos.value = localStorage.getItem("apellido")
    }


}

document.addEventListener("keydown", function(event){
    if(event.key =="Enter"){
        guardar()
    }
})

function guardar(){
    console.log("Estamos dentro del guardar")

    if (nombre.value != "" && apellidos.value != ""){
        //Guardamos en la sesion
        localStorage.setItem("nombre", nombre.value)
        localStorage.setItem("apellido", apellidos.value)
        alert("Se han guardado los datos correctamente")
    } else {
        alert("Los campos no pueden ser vacios")
    }
}

apellidos.addEventListener("keydown", function (event){
    if(event.key=="Tab"){
        event.preventDefault()
        nombre.focus()
    }
})