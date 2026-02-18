# Práctica JavaScript -- Validación de formulario de Almacén

## Contexto

Una empresa de logística necesita digitalizar el registro de productos
que llegan a su almacén.

Actualmente existe un formulario HTML que permite registrar productos y
añadirlos a una tabla de inventario de forma dinámica.

Tu tarea será implementar todas las validaciones utilizando **JavaScript
y manipulación del DOM**.

Está permitido modificar el HTML si es necesario para añadir
contenedores de errores o mensajes informativos.

------------------------------------------------------------------------

## Objetivos de la práctica

-   Aplicar validaciones de formularios con JavaScript\
-   Manipular el DOM mediante eventos\
-   Gestionar mensajes de error dinámicos\
-   Añadir filas dinámicamente a una tabla\
-   Evitar registros inválidos

------------------------------------------------------------------------

# Validaciones obligatorias

## 1. Campos de texto

Los siguientes campos son obligatorios:

-   Nombre del producto\
-   Proveedor

### Condiciones:

-   Mínimo **3 caracteres**
-   Máximo **25 caracteres**
-   No pueden estar vacíos

------------------------------------------------------------------------

## 2. Cantidad

Campo obligatorio.

Condiciones:

-   Debe ser numérico\
-   Debe ser mayor que **0**\
-   No puede superar las **500 unidades**

------------------------------------------------------------------------

## 3. Precio

Campo obligatorio.

Condiciones:

-   Debe ser numérico\
-   Debe ser mayor que **0**\
-   No puede superar los **10.000€**

------------------------------------------------------------------------

## 4. Campos obligatorios (select y radio)

Los siguientes campos deben estar seleccionados obligatoriamente:

-   Tipo de producto\
-   Prioridad de almacenamiento\
-   Método de transporte\
-   Ubicación del almacén

------------------------------------------------------------------------

# Validaciones específicas

## 5. Restricción -- Productos inflamables

Si el usuario selecciona:

-   **Tipo de producto:** Inflamable\
-   **Ubicación:** Zona General

Se debe mostrar justo debajo del campo "Ubicación" un mensaje en color
rojo indicando:

> Los productos inflamables no pueden almacenarse en la Zona General.

El registro **no debe permitirse**.

------------------------------------------------------------------------

## 6. Restricción -- Productos perecederos sin transporte refrigerado

Si el usuario selecciona:

-   **Tipo de producto:** Perecedero\
-   **Método de transporte:** Transporte estándar

Se debe mostrar debajo del campo "Método de transporte" un mensaje en
color verde indicando:

> Los productos perecederos deben utilizar transporte refrigerado.

El registro **no debe permitirse**.
