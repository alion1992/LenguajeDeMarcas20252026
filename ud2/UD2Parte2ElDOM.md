# UD2 – Parte 2  
## El DOM y la manipulación de documentos HTML con JavaScript

---

## 1. JavaScript y la página web

JavaScript, además de ser un lenguaje de programación, se utiliza en el desarrollo web para interactuar con el contenido HTML de una página.

Gracias a JavaScript podemos:
- Modificar el contenido de una página
- Cambiar estilos
- Responder a acciones del usuario
- Crear páginas dinámicas sin recargar

Para realizar estas tareas, JavaScript utiliza el DOM.

---

## 2. ¿Qué es el DOM?

DOM significa Document Object Model (Modelo de Objetos del Documento).

Es una representación en forma de árbol del documento HTML que crea el navegador al cargar una página.

Cada etiqueta HTML se convierte en un objeto que JavaScript puede leer y modificar.

---

## 3. Estructura del DOM

El DOM tiene una estructura jerárquica:

- document
  - html
    - head
    - body
      - elementos visibles de la página

Acceso al documento:

```javascript
document
```

## 4. El objeto document

El objeto document permite acceder y manipular los elementos HTML.

```javascript
console.log(document);
```

## 5. Selección de elementos del DOM

### 5.1 Selección por id

```html
<p id="texto">Hola mundo</p>
```

```javascript
let parrafo = document.getElementById("texto");
```

### 5.2 Selección por selector CSS

```html
<p class="mensaje">Mensaje 1</p>
<p class="mensaje">Mensaje 2</p>
```

```javascript
let primero = document.querySelector(".mensaje");
let todos = document.querySelectorAll(".mensaje");

primero.classList.add("destacado");
primero.classList.remove("mensaje");
primero.classList.toggle("oculto");
```

## 6. Acceso y modificación del contenido

### 6.1 Texto del elemento

Permite modificar el contenido de texto de un elemento HTML seleccionado.

Modificar solo el texto del elemento:

```javascript
parrafo.textContent = "Texto modificado";
```

Modificar el contenido HTML del elemento:

```javascript
parrafo.innerHTML = "<strong>Texto en negrita</strong>";
```

Diferencias:
- `textContent` inserta únicamente texto
- `innerHTML` permite insertar etiquetas HTML

---

## 7. Modificación de atributos

Los atributos HTML pueden leerse, modificarse, añadirse o eliminarse desde JavaScript.

Ejemplo de elemento HTML:

```html
<img id="imagen" src="foto1.jpg">
```

Seleccionar el elemento:

```javascript
let img = document.getElementById("imagen");
```

Modificar un atributo existente:

```javascript
img.src = "foto2.jpg";
```

Añadir un atributo:

```javascript
img.setAttribute("alt", "Imagen de ejemplo");
```

Eliminar un atributo:

```javascript
img.removeAttribute("alt");
```

---

## 8. Manipulación de clases CSS

La manipulación de clases es la forma recomendada de modificar estilos desde JavaScript.

Elemento HTML de ejemplo:

```html
<p id="aviso" class="rojo">Atención</p>
```

Añadir una clase:

```javascript
aviso.classList.add("grande");
```

Eliminar una clase:

```javascript
aviso.classList.remove("rojo");
```

Alternar una clase:

```javascript
aviso.classList.toggle("oculto");
```

---

## 9. Modificación de estilos

También se pueden modificar estilos CSS directamente desde JavaScript.

```javascript
aviso.style.color = "blue";
aviso.style.fontSize = "20px";
```

Notas:
- Los estilos se escriben en formato camelCase
- Es preferible usar clases CSS siempre que sea posible

---

## 10. Creación de elementos

JavaScript permite crear elementos HTML de forma dinámica.

Ejemplo de creación e inserción de un elemento:

```javascript
let nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Nuevo párrafo creado desde JavaScript";

document.body.appendChild(nuevoParrafo);
```

---

## 11. Eliminación de elementos

Eliminar un elemento directamente:

```javascript
nuevoParrafo.remove();
```

Eliminar un elemento desde su elemento padre:

```javascript
document.body.removeChild(nuevoParrafo);
```

---
