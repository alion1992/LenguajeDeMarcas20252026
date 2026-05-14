# Tarea: Consumo de APIs y manejo de JSON

## Objetivo

El objetivo de esta práctica es aprender a trabajar con datos en formato JSON consumiendo APIs públicas desde JavaScript y mostrando la información de forma dinámica en una página web.

---

# Parte 1 – PokéAPI

Debéis utilizar la API pública:

[PokéAPI](https://pokeapi.co/?utm_source=chatgpt.com)

## Requisitos

1. Realizar una petición a la API para obtener los Pokémon de la primera generación.
2. Mostrar los datos en una tabla HTML.
3. La tabla debe incluir al menos:
   - Número de Pokédex
   - Nombre
   - Imagen del Pokémon
4. La tabla debe generarse dinámicamente usando JavaScript.
5. Los datos deben obtenerse mediante `fetch()`. (esta el ejemplo de realizar llamada en la clase main.js de ejemplos del tema)

---

# Parte 2 – Random User API

Debéis utilizar la API pública:

[Random User API](https://randomuser.me/api/)

## Requisitos

1. Realizar una petición a la API para obtener los datos de una persona aleatoria.
2. Mostrar la información en un formulario HTML.
3. El formulario debe incluir al menos:
   - Nombre
   - Apellidos
   - Email
   - Teléfono
   - Ciudad
   - País
   - Fotografía
4. Todos los datos deben cargarse dinámicamente desde el JSON recibido.

---

# Parte 3 – JSON local del alumno

En la parte inferior del formulario anterior debéis añadir un botón llamado:

```html
Cargar datos del alumno
```

## Funcionamiento

Al pulsar el botón:

Debe cargarse un JSON definido dentro del propio código JavaScript.
Ese JSON contendrá vuestros datos personales como alumno.
El formulario debe actualizarse automáticamente con esa información.

## Ejemplo de estructura JSON

```json
{
  "nombre": "Francisco",
  "apellidos": "García López",
  "email": "francisco@email.com",
  "telefono": "600000000",
  "ciudad": "Puertollano",
  "pais": "España"
}
```

## Entrega

Debéis entregar:

1. Código fuente

Todo el proyecto completo en una carpeta.

2. PDF de evidencias

Un documento PDF donde aparezcan capturas del proceso realizado:

Desarrollo del código
Uso de las APIs
Resultado final funcionando
Explicación breve de cada parte

### Formato de entrega

Se entregará un único archivo .zip
El nombre del archivo será:
Apellido1_Apellido2_Nombre_JSON.zip
