# UD2 – Convenciones de código

Las convenciones de código son normas de estilo que se utilizan a la hora de programar para que el código sea:

- Más facil de leer
- Más facil de mantener
- Comprensibles para cualquier programador, no solo para quien lo escribió

## Nombres de variables y funciones

Para los nombres de variables y funciones utilizaremos el formato camelCase. Este formato consiste en escribir los nombres de la siguiente forma:

- La primera palabra empieza por minuscula
- Cada palabra siguiente empieza en mayúscula
- No se usan espacios ni guiones

Se llama así porque las mayúsculas sobresalen como si fueran las jorobas de un camello.

### Ejemplos

```javascript
let precioFinal;
let numeroTelefono;
let salarioBrutoAnual;

function calcularPrecioFinal() {}
```

#### Nombres incorrectos

```javascript
let Precio_final;
let numerotelefono;
let salario_bruto;
```

## Nombres de constantes

Una constante es un dato cuyo valor no cambia durante la ejecución de un programa, como:

- Valores máximos y mínimos
- Un porcentaje fijo

### Ejemplos

```javascript
const IVA = 21;
const MAX_USUARIOS = 50;
```

## Nombres descriptivos

Evitar el uso de nombres tanto en variables como en constantes que no expliquen qué tipo de información guardan.
Un buen nombre debe:

- Indicar qué representa la varaible
- Evitar comentarios innecesarios

### Ejemplos

```javascript
let salarioBruto;
```

Nombres de variables que no se deben usar:

```javascript
let x;
let d1;
```

## Punto y coma ;

En Javascript no es obligatorio poner ; al final de una linea en la mayoría de los casos. Sin embargo, es recomendable debido a que evita errores dificiles de detectar y hace el código más claro.

```javascript
let nombre = "Ana";
console.log(nombre);
```
