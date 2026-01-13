console.log('El archivo se ha cargado correctamente')

function init(){
    let nombre = 'JM'
    document.getElementById('nombre').value = nombre
    let apellido1 = 'Delgado'
    document.getElementById('apellido1').value = apellido1
    let apellido2 = 'García'
    document.getElementById('apellido2').value = apellido2
    let telefono = '909 606 303'
    document.getElementById('telefono').value = telefono
    let = localizacion = 'Ciudad Real'
    document.getElementById('localizacion').value = localizacion

    if (nombre.length < 3 || apellido1.length < 3 || apellido2.length < 3){
        
        document.getElementById('completo').value = 'No es correcto alguno de los campos'
    } else {
        document.getElementById('completo').value = nombre + ' '+ apellido1+' '+apellido2
    }

    

}

init()

function init2(){
    let nombre = 'Francisco'
    document.getElementById('nombre').value = nombre
    let apellido1 = 'Alia'
    document.getElementById('apellido1').value = apellido1
    let apellido2 = 'Hernandez'
    document.getElementById('apellido2').value = apellido2
    let telefono = '666666666'
    document.getElementById('telefono').value = telefono
    let = localizacion = 'Ciudad Real'
    document.getElementById('localizacion').value = localizacion
    if(document.getElementById('nombre').value == 'Francisco'){
        document.getElementById('parrafoFinal').innerHTML = '<input type=text id="ff" value="ddd">'
    }
}

function registrar(){
    let mensaje = ''
    if (document.getElementById('nombre').value.length < 3 || document.getElementById('nombre').value.length > 30){
        mensaje = mensaje + ' <p><strong>El nombre: </strong>el campo nombre no puede tener una longitud menor de 3 y menor de 30 caracteres</p>'
    } if(document.getElementById('edad').value < 18 ) {
        mensaje = mensaje + ' <p><strong>Edad: </strong>eres menor de edad<p>'
    } 
    if (mensaje.length > 0){
        let mensajeError = document.getElementById("mensajeError")
        mensajeError.innerHTML = mensaje
    } else {
       window.location.href = "registrar.html"
    }
}


function cambiarEstilo(){
    alert('ESTO FUNCIONA')
}

function cambiarEstiloValladolid(){
    alert('El de valladolid')
}
