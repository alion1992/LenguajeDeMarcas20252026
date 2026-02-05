const form = document.getElementById("formHogwarts");
const tabla = document.getElementById("tablaAlumnos");
let btnOcultarMostrar = document.getElementById("btnOcultarMostrar");
let labelRegistro = document.getElementById("labelRegistro")
let inputRegistro = document.getElementById("registroArea")
let contador = 0

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const apellidos = document.getElementById("apellidos").value;
        const edad = document.getElementById("edad").value;
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
    
