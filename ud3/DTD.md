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
