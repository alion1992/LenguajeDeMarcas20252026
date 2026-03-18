# XSD Schema

## XSD Introduction

XSD (XML Schema Definition) es un lenguaje de definición de esquemas
basado en XML que permite describir la estructura, el contenido y las
restricciones de documentos XML.

A diferencia de los DTD, XSD: - Está escrito en XML - Permite definir
tipos de datos (números, fechas, booleanos) - Permite aplicar
restricciones avanzadas - Soporta namespaces - Es más estricto y potente
para validación

## XSD How To

Para validar un XML con XSD:

1.  Crear el esquema (.xsd)
2.  Asociar el XML al XSD

``` xml
<?xml version="1.0" encoding="UTF-8"?>
<libros xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="libros.xsd">
</libros>
```

3.  Validación mediante parser XML

## XSD `<schema>`{=html}

Elemento raíz del XSD.

``` xml
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
</xs:schema>
```

## XSD Elements

Define los elementos XML.

``` xml
<xs:element name="nombre" type="xs:string"/>
```

Tipos: - Simples (texto) - Complejos (estructura interna)

## XSD Attributes

Define atributos.

``` xml
<xs:attribute name="id" type="xs:int"/>
```

## XSD Restrictions

Permite restringir valores.

``` xml
<xs:simpleType name="edadTipo">
  <xs:restriction base="xs:int">
    <xs:minInclusive value="0"/>
    <xs:maxInclusive value="120"/>
  </xs:restriction>
</xs:simpleType>
```

## XSD Complex Elements

Elementos con estructura.

``` xml
<xs:complexType>
  <xs:sequence>
    <xs:element name="nombre"/>
  </xs:sequence>
</xs:complexType>
```

## XSD Empty

Elemento vacío:

``` xml
<xs:complexType/>
```

## XSD Elements-only

Solo elementos, sin texto.

## XSD Text-only

Solo texto:

``` xml
<xs:element name="mensaje" type="xs:string"/>
```

## XSD Mixed

Texto + elementos.

## XSD Indicators

-   sequence: orden
-   choice: alternativa
-   all: sin orden

## XSD `<any>`{=html}

Permite cualquier elemento.

## XSD `<anyAttribute>`{=html}

Permite cualquier atributo.

## XSD Substitution

Permite sustitución de elementos.

## XSD Example

Ejemplo completo de esquema y XML válido.

## XSD Data Types

### XSD String

### XSD Date/Time

### XSD Numeric

### XSD Misc

### XSD Reference

Tipos y reutilización de estructuras.


