# XSD Schema 

------------------------------------------------------------------------

## 1. XSD Introduction

XSD (XML Schema Definition) es un lenguaje que permite definir la
estructura, tipos de datos y restricciones de un documento XML.

Sirve para validar XML de forma más potente que DTD.

### Ventajas frente a DTD

-   Sintaxis XML (más coherente)
-   Tipado de datos (int, string, date)
-   Permite restricciones (rangos, patrones)
-   Reutilización de tipos
-   Soporte de namespaces

------------------------------------------------------------------------

## 2. XSD How To

### Paso 1: Crear el XSD

Define las reglas que debe cumplir el XML.

### Paso 2: Asociarlo al XML

``` xml
<libros xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="libros.xsd">
</libros>
```

### Paso 3: Validar

El parser comprueba estructura, tipos y restricciones.

------------------------------------------------------------------------

## 3. XSD `<schema>`{=html}

Elemento raíz:

``` xml
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
</xs:schema>
```

------------------------------------------------------------------------

## 4. XSD Elements

Los elementos (`xs:element`) definen las etiquetas que pueden aparecer en el XML.

### Elemento simple

```xml
<xs:element name="nombre" type="xs:string"/>
```

Representa un elemento que solo contiene texto.
El tipo (`xs:string`) indica que el contenido es texto.

Ejemplo XML válido:

```xml
<nombre>Juan</nombre>
```

---

##  Tipos de datos

-   xs:string
-   xs:int
-   xs:decimal
-   xs:boolean
-   xs:date

------------------------------------------------------------------------

### Elemento complejo

```xml
<xs:element name="persona">
  <xs:complexType>
    <xs:sequence>
      <xs:element name="nombre"/>
      <xs:element name="edad"/>
    </xs:sequence>
  </xs:complexType>
</xs:element>
```

Un elemento complejo contiene otros elementos (estructura jerárquica).
`xs:sequence` indica que deben aparecer en ese orden.

Ejemplo XML:

```xml
<persona>
  <nombre>Juan</nombre>
  <edad>30</edad>
</persona>
```

---

## 5. XSD Attributes

Los atributos proporcionan información adicional a un elemento.

```xml
<xs:attribute name="dni" type="xs:string" use="required"/>
```

### Explicación

* `name` → nombre del atributo
* `type` → tipo de dato
* `use="required"` → obligatorio

Ejemplo XML:

```xml
<persona dni="12345678A">
  <nombre>Juan</nombre>
</persona>
```

Si no aparece `dni`, el XML no valida.

---

## 6. XSD Restrictions

Permiten limitar los valores de un tipo.

```xml
<xs:simpleType name="edadTipo">
  <xs:restriction base="xs:int">
    <xs:minInclusive value="0"/>
    <xs:maxInclusive value="120"/>
  </xs:restriction>
</xs:simpleType>
```

### Muy importante

Aquí estás **creando un nuevo tipo de dato** llamado `edadTipo`.

No se aplica automáticamente, hay que usarlo en un elemento:

```xml
<xs:element name="edad" type="edadTipo"/>
```

### Ejemplo válido

```xml
<edad>25</edad>
```

### Ejemplo inválido

```xml
<edad>200</edad>
```

Porque supera el máximo permitido.

---

### Restricciones sobre un conjunto de valores

Para limitar el contenido de un elemento XML a un conjunto de valores aceptables, utilizaríamos la restricción de enumeración.

El siguiente ejemplo define un elemento llamado "coche" con una restricción. Los únicos valores aceptables son: Audi, Golf, BMW:

```xml
<xs:element name="car">
  <xs:simpleType>
    <xs:restriction base="xs:string">
      <xs:enumeration value="Audi"/>
      <xs:enumeration value="Golf"/>
      <xs:enumeration value="BMW"/>
    </xs:restriction>
  </xs:simpleType>
</xs:element>
```

### Restricciones sobre una serie de valores

Para limitar el contenido de un elemento XML y definir una serie de números o letras que se puedan utilizar, usaríamos la restricción de patrón.

El siguiente ejemplo define un elemento llamado "letra" con una restricción. El único valor aceptable es UNA de las letras en minúscula de la a a la z:

```xml
<xs:element name="letter">
  <xs:simpleType>
    <xs:restriction base="xs:string">
      <xs:pattern value="[a-z]"/>
    </xs:restriction>
  </xs:simpleType>
</xs:element>
```

El siguiente ejemplo define un elemento llamado "iniciales" con una restricción. El único valor aceptable son TRES letras MAYÚSCULAS de la a a la z:

```xml
<xs:element name="initials">
  <xs:simpleType>
    <xs:restriction base="xs:string">
      <xs:pattern value="[A-Z][A-Z][A-Z]"/>
    </xs:restriction>
  </xs:simpleType>
</xs:element>
```

## 7. XSD Complex Elements

Son elementos que:

* Contienen otros elementos
* Pueden tener atributos
* Definen estructuras completas

Ejemplo real:

```xml
<xs:element name="alumno">
  <xs:complexType>
    <xs:sequence>
      <xs:element name="nombre"/>
      <xs:element name="nota"/>
    </xs:sequence>
    <xs:attribute name="id" type="xs:int"/>
  </xs:complexType>
</xs:element>
```

Esto define una entidad completa.

---

## 8. XSD Empty

Elemento sin contenido.

```xml
<xs:element name="salto">
  <xs:complexType/>
</xs:element>
```

Ejemplo XML:

```xml
<salto/>
```

No puede tener texto ni hijos.

---

## 9. XSD Elements-only

Solo permite elementos, no texto.

Ejemplo:

```xml
<xs:complexType>
  <xs:sequence>
    <xs:element name="nombre"/>
  </xs:sequence>
</xs:complexType>
```

Correcto:

```xml
<persona>
  <nombre>Juan</nombre>
</persona>
```

Incorrecto:

```xml
<persona>Juan</persona>
```

---

## 10. XSD Text-only

Solo permite texto.

```xml
<xs:element name="mensaje" type="xs:string"/>
```

✔ No puede tener elementos hijos.

---

## 11. XSD Mixed

Permite mezclar texto y elementos.

```xml
<xs:complexType mixed="true">
  <xs:sequence>
    <xs:element name="b"/>
  </xs:sequence>
</xs:complexType>
```

### ¿Para qué sirve?

Para documentos donde hay texto con etiquetas intercaladas (como HTML).

Ejemplo XML:

```xml
<p>Hola <b>mundo</b></p>
```

✔ Sin `mixed="true"` esto daría error.

---

## 12. XSD Indicators

Controlan la estructura.

### sequence (orden obligatorio)

```xml
<xs:sequence>
  <xs:element name="nombre"/>
  <xs:element name="edad"/>
</xs:sequence>
```

Orden fijo.

---

### choice (uno u otro)

```xml
<xs:choice>
  <xs:element name="email"/>
  <xs:element name="telefono"/>
</xs:choice>
```

Solo uno de los dos.

---

### all (sin orden)

```xml
<xs:all>
  <xs:element name="nombre"/>
  <xs:element name="edad"/>
</xs:all>
```

Pueden ir en cualquier orden
Cada uno solo una vez

---

## 13. XSD <any>

Permite cualquier elemento.

```xml
<xs:any minOccurs="0" maxOccurs="unbounded"/>
```

Útil cuando no sabes la estructura exacta
Reduce el control de validación

---

## 14. XSD <anyAttribute>

Permite cualquier atributo.

```xml
<xs:anyAttribute/>
```

Similar a `<any>` pero para atributos

---

## 15. XSD Substitution

Permite sustituir un elemento por otros.

```xml
<xs:element name="animal" abstract="true"/>
<xs:element name="perro" substitutionGroup="animal"/>
```
`animal` no aparece directamente
Puede ser reemplazado por `perro`, `gato`, etc.

 Es una forma de herencia en XML.

---

## 16. Ejemplo Completo 

```xml
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">

  <xs:simpleType name="edadTipo">
    <xs:restriction base="xs:int">
      <xs:minInclusive value="0"/>
      <xs:maxInclusive value="120"/>
    </xs:restriction>
  </xs:simpleType>

  <xs:element name="persona">
    <xs:complexType>
      <xs:sequence>
        <xs:element name="nombre"/>
        <xs:element name="edad" type="edadTipo"
```
