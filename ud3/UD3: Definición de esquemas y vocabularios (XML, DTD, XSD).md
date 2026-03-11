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

<img width="560" height="220" alt="image" src="https://github.com/user-attachments/assets/ba4ff402-83ff-414a-b3fb-418307859077" />

<img width="270" height="171" alt="image" src="https://github.com/user-attachments/assets/ef5415af-c2ec-48aa-ad2a-f466dedbafd8" />

<h1>4. Casos reales donde se utiliza XML</h1>

<h2>Archivos de configuaración de aplicaciones web</h2>

En aplicaciones java para la conexción a BBDD:
```xml
<configuration>
   <database>
      <host>localhost</host>
      <port>5432</port>
   </database>
</configuration>
```
Frameworks como:
- Spring
- Maven
- Hibernate

<img width="335" height="128" alt="image" src="https://github.com/user-attachments/assets/bd9df3b1-9068-47d0-8b65-1b6d9f2a753b" />

<img width="871" height="704" alt="image" src="https://github.com/user-attachments/assets/43d5e38e-e914-4b66-8046-cd5d8e84acbb" />

<img width="766" height="258" alt="image" src="https://github.com/user-attachments/assets/8cd2c1ae-c781-47c5-a91f-cd375d1a69fa" />

<h2>Android archivos de interfaces gráficas</h2>

```xml
<LinearLayout>
    <TextView
        android:text="Hola mundo" />

    <Button
        android:text="Aceptar"/>
</LinearLayout>
```
Aquí XML define:

- botones
- textos
- layouts
- estilos

<strong>XML se utiliza cuando diferentes sistemas necesitan intercambiar información de forma estructurada y validable.</strong>

<h1>5. Sintáxis básica de los elementos en XML</h1>

Los documentos XML están formados por elementos, que se representan mediante etiquetas. Cada elemento puede contener texto, otros elementos o atributos.

<h3> Elementos con contenido</h3>
```xml
<nombre>Francisco</nombre>
```
En este ejemplo:
- <nombre> → etiqueta de apertura
- Francisco → contenido
- </nombre> → etiqueta de cierre

<h3>Elementos Anidados</h3>
Un elemento puede contener otros elementos.
```xml
<alumno>
    <nombre>Ana</nombre>
    <edad>20</edad>
</alumno>
```

<h3>Elementos Vacíos</h3>
Un elemento puede no tener contenido. En ese caso puede escribirse de dos formas.
Forma larga:
```xml
<salto></salto>
```
Forma abreviada:
```xml 
<salto/>
```
La segunda forma es la más utilizada
```xml 
<imagen src="foto.jpg"/>
```
<h3>Atributos en XML</h3>

Los elementos pueden tener atributos, que proporcionan información adicional.
Por ejemplo:
```xml
<alumno id="1">
    <nombre>Juanma</nombre>
</alumno>
```
En este caso:
- id es un atributo
- su valor es "1"
Características de los atributos:

- siempre aparecen en la etiqueta de apertura
- siempre tienen un valor
- el valor debe ir entre comillas

<h3>Múltiples atributos</h3>

Un elemento puede tener varios atributos.
```xml
<producto id="23" categoria="informatica">
    <nombre>Teclado</nombre>
</producto>
```
