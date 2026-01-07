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
```