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
