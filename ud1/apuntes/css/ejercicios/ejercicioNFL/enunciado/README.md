
<h1 align="center">EJERCICIO NFL MADRID 2025</h1>

<p align="center">
<img width="600" height="632" alt="image" src="https://github.com/user-attachments/assets/6baec671-2677-416f-89b9-5b8aba489c78" />
</p>

Vamos a trabajar sobre una página web con temática NFL que contiene formularios, botones y diferentes secciones.
El objetivo es crear una hoja de estilos profesional, utilizando clases, ids, selectores avanzados y estilos reutilizables.

### Tareas a realizar
<strong>1.Crear una hoja de estilos CSS externa</strong>

Debéis enlazar un archivo styles.css desde vuestro HTML.

<strong>2.Crear estilos reutilizables</strong>

Diseñad una clase general de botones (.btn) que se pueda reaplicar en toda la web.

Cread una clase para inputs y formularios (.input-text, .form-control, etc.), para que los campos de formulario tengan un estilo uniforme.

Aplicad pseudoclases como :hover, :focus y :checked.

<strong>3.Utilizar selectores por id</strong>

Al menos dos elementos deben ser estilizados usando su id.
Ejemplos:

El botón principal (#btn-registrar)

Un bloque concreto como el formulario (#form-jugador)

El buscador (#buscar)

<strong>4.Diseñar cabecera y pie de página</strong>

La web debe tener:

Una cabecera fija o destacada (header) con un menú o título.

Un pie de página (footer) con el texto “Draft NFL – DAW/DAM.

Ambos deben tener estilos propios y diferenciados.

<strong>5.Crear una segunda página: contacto.html</strong>

Debéis crear una página de contacto que incluya un formulario básico (nombre, email y mensaje).

Debe reutilizar los mismos estilos creados en styles.css sin hacer nuevas clases si no es necesario.

Solo se permite crear estilos nuevos si realmente son específicos de la página de contacto.

<strong>6.Establecer coherencia visual</strong>

Los estilos deben ser coherentes entre ambas páginas.

Debéis usar tipografías, colores y márgenes que den sensación de proyecto unificado.

<strong>7.Uso obligatorio de selectores variados</strong>

La entrega debe incluir:

✔ Selectores por clase

✔ Selectores por id

✔ Selectores por atributo (ej: [type="radio"])

✔ Pseudoclases

<h2>PANTALLA JUGADORES</h2>
Pantalla de Registro de Jugadores NFL

Debes crear la pantalla “Registro de Jugadores NFL”, donde el usuario introducirá los datos de un nuevo jugador y los validará antes de registrarlo. El ejercicio incluye formularios, botones, validaciones y mensajes de estado.

 ### Objetivos:

Crear un formulario completo con varios tipos de campos.
<ul>
Implementar un botón Registrar que valide todos los datos.

Implementar un botón Limpiar que restablezca todo el formulario.



Aplicar estilos CSS utilizando clases reutilizables

Campos obligatorios y validaciones:
<ul>
<li>Nombre del jugador</li>
Tipo texto. Campo obligatorio. Debe tener un mínimo de 3 caracteres.

<li>Edad</li>
Tipo number. Campo obligatorio. Debe estar entre 18 y 45 años y ser un número entero.

<li>Posición del jugador</li>
Tipo select. Opciones: QB, RB, WR, TE, LB, DB. Es obligatorio seleccionar una opción válida.

<li>Equipo actual</li>
Tipo texto. Campo obligatorio. Mínimo 2 caracteres.

<li>Peso del jugador</li>
Tipo number. Campo obligatorio. Debe estar entre 60 y 160 kg. Se permiten decimales.

<li>Tiempo en 40 yardas</li>
Tipo number. Campo opcional. Debe estar entre 4.0 y 6.0 segundos.

<li>Correo de contacto</li>
Tipo email. Campo obligatorio. Debe tener un formato válido. 
pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"

<li>Comentarios o informe del jugador</li>
Tipo textarea. Campo opcional. Máximo 300 caracteres.
</ul>
Botones:

Registrar (type="submit"):
Cuando el usuario pulse Registrar, se deben validar todos los campos.

Si todas las validaciones son correctas, debe mostrarse un mensaje indicando “Jugador registrado correctamente”.


Limpiar (type="reset"):
Debe limpiar todos los campos, eliminar mensajes de error y eliminar el mensaje de registro correcto si existiera.

Validaciones:
Las validaciones pueden realizarse mediante atributos de HTML5 (required, min, max, pattern, maxlength)
