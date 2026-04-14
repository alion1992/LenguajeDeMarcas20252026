# XSD Schema

---

## 1. XSD Introducción

XSD (XML Schema Definition) es un lenguaje que permite definir la
estructura, tipos de datos y restricciones de un documento XML.

Sirve para validar XML de forma más potente que DTD.

### Ventajas frente a DTD

- Sintaxis XML (más coherente)
- Tipado de datos (int, string, date)
- Permite restricciones (rangos, patrones)
- Reutilización de tipos
- Soporte de namespaces

---

## 2. Cómo usar XSD

### Paso 1: Crear el XSD

Define las reglas que debe cumplir el XML.

### Paso 2: Asociarlo al XML

```xml
<libros xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="libros.xsd">
</libros>
```

### Paso 3: Validar

El parser comprueba estructura, tipos y restricciones.

---

## 3. XSD `<schema>`{=html}

Elemento raíz:

```xml
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
</xs:schema>
```

---

## 4. XSD elementos

```xml
<xs:element name="nombre" type="xs:string"/>
```

Elemento complejo:

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

---

## 5. XSD atributos

```xml
<xs:attribute name="dni" type="xs:string" use="required"/>
```

---

## 6. XSD restricciones

```xml
<xs:simpleType name="edadTipo">
  <xs:restriction base="xs:int">
    <xs:minInclusive value="0"/>
    <xs:maxInclusive value="120"/>
  </xs:restriction>
</xs:simpleType>
```

---

## 7. XSD Elementos Complejos

Permiten estructuras jerárquicas con hijos y atributos.

---

## 8. XSD Vacío

```xml
<xs:complexType/>
```

---

# 9. XSD Elements-only

En un modelo elements-only, un elemento solo puede contener otros elementos, nunca texto directamente.

Se utiliza cuando queremos XML bien estructurado.

Ejemplo:
```xml
<xs:complexType>
  <xs:sequence>
    <xs:element name="nombre" type="xs:string"/>
    <xs:element name="edad" type="xs:int"/>
  </xs:sequence>
</xs:complexType>
```

Correcto:
```xml
<persona>
  <nombre>Juan</nombre>
  <edad>25</edad>
</persona>
```

Incorrecto:
```xml
<persona>Juan</persona>
```

---

# 10. XSD Text-only

Un elemento text-only contiene solo texto, sin subelementos.

Ejemplo:
```xml
<xs:element name="mensaje" type="xs:string"/>
```

XML válido:
```xml
<mensaje>Hola mundo</mensaje>
```

---

# 11. XSD Mixed

Permite mezclar texto y elementos hijos.

Ejemplo:
```xml
<xs:complexType mixed="true">
  <xs:sequence>
    <xs:element name="b" type="xs:string" minOccurs="0"/>
  </xs:sequence>
</xs:complexType>
```

XML válido:
```xml
<parrafo>Hola <b>mundo</b>!</parrafo>
```

---

# 12. XSD Indicadores

## sequence
Los elementos deben aparecer en orden.

```xml
<xs:sequence>
  <xs:element name="nombre"/>
  <xs:element name="edad"/>
</xs:sequence>
```

## choice
Permite uno u otro elemento.

```xml
<xs:choice>
  <xs:element name="email"/>
  <xs:element name="telefono"/>
</xs:choice>
```

## all
Todos los elementos deben aparecer, sin importar el orden.

```xml
<xs:all>
  <xs:element name="nombre"/>
  <xs:element name="edad"/>
</xs:all>
```

---

# 13. XSD <any>

Permite incluir cualquier elemento no definido en el esquema.

Ejemplo:
```xml
<xs:any minOccurs="0" maxOccurs="unbounded"/>
```

---

# 14. XSD <anyAttribute>

Permite cualquier atributo adicional.

Ejemplo:
```xml
<xs:anyAttribute/>
```

---

# 15. XSD Substitution

Permite que un elemento sea sustituido por otros.

Ejemplo:
```xml
<xs:element name="animal" type="xs:string"/>

<xs:element name="perro" substitutionGroup="animal"/>
<xs:element name="gato" substitutionGroup="animal"/>
```

XML válido:
```xml
<perro>Bulldog</perro>
```

---

# 16. Ejemplo Completo

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
        <xs:element name="edad" type="edadTipo"/>
      </xs:sequence>
      <xs:attribute name="dni" type="xs:string"/>
    </xs:complexType>
  </xs:element>

</xs:schema>
```

XML válido:
```xml
<persona dni="12345678Z">
  <nombre>Juan</nombre>
  <edad>30</edad>
</persona>
```

---

# 17. Tipos de datos

Tipos básicos:

- xs:string
- xs:int
- xs:decimal
- xs:boolean
- xs:date

Ejemplo:
```xml
<xs:element name="precio" type="xs:decimal"/>
<xs:element name="activo" type="xs:boolean"/>
```

---

# 18. Reference

Permite reutilizar elementos o tipos.

Reutilizar tipo:
```xml
<xs:element name="edad" type="edadTipo"/>
```

Reutilizar elemento:
```xml
<xs:element name="nombre" type="xs:string"/>

<xs:element name="persona">
  <xs:complexType>
    <xs:sequence>
      <xs:element ref="nombre"/>
    </xs:sequence>
  </xs:complexType>
</xs:element>
```

---
