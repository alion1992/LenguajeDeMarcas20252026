### Ejercicio 0

Partiendo desde un HTML vacío hay que crear los siguientes elementos dinámicamente.

- 3 p dinámicamente con un texto diferente en cada uno y añadirlos al body.
- Añadir la clase destacado a los 3 p
- Quitar la clase destacado el tercer p
- Modificar el texto del primer p
- Modificar directamente el estilo del 1º p para que el tamaño de fuente sea 40px
- Crear una etiqueta imagen dinámicamente y añadirle un texto alternativo

### Ejercicio 1

Se desa crear una página web que implemente un contador cuyo valor inicial sea 0.
El contador deberá modificarse mediante distintos botones utilizando Javascript.

#### Estructura HTML

La página debe contener los siguientes elementos:

- Un elemento <p> que mostrará el valor actual del contador
- Un botón con el texto "+" para incrementar el valor del contador en 1

- Un botón con el texto "-" para decrementar el valor del contador en 1

- Un botón con el texto "Reset" para reiniciar el contador a 0.

#### Funcionalidad Javascript

1. EL contador comenzará con el valor 0 al cargar la página
2. Al pusarl el botón "+"
   - El valor del contador se incrementará en 1
   - El nuevo valor se mostrará en el elemento <p>
3. AL pulsar el botón "-"
   - El valor del contador se decrementará en 1 si el valor es mayor que 0
   - El nuevo valor se mostrará en el elemento <p>

4. Al pulsar el botón "Reset"
   - El valor del contador se volverá a 0.
   - El valor mostrado en pantalla se actualizará

### Ejercicio 2 Semáforo interactivo

Se desea crear una página web que simule un semáforo (rojo, amarillo y verde) usando JavaScript.

---

## Estructura HTML

La página debe contener:

- Un <h1> con el título: "Semáforo interactivo"
- Un contenedor <div id="semaforo"> con tres divs dentro:
  - #rojo
  - #amarillo
  - #verde
- Tres botones:
  - "Rojo"
  - "Amarillo"
  - "Verde"
- Un <p id="mensaje"> para mostrar el estado actual
