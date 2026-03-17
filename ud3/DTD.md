<h1>6. Definición de tipos de documento (DTD)</h1>

<p>Una vez comprendida la estructura básica de los documentos XML, es necesario establecer mecanismos que permitan definir qué estructura deben seguir dichos documentos.</p>

<p>Para ello se utilizan los <strong>DTD (Document Type Definition)</strong>, que permiten definir formalmente qué elementos pueden aparecer en un documento XML, en qué orden deben aparecer y qué atributos pueden tener.</p>

<p>Un DTD permite definir:</p>

<ul>
<li>Qué elementos pueden existir</li>
<li>Qué elementos pueden contener otros elementos</li>
<li>El orden de los elementos</li>
<li>Cuántas veces puede aparecer cada elemento</li>
<li>Qué atributos pueden tener los elementos</li>
</ul>

<p>Cuando un documento XML cumple las reglas definidas en su DTD se dice que el documento es <strong>válido</strong>.</p>

<h2>6.1 Asociación de un DTD a un documento XML</h2>

<p>Para validar un documento XML mediante un DTD es necesario asociarlo al documento mediante la declaración <strong>DOCTYPE</strong>.</p>

Ejemplo:

<pre>
&lt;?xml version="1.0"?&gt;

&lt;!DOCTYPE alumnos SYSTEM "alumnos.dtd"&gt;

&lt;alumnos&gt;
    &lt;alumno&gt;
        &lt;nombre&gt;Ana&lt;/nombre&gt;
        &lt;edad&gt;20&lt;/edad&gt;
    &lt;/alumno&gt;
&lt;/alumnos&gt;
</pre>

<p>En este caso:</p>

<ul>
<li><strong>DOCTYPE</strong> indica que el documento XML se validará mediante un DTD</li>
<li><strong>SYSTEM</strong> indica que el DTD se encuentra en un archivo externo llamado <strong>alumnos.dtd</strong></li>
</ul>

<h2>6.2 Definición de elementos en DTD</h2>

<p>Los elementos en un DTD se definen mediante la declaración:</p>

<pre>
&lt;!ELEMENT nombre_elemento contenido&gt;
</pre>

Ejemplo:

<pre>
&lt;!ELEMENT alumno (nombre, edad)&gt;
&lt;!ELEMENT nombre (#PCDATA)&gt;
&lt;!ELEMENT edad (#PCDATA)&gt;
</pre>

<p>En este caso:</p>

<ul>
<li><strong>alumno</strong> contiene los elementos <strong>nombre</strong> y <strong>edad</strong></li>
<li><strong>#PCDATA</strong> indica que el elemento contiene texto</li>
</ul>

<h2>6.3 Elementos que contienen texto</h2>

<p>Cuando un elemento contiene únicamente texto se utiliza la palabra reservada:</p>

<pre>
#PCDATA
</pre>

Ejemplo:

<pre>
&lt;!ELEMENT nombre (#PCDATA)&gt;
</pre>

Ejemplo de XML válido:

<pre>
&lt;nombre&gt;Francisco&lt;/nombre&gt;
</pre>

<h2>6.4 Elementos que contienen otros elementos</h2>

<p>Un elemento puede contener otros elementos en su interior.</p>

Ejemplo:

<pre>
&lt;!ELEMENT alumno (nombre, edad)&gt;
</pre>

<p>Esto indica que el elemento <strong>alumno</strong> debe contener:</p>

<ul>
<li>primero <strong>nombre</strong></li>
<li>después <strong>edad</strong></li>
</ul>

Ejemplo de XML válido:

<pre>
&lt;alumno&gt;
    &lt;nombre&gt;Ana&lt;/nombre&gt;
    &lt;edad&gt;20&lt;/edad&gt;
&lt;/alumno&gt;
</pre>

<h2>6.5 Elementos que pueden repetirse</h2>

<p>DTD permite indicar cuántas veces puede aparecer un elemento mediante distintos símbolos.</p>

<ul>
<li><strong>+</strong> → uno o más</li>
<li><strong>*</strong> → cero o más</li>
<li><strong>?</strong> → cero o uno</li>
</ul>

Ejemplo:

<pre>
&lt;!ELEMENT biblioteca (libro+)&gt;
&lt;!ELEMENT libro (titulo, autor)&gt;
</pre>

<p>Esto indica que:</p>

<ul>
<li>una biblioteca debe tener <strong>uno o más libros</strong></li>
</ul>

Ejemplo de XML válido:

<pre>
&lt;biblioteca&gt;
    &lt;libro&gt;
        &lt;titulo&gt;XML básico&lt;/titulo&gt;
        &lt;autor&gt;Juan&lt;/autor&gt;
    &lt;/libro&gt;

    &lt;libro&gt;
        &lt;titulo&gt;DTD avanzado&lt;/titulo&gt;
        &lt;autor&gt;Laura&lt;/autor&gt;
    &lt;/libro&gt;
&lt;/biblioteca&gt;
</pre>

<h2>6.6 Alternativas de elementos</h2>

<p>DTD también permite indicar que un elemento puede contener <strong>uno entre varios posibles elementos</strong> mediante el símbolo <strong>|</strong>.</p>

Ejemplo:

<pre>
&lt;!ELEMENT pago (tarjeta | efectivo)&gt;
&lt;!ELEMENT tarjeta (#PCDATA)&gt;
&lt;!ELEMENT efectivo (#PCDATA)&gt;
</pre>

Ejemplo de XML válido:

<pre>
&lt;pago&gt;
    &lt;tarjeta&gt;1234&lt;/tarjeta&gt;
&lt;/pago&gt;
</pre>

<h2>6.7 Definición de atributos en DTD</h2>

<p>Los atributos se definen mediante la declaración:</p>

<pre>
&lt;!ATTLIST&gt;
</pre>

Sintaxis general:

<pre>
&lt;!ATTLIST elemento atributo tipo valor&gt;
</pre>

Ejemplo:

<pre>
&lt;!ELEMENT alumno (nombre, edad)&gt;
&lt;!ATTLIST alumno id CDATA #REQUIRED&gt;
</pre>

<p>En este caso:</p>

<ul>
<li><strong>id</strong> es un atributo del elemento <strong>alumno</strong></li>
<li><strong>CDATA</strong> indica que contiene texto</li>
<li><strong>#REQUIRED</strong> indica que el atributo es obligatorio</li>
</ul>

Ejemplo de XML válido:

<pre>
&lt;alumno id="1"&gt;
    &lt;nombre&gt;Francisco&lt;/nombre&gt;
    &lt;edad&gt;33&lt;/edad&gt;
&lt;/alumno&gt;
</pre>

<h3>Varios atributos dentro de un mismo elemento</h3>
Para definir varios atributos de un mismo elemento, se puede utilizar una o varias declaraciones de atributos. Los
siguientes ejemplos son equivalentes:

```xml
<!ATTLIST nombreElemento nombreAtributo1 tipoAtributo1 valorInicialAtributo1>
<!ATTLIST nombreElemento nombreAtributo2 tipoAtributo2 valorInicialAtributo2>
<!ATTLIST nombreElemento
nombreAtributo1 tipoAtributo1 valorInicialAtributo1
nombreAtributo2 tipoAtributo2 valorInicialAtributo2
>
```

Los tipos de atributos son los siguientes:
<strong>CDATA:</strong> el atributo contiene caracteres (sin restricciones). Por ejemplo:

<img width="765" height="273" alt="image" src="https://github.com/user-attachments/assets/a0ef2672-87b5-4cf3-b94a-5768c6a6482c" />

<strong>NMTOKEN:</strong> el atributo sólo contiene letras, dígitos, y los caracteres punto ".", guión "-", subrayado "_" y dos puntos
":". Por ejemplo:
<img width="781" height="151" alt="image" src="https://github.com/user-attachments/assets/bd2ccfb6-6c52-4d5c-bb68-e4e43a5d253e" />

<img width="776" height="201" alt="image" src="https://github.com/user-attachments/assets/bcdfc1eb-041a-43e5-9ee4-d0a0c857eaf2" />

<strong>NMTOKENS:</strong> el atributo sólo contiene letras, dígitos, y los caracteres punto ".", guión "-", subrayado "_", dos puntos
":" (como el tipo NMTOKEN) y también espacios en blanco. Por ejemplo:
<img width="779" height="279" alt="image" src="https://github.com/user-attachments/assets/b5be6732-b618-4a52-a517-18c54dda6503" />

<strong>valores:</strong> el atributo sólo puede contener uno de los términos de una lista. La lista se escribe entre paréntesis, con los
términos separados por una barra vertical "|". Por ejemplo:

<img width="781" height="238" alt="image" src="https://github.com/user-attachments/assets/e9c18c24-5ed6-424a-b886-6fd7b9cf9f19" />

<strong>ID:</strong> el valor del atributo (no el nombre) debe ser único y no se puede repetir en otros elementos o atributos. Por
ejemplo:

<img width="818" height="276" alt="image" src="https://github.com/user-attachments/assets/fc87054d-24ca-4e61-a956-2cbf40014a3c" />

<strong>IDREF:</strong> el valor del atributo debe coincidir con el valor del atributo ID de otro elemento. Por ejemplo:
<img width="756" height="79" alt="image" src="https://github.com/user-attachments/assets/b1804449-3f09-45df-8c83-805246dd5bcc" />
<img width="784" height="263" alt="image" src="https://github.com/user-attachments/assets/6c4eedb6-4984-4cb2-8e56-d09053db8f43" />

<strong>IDREFS:</strong> el valor del atributo es una serie de valores separados por espacios que coinciden con el valor del atributo
ID de otros elementos.

<img width="768" height="435" alt="image" src="https://github.com/user-attachments/assets/4cade6e6-beec-43d4-b6c3-cfa4bebc6a3e" />

Los valores iniciales de los atributos son los siguientes:
<strong>#REQUIRED:</strong> el atributo es obligatorio, aunque no se especifica ningún valor predeterminado. Por ejemplo:

<img width="771" height="272" alt="image" src="https://github.com/user-attachments/assets/0ace22cf-b749-47ab-bac4-265ea3a54af1" />

<strong>#IMPLIED:</strong> el atributo no es obligatorio y no se especifica ningún valor predeterminado. Por ejemplo:
<img width="793" height="273" alt="image" src="https://github.com/user-attachments/assets/c602355c-9640-48ac-90a8-a9e3524fbbef" />

<strong>#FIXED valor:</strong> el atributo tiene un valor fijo. Por ejemplo:
<img width="778" height="271" alt="image" src="https://github.com/user-attachments/assets/f4d20ff7-c8d8-4eac-aa8d-b0002a87996e" />

<strong>valor:</strong> el atributo tiene un valor predeterminado. Por ejemplo:
<img width="739" height="294" alt="image" src="https://github.com/user-attachments/assets/1624496e-457e-49cc-9601-6276ec66bd39" />








<h2>6.8 DTD interno</h2>

<p>Un DTD también puede definirse dentro del propio documento XML.</p>

<pre>
&lt;?xml version="1.0"?&gt;

&lt;!DOCTYPE alumno [

&lt;!ELEMENT alumno (nombre, edad)&gt;
&lt;!ELEMENT nombre (#PCDATA)&gt;
&lt;!ELEMENT edad (#PCDATA)&gt;

]&gt;

&lt;alumno&gt;
    &lt;nombre&gt;Ana&lt;/nombre&gt;
    &lt;edad&gt;20&lt;/edad&gt;
&lt;/alumno&gt;
</pre>

<p>Este tipo de definición se denomina <strong>DTD interno</strong>.</p>
