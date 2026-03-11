<h1>1. Introducción: necesidad de validar documentos XML</h1>

<p>El lenguaje XML (eXtensible Markup Language) permite representar información estructurada mediante etiquetas definidas por el propio usuario. Esta flexibilidad hace que XML sea ampliamente utilizado en el intercambio de datos entre aplicaciones y sistemas.</p>
<p>Sin embargo, esta misma flexibilidad puede generar problemas si no existe una estructura definida para los documentos. Por ejemplo, diferentes desarrolladores podrían crear documentos XML con estructuras distintas para representar la misma información, lo que dificultaría su interpretación por parte de las aplicaciones.</p>

Ejemplo de documento XML:

```xml
<alumno>
    <nombre>Francisco</nombre>
    <edad>33</edad>
    <curso>DAW</curso>
</alumno>
````

Otro podría definir el xml de la siguiente forma:

```xml
<estudiante>
    <nombre>Ricardo</nombre>
    <edad>20</edad>
    <ciclo>DAW</ciclo>
</estudiante>
```

<p>Aunque ambos documentos contienen la misma información, no siguen la misma estructura, lo que puede provocar errores en las aplicaciones que procesan estos datos.</p>

Para evitar este problema se utilizan mecanismos de validación, que permiten definir reglas sobre:
- qué elementos pueden aparecer
- en qué orden
- cuántas veces
- qué atributos pueden tener
- qué tipo de datos contienen

Estas reglas se definen mediante esquemas o vocabularios XML.

<h1>2. Concepto de vocabulario y esquema XML</h1>

<p>Un vocabulario XML define el conjunto de elementos y atributos que pueden aparecer en un documento XML y las relaciones entre ellos.</p>
<p>Un esquema XML es el mecanismo que permite describir formalmente la estructura que debe cumplir un documento XML para ser considerado válido.</p>
<p>Cuando un documento XML cumple las reglas definidas en un esquema se dice que el documento está validado.</p>

Existen diferentes tecnologías para definir estas reglas, entre las que destacan:
- DTD (Document Type Definition)
- XML Schema (XSD)

Ambas permiten definir la estructura de un documento XML, aunque XSD es más potente y flexible, por lo que es el estándar más utilizado actualmente.

<h1>3. Documentos XML bien formados y válidos</h1>
<p>Antes de validar un documento XML es necesario que esté bien formado.</p>
<p>Un documento XML bien formado cumple las reglas sintácticas del lenguaje XML:</p>

- Debe existir un único elemento raíz
- Todas las etiquetas deben cerrarse correctamente
- Las etiquetas deben estar correctamente anidadas
- Los atributos deben estar entre comillas

```xml
<libro>
    <titulo>XML desde cero</titulo>
    <autor>Juan Pérez</autor>
</libro>
```
