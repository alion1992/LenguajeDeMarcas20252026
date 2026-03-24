# Enunciado: Validación de datos con XSD y expresiones regulares

Se proporciona el siguiente documento XML que contiene información de usuarios de una aplicación.

Tu tarea consiste en:

1. Crear un esquema XSD que valide correctamente el XML.  
2. Definir restricciones utilizando expresiones regulares (xs:pattern).  
3. Validar todos los campos según las condiciones indicadas.

---

## XML proporcionado

```xml
<?xml version="1.0" encoding="UTF-8"?>
<usuarios>
    <usuario>
        <nombre>Juan</nombre>
        <apellido>Perez</apellido>
        <email>juan.perez@gmail.com</email>
        <telefono>612345678</telefono>
        <dni>12345678Z</dni>
        <codigoPostal>13005</codigoPostal>
        <username>juanp23</username>
        <password>Abc12345</password>
    </usuario>

    <usuario>
        <nombre>Ana</nombre>
        <apellido>Lopez</apellido>
        <email>ana.lopez@hotmail.com</email>
        <telefono>712345678</telefono>
        <dni>87654321X</dni>
        <codigoPostal>28080</codigoPostal>
        <username>ana_99</username>
        <password>Segura123</password>
    </usuario>

    <usuario>
        <nombre>Carlos</nombre>
        <apellido>Garcia</apellido>
        <email>carlos.garcia@empresa.es</email>
        <telefono>612000111</telefono>
        <dni>11223344A</dni>
        <codigoPostal>45001</codigoPostal>
        <username>carlosG</username>
        <password>Password1</password>
    </usuario>
</usuarios>
```

---

## Requisitos de validación

### 1. Nombre y apellido
- Solo letras (mayúsculas o minúsculas)
- Mínimo 2 caracteres  

### 2. Email
- Formato válido: texto@texto.dominio  
- Permitir letras, números, puntos y guiones  

### 3. Teléfono
- Debe empezar por 6, 7, 8 o 9  
- Debe tener exactamente 9 cifras  

### 4. DNI
- 8 números seguidos de una letra mayúscula  

### 5. Código postal
- Exactamente 5 cifras  

### 6. Username
- Mínimo 5 caracteres  
- Puede contener letras, números y guion bajo `_`  

### 7. Password
- Mínimo 8 caracteres  
- Al menos una mayúscula  
- Al menos un número  

---

## Restricciones adicionales

- Todos los elementos son obligatorios  
- Usar xs:simpleType con xs:restriction  
- Validar con xs:pattern  

---




