
# Práctica: Eventos en JavaScript

##  Objetivo
Practicar el uso de **eventos en JavaScript** sobre distintos elementos de un formulario HTML, utilizando eventos de ratón, teclado y formularios.

---



### Ejercicio 1
Cuando el usuario haga **click** en el botón **Enviar**, mostrar por consola el mensaje:

Formulario enviado

---

### Ejercicio 2
Mientras el usuario escribe en el campo **Nombre**, mostrar por consola el texto que va introduciendo.

---


### Ejercicio 3
Cuando el usuario pulse la tecla **Enter** estando en el campo **Nombre**, el foco debe pasar automáticamente al campo **Apellidos**.

---

### Ejercicio 4
Cuando el usuario pulse la tecla **Tab** dentro del campo **Edad**:

- Se debe impedir el comportamiento por defecto del navegador.
- El foco debe pasar al campo **Provincia**.

---


### Ejercicio 5
Cuando el usuario cambie la **Provincia** seleccionada:

Mostrar en el párrafo de resultado el texto:

Provincia seleccionada: X

---

### Ejercicio 6
Cuando el usuario marque o desmarque la casilla **Acepta condiciones**:

Mostrar por consola si las condiciones están aceptadas o no.

---


### Ejercicio 7
Cuando el usuario salga del campo **Edad**:

Si la edad introducida es menor de 18, mostrar en el párrafo de resultado:

Debes ser mayor de edad

---

### Ejercicio 8
Cuando el usuario pulse el botón **Enviar**:

- Comprobar que el campo **Nombre** no está vacío.
- Comprobar que las **condiciones** están aceptadas.

Si alguna de las comprobaciones falla, se debe mostrar un mensaje de error y no continuar con el proceso.

---


### Ejercicio 9
Mientras el usuario escribe en el campo **Observaciones**:

Mostrar en el párrafo de resultado el número de caracteres escritos.

---

### Ejercicio 10 – Nivel examen
Implementa el siguiente comportamiento:

- Al pulsar la tecla **Enter** dentro del campo **Observaciones**, se debe simular la acción del botón **Enviar**.
- El envío solo será válido si:
  - El nombre y los apellidos no están vacíos.
  - La edad es mayor o igual a 18.
  - Las condiciones han sido aceptadas.

Si todas las condiciones se cumplen, se debe mostrar el mensaje:

Formulario válido

---

## 📝 Indicaciones generales

- No está permitido modificar el HTML proporcionado.
- Se deben usar correctamente los eventos:
  - click
  - keydown
  - input
  - change
  - blur
- Cuando sea necesario, se debe utilizar preventDefault().
