let btnEvento = document.getElementById('btnEvento');
let nombreSenor = document.getElementById('nombreSenor')
let nombre = document.getElementById('nombre')
btnEvento.addEventListener("click", function(){
  
    saludar()
})

/*document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        console.log("Enter pulsado en cualquier parte");
    }
});*/

/*nombreSenor.addEventListener("keydown", function(event){
    if(event.key === "Tab"){
       event.preventDefault();
       nombre.focus()
    }
})*/

nombre.addEventListener("change", function(){
    if (nombre.value == ''){
        nombreSenor.value = ''
    } else {
        nombreSenor.value = "Don "+nombre.value
        saludar()
    }
    
})

function saludar(){
    if (nombre.value != ''){
        alert(nombre.value)
    }
}

document.addEventListener("keydown", function(event){
    if (event.key == "Enter"){
        console.log("HAS PULSADO LA TECLA ENTER")
    }
})


nombreSenor.addEventListener("keydown", function(event){
    if (event.key == "Tab"){
        event.preventDefault()
        nombre.focus()
    }
})




