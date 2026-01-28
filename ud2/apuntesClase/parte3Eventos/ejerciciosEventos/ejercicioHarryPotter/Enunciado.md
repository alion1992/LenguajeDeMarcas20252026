# Práctica JavaScript – Validación de formulario Hogwarts

## Contexto

El Colegio de Magia y Hechicería Hogwarts necesita mejorar su sistema de registro de nuevos alumnos.  
Actualmente existe un formulario HTML que permite registrar alumnos y añadirlos a una tabla de forma dinámica.

La tarea consiste en implementar todas las validaciones utilizando JavaScript y manipulación del DOM.

Está permitido modificar el HTML si es necesario para añadir contenedores de errores o mensajes informativos.

---

## Objetivos de la práctica

- Aplicar validaciones de formularios con JavaScript
- Manipular el DOM mediante eventos
- Gestionar mensajes de error dinámicos
- Añadir filas dinámicamente a una tabla

---

## Validaciones obligatorias

### 1. Campos de texto

Los siguientes campos son obligatorios:

- Nombre
- Apellidos

Condiciones:
- Mínimo 3 caracteres
- Máximo 20 caracteres
- No pueden estar vacíos

---

### 2. Edad

- Campo obligatorio
- Debe ser numérico
- La edad debe ser menor de 18 años

---

### 3. Campos obligatorios (select y radio)

Los siguientes campos deben estar seleccionados obligatoriamente:

- Casa de Hogwarts
- Tipo de sangre
- Asignatura favorita
- Mascota

---

## Validaciones específicas

### 4. Restricción Casa Slytherin y Sangre mestiza

Si el usuario selecciona:

- Casa: Slytherin
- Tipo de sangre: Mestiza

Se debe mostrar justo debajo del campo "Tipo de sangre" un mensaje en color rojo indicando:

No se permiten alumnos de sangre mestiza en la casa Slytherin.

---

### 5. Restricción Casa Slytherin y Hijo de muggles

Si el usuario selecciona:

- Casa: Slytherin
- Tipo de sangre: Hijo de muggles

Se debe mostrar debajo del campo "Tipo de sangre" un mensaje en color verde indicando:

Los hijos de muggles no pueden registrarse en la casa Slytherin.

En ambos casos, el registro no debe permitirse.

---

## Comentarios adicionales

- El campo "Comentarios adicionales" no es obligatorio
- Si el usuario no introduce ningún comentario y pulsa el botón de registro:
  - Se debe añadir dinámicamente un placeholder al campo con el texto:

Por favor, añade comentarios adicionales

---

## Mensajes de error generales

- Todos los errores generales del formulario deben mostrarse:
  - Debajo del botón de registro
  - En un contenedor común de errores
- Antes de validar de nuevo, los errores anteriores deben eliminarse

---

## Registro correcto

Al pulsar el botón "Registrar alumno":

- Si todas las validaciones son correctas:
  - El alumno se añadirá como una nueva fila en la tabla
  - El formulario se reseteará
- Si existe algún error:
  - No se añadirá el registro a la tabla

---

## Ampliaciones opcionales

- Cambiar el color de la fila según la casa
- Añadir un contador de alumnos por casa
- Almacenar los registros en localStorage
- Incorporar un botón para eliminar alumnos

---

## Entrega

- Archivo HTML
- Archivo JavaScript (o script incrustado)
- Código bien indentado y comentado
