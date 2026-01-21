# UD2 – Parte 3  
## Eventos en JavaScript

---

## 1. ¿Qué es un evento?

Un **evento** es una acción que ocurre en la página web que puede ser detectada por JavaScript.

Algunos ejemplos de eventos son:
- Hacer clic en un botón
- Escribir en un campo de texto
- Enviar un formulario
- Pasar el ratón por encima de un elemento
- Cargar una página

JavaScript permite **reaccionar** a estos eventos ejecutando código.

---

## 2. Programación orientada a eventos

La programación en JavaScript en el navegador se basa en **eventos**.

La idea principal es:
- El usuario realiza una acción
- Se produce un evento
- JavaScript ejecuta una función asociada a ese evento

---

## 3. Formas de gestionar eventos

---

### 3.1 Evento directamente en HTML (NO recomendado)

```html
<button onclick="saludar()">Saludar</button>
```

```javascript
function saludar() {
    alert("Hola");
}
```

No es una buena práctica  
Mezcla HTML con JavaScript

---

### 3.2 Usando propiedades del DOM

```javascript
let boton = document.getElementById("miBoton");

boton.onclick = function () {
    alert("Botón pulsado");
};
```

Solo permite un evento por elemento

---

### 3.3 Usando `addEventListener` (RECOMENDADO)

```javascript
let boton = document.getElementById("miBoton");

boton.addEventListener("click", function () {
    alert("Botón pulsado");
});
```

Permite varios eventos  
Código limpio  
Forma estándar en desarrollo web

---

## 4. Tipos de eventos más comunes

---

### 4.1 Eventos de ratón

- `click`
- `dblclick`
- `mouseover`
- `mouseout`

```javascript
elemento.addEventListener("mouseover", () => {
    elemento.style.backgroundColor = "yellow";
});
```

---

### 4.2 Eventos de teclado

- `keydown`
- `keyup`

```javascript
input.addEventListener("keyup", () => {
    console.log(input.value);
});
```

---

### 4.3 Eventos de formulario

- `submit`
- `change`
- `input`

```javascript
formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Formulario enviado");
});
```

---

## 5. El objeto `event`

Cuando ocurre un evento, JavaScript crea un objeto llamado `event`.

Este objeto contiene información sobre el evento.

```javascript
boton.addEventListener("click", (event) => {
    console.log(event);
});
```

---

### 5.1 `event.target`

Indica el elemento que ha generado el evento.

```javascript
boton.addEventListener("click", (event) => {
    console.log(event.target);
});
```

---

### 5.2 `event.preventDefault()`

Evita el comportamiento por defecto del navegador.

Ejemplo típico: formularios.

```javascript
formulario.addEventListener("submit", (event) => {
    event.preventDefault();
});
```

---

## 6. Uso de eventos con el DOM

Los eventos se utilizan para:
- Modificar contenido
- Cambiar estilos
- Crear o eliminar elementos
- Validar formularios

Ejemplo:

```javascript
boton.addEventListener("click", () => {
    parrafo.textContent = "Texto cambiado";
});
```

---

## 7. Buenas prácticas con eventos

- Usar siempre `addEventListener`
- No mezclar HTML y JavaScript
- Usar funciones claras y reutilizables
- Evitar código duplicado

---

## 8. Relación con el desarrollo web moderno

Los frameworks como Angular o React se basan internamente en eventos.

Comprender los eventos en JavaScript es fundamental para:
- Validar formularios
- Crear interfaces interactivas
- Entender frameworks modernos

---


