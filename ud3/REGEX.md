# Validaciones con Expresiones Regulares (RegEx)

## Objetivos
- Comprender qué es una expresión regular  
- Aprender a construir patrones  
- Validar datos comunes  
- Aplicar RegEx en programación  

---

## 1. ¿Qué es una expresión regular?

Una expresión regular (RegEx) es un patrón que permite:

- Buscar texto  
- Validar datos  
- Extraer información  

Ejemplos:
- Validar un email  
- Comprobar un número  
- Filtrar datos en un formulario  

---

## 2. Sintaxis básica

### Caracteres simples
| Patrón | Significado |
|--------|------------|
| `a` | letra "a" |
| `hola` | palabra exacta |

---

### Metacaracteres

| Símbolo | Significado | Ejemplo |
|--------|------------|--------|
| `.` | cualquier carácter | `a.c` |
| `\d` | número | `\d\d` |
| `\w` | letra o número | `\w+` |
| `\s` | espacio | `hola\smundo` |

---

### Cuantificadores

| Símbolo | Significado |
|--------|------------|
| `*` | 0 o más |
| `+` | 1 o más |
| `?` | 0 o 1 |
| `{n}` | exactamente n |
| `{n,m}` | entre n y m |

---

### Clases de caracteres

| Patrón | Significado |
|--------|------------|
| `[abc]` | a, b o c |
| `[a-z]` | letras minúsculas |
| `[A-Z]` | mayúsculas |
| `[0-9]` | números |

---

### Anclas

| Símbolo | Significado |
|--------|------------|
| `^` | inicio |
| `$` | final |

---

## 3. Validaciones comunes

### Solo números
```regex
^\d+$
```

### Solo letras
```regex
^[a-zA-Z]+$
```

### Código postal (España)
```regex
^\d{5}$
```

### Teléfono español
```regex
^[6789]\d{8}$
```

### DNI
```regex
^\d{8}[A-Z]$
```

### Email (básico)
```regex
^[\w.-]+@[\w.-]+\.\w+$
```

### Usuario (mínimo 6 caracteres, letras y números)
```regex
^[a-zA-Z0-9]{6,}$
```

### Contraseña segura
- mínimo 8 caracteres  
- al menos una mayúscula  
- al menos un número  

```regex
^(?=.*[A-Z])(?=.*\d).{8,}$
```

---

## 4. Uso en programación

### JavaScript
```javascript
let regex = /^[6789]\d{8}$/;

console.log(regex.test("612345678")); // true
```

### Python
```python
import re

pattern = r"^[6789]\d{8}$"

if re.match(pattern, "612345678"):
    print("Válido")
```

---

## 5. Errores comunes

- No usar `^` y `$`
- Olvidar escapar caracteres (`\.`)
- Regex demasiado permisivas
- No probar suficientes casos

---

## 6. Ejercicios

### Nivel básico
1. Crear una expresión para:
   - Solo números  
   - Solo letras  
   - Palabra de 4 letras  

### Nivel medio
2. Validar:
   - Código postal  
   - Usuario (mín 5 caracteres)  

### Nivel avanzado
3. Crear una regex para contraseña que tenga:
   - mínimo 8 caracteres  
   - una mayúscula  
   - una minúscula  
   - un número  

---

## 7. Actividad práctica

Crear un formulario web que valide:
- Email  
- Teléfono  
- Contraseña  

Usar JavaScript y RegEx  

---

## Consejo final

No intentes memorizar todas las expresiones.

Divide el problema  
Construye poco a poco  
Prueba con ejemplos  
