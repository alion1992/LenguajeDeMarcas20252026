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

``` xml
<xs:element name="nombre" type="xs:string"/>
```

Elemento complejo:

``` xml
<xs:element name="persona">
  <xs:complexType>
    <xs:sequence>
      <xs:element name="nombre"/>
      <xs:element name="edad"/>
    </xs:sequence>
  </xs:complexType>
</xs:element>
```

------------------------------------------------------------------------

## 5. XSD Attributes

``` xml
<xs:attribute name="dni" type="xs:string" use="required"/>
```

------------------------------------------------------------------------

## 6. XSD Restrictions

``` xml
<xs:simpleType name="edadTipo">
  <xs:restriction base="xs:int">
    <xs:minInclusive value="0"/>
    <xs:maxInclusive value="120"/>
  </xs:restriction>
</xs:simpleType>
```

------------------------------------------------------------------------

## 7. XSD Complex Elements

Permiten estructuras jerárquicas con hijos y atributos.

------------------------------------------------------------------------

## 8. XSD Empty

``` xml
<xs:complexType/>
```

------------------------------------------------------------------------

## 9. XSD Elements-only

Solo elementos, sin texto.

------------------------------------------------------------------------

## 10. XSD Text-only

``` xml
<xs:element name="mensaje" type="xs:string"/>
```

------------------------------------------------------------------------

## 11. XSD Mixed

``` xml
<xs:complexType mixed="true"/>
```

------------------------------------------------------------------------

## 12. XSD Indicators

-   sequence
-   choice
-   all

------------------------------------------------------------------------

## 13. XSD `<any>`{=html}

``` xml
<xs:any/>
```

------------------------------------------------------------------------

## 14. XSD `<anyAttribute>`{=html}

``` xml
<xs:anyAttribute/>
```

------------------------------------------------------------------------

## 15. XSD Substitution

Permite herencia de elementos.

------------------------------------------------------------------------

## 16. Ejemplo Completo

``` xml
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

------------------------------------------------------------------------

## 17. Tipos de datos

-   xs:string
-   xs:int
-   xs:decimal
-   xs:boolean
-   xs:date

------------------------------------------------------------------------

## 18. Reference

Reutilización de tipos.

------------------------------------------------------------------------

# FIN
