# Unidad Didáctica 4: JSON (JavaScript Object Notation)

## 1. Introducción a JSON

JSON (JavaScript Object Notation) es un formato ligero de intercambio de datos, fácil de leer para las personas y sencillo de procesar para las máquinas.

Se utiliza ampliamente en aplicaciones web, APIs, bases de datos NoSQL y sistemas distribuidos.

### Ventajas de JSON

- Formato sencillo y legible.
- Poco peso frente a XML.
- Compatible con múltiples lenguajes.
- Ideal para intercambio de datos.
- Muy usado en desarrollo web moderno.

---

## 2. Sintaxis básica de JSON

Un documento JSON está compuesto por:

- **Objetos** → entre llaves `{ }`
- **Arrays** → entre corchetes `[ ]`
- **Pares clave-valor**
- Valores de tipo:
  - String
  - Number
  - Boolean
  - Null
  - Object
  - Array

### Ejemplo simple

```json
{
  "nombre": "Francisco",
  "edad": 35,
  "activo": true
}
```

---

## 3. Reglas de JSON

- Las claves van entre comillas dobles.
- Los textos usan comillas dobles.
- No se permiten comentarios.
- No admite coma final.
- Sensible a mayúsculas/minúsculas.

### Incorrecto

```json
{
  nombre: "Ana",
}
```

### Correcto

```json
{
  "nombre": "Ana"
}
```

---

## 4. Objetos JSON

Representan entidades con propiedades.

```json
{
  "producto": "Portátil",
  "precio": 799,
  "stock": true
}
```

---

## 5. Arrays JSON

Permiten almacenar listas.

```json
[
  "HTML",
  "CSS",
  "JavaScript",
  "JSON"
]
```

### Array de objetos

```json
[
  {
    "nombre": "Ana",
    "edad": 20
  },
  {
    "nombre": "Luis",
    "edad": 22
  }
]
```

---

## 6. Tipos de datos en JSON

| Tipo | Ejemplo |
|------|---------|
| String | `"Hola"` |
| Number | `25` |
| Boolean | `true` |
| Null | `null` |
| Object | `{ "x": 1 }` |
| Array | `[1,2,3]` |

---

## 7. JSON y JavaScript

### Convertir objeto a JSON

```javascript
let alumno = {
  nombre: "Pedro",
  nota: 8
};

let texto = JSON.stringify(alumno);
console.log(texto);
```

### Convertir JSON a objeto

```javascript
let datos = '{"nombre":"Pedro","nota":8}';

let obj = JSON.parse(datos);

console.log(obj.nombre);
```




---

## 8. JSON en APIs

Muchas APIs devuelven datos en JSON.

### Ejemplo respuesta API

```json
{
  "id": 1,
  "titulo": "Curso JSON",
  "precio": 50
}
```

---

## 9. Validación JSON

Herramientas online:

- JSONLint
- CodeBeautify JSON Validator
- Visual Studio Code

---

## 10. Diferencias entre JSON y XML

| JSON | XML |
|------|-----|
| Más ligero | Más pesado |
| Más sencillo | Más verboso |
| Muy usado en APIs | Muy usado en documentos |
| Fácil en JavaScript | Más estructurado |

---

## 11. Buenas prácticas

- Nombres claros en claves.
- Mantener estructura consistente.
- Sangrado correcto.
- Evitar datos redundantes.
- Validar siempre.

---

## 12. EJEMPLOS

### JSON de alumnos

```json
{
  "curso": "1º DAW",
  "alumnos": [
    {
      "nombre": "Ana",
      "nota": 9
    },
    {
      "nombre": "Luis",
      "nota": 7
    }
  ]
}
```

### JSON de API´s

<a heref="https://pokeapi.co/api/v2/pokemon/ditto">https://pokeapi.co/api/v2/pokemon/ditto</a>
<p></p>
<a hrenf="https://api.chucknorris.io/jokes/random">https://api.chucknorris.io/jokes/random</a>

---

