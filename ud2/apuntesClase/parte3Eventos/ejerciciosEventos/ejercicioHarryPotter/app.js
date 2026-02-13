const form = document.getElementById("formHogwarts");
const tabla = document.getElementById("tablaAlumnos");
let btnOcultarMostrar = document.getElementById("btnOcultarMostrar");
let labelRegistro = document.getElementById("labelRegistro")
let inputRegistro = document.getElementById("registroArea")
let contador = 0

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let respuesta = confirm("¿Estas seguro que quieres añadir el registro a la tabla?")
        
        if (respuesta){
              const nombre = document.getElementById("nombre").value;
        const apellidos = document.getElementById("apellidos").value;
        let edad = document.getElementById("edad").value;
        if (edad == ""){
            let edadIntroducida = prompt("Introduce la edad")
            edad = Number(edadIntroducida)
        }
        alert("Me paro")
        const casa = document.getElementById("casa").value;
        const sangre = document.getElementById("sangre").value;
        const mascota = document.getElementById("mascota").value;
        const asignatura = document.querySelector("input[name='asignatura']:checked").value;

        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${nombre} ${apellidos}</td>
            <td>${edad}</td>
            <td>${casa}</td>
            <td>${sangre}</td>
            <td>${asignatura}</td>
            <td>${mascota}</td>
        `;

        tabla.appendChild(fila);

        form.reset();
        } else {
            form.reset();
        }
      
    });

btnOcultarMostrar.addEventListener("click",function(){
    /*if (labelRegistro.style.display =="" || labelRegistro.style.display == "block"){
        labelRegistro.style.display = "none" // block
        btnOcultarMostrar.value = "Mostrar Campo"
    } else {
        labelRegistro.style.display = "block" // block
        btnOcultarMostrar.value = "Ocultar Campo"
    }*/
    inputRegistro.value = inputRegistro.value + contador+"\n"
    contador++;
})
    
