let btnEvento = document.getElementById('btnEvento');
let nombreSenor = document.getElementById('nombreSenor')
let nombre = document.getElementById('nombre')
btnEvento.addEventListener("click", function(event){
  
    console.log(event);
})

document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        console.log("Enter pulsado en cualquier parte");
    }
});

nombreSenor.addEventListener("keydown", function(event){
    if(event.key === "Tab"){
       event.preventDefault();
       nombre.focus()
    }
})

