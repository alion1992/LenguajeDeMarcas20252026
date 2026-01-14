<h1>ANILLOS DE PODER</h1>

<img width="500" height="400" alt="image" src="https://github.com/user-attachments/assets/de3529d3-5c1a-482a-89c3-ed211fdd5672" />


## Resultado de aprendizaje evaluado en la actividad:
1.LMSGI.RA3 Accede y manipula documentos web utilizando lenguajes de script de cliente

## Criterios de evaluación evaluados
- 1.LMSGI.RA3.CR1 a) Se han identificado y clasificado los lenguajes de script de cliente relacionados con la web y sus diferentes versiones y estándares.
- 1.LMSGI.RA3.CR2 b) Se ha identificado la sintaxis básica de los lenguajes de script de cliente
- 1.LMSGI.RA3.CR3 c) Se han utilizado métodos para la selección y acceso de los diferentes elementos de un documento web
- 1.LMSGI.RA3.CR4 d) Se han creado y modificado elementos de documentos web.
- 1.LMSGI.RA3.CR5 e) Se han eliminado elementos de documentos web.
- 1.LMSGI.RA3.CR6 f) Se han realizado modificaciones sobre los estilos de un documento web.

## TOTAL DEL RA evaluado en la actividad es del 30%


## Enunciado

<p>Una empresa que esta haciendo una página de la serie de amazon Los Anillos de Poder tiene una serie de problemas a la hora tanto de diseño como con los formularios de la página. Nos piden que hagamos las siguientes modificaciones</p>

### Imágenes de la web

<p>Actualmente tanto la cabecera como las imagenes de las tarjetas de las razas no se muestran ya que quieren que se carguen una vez se ha ejecutado el html. Por lo que se debe buscar unas imagenes que se ajusten a la pantalla actual tanto para la cabecera de las dos pantallas como para las tarjetas de las razas y cargarlas a posteriori.</p>

### Modo oscuro

<p> Desde la aplicación se debe poder poner un modo oscuro en la página a través del botón del menú de la izquierda. Se debe cambiar tanto de la pantalla principal como en la pantalla de formularios.</p>
<p>Cuando se cargue el modo oscuro el botón debe cambiar y llamarse Modo Claro y se deben cargar los estilos iniciales de la página</p>

### Formulario de crear razas

<p>Actualmente no se realizar validaciones a la hora de registrar una raza en nuestro sistema, las validaciones de los campos son las siguientes.</p>

<p>- Los campos de tipo text deben tener una longitud entre 3 y 20 caractes</p>
<p>- Los campos de textarea deben tener entre 20 y 150 caracteres</p>
<p>- Longevidad debe tener mínimo 20 años</p>
<p>- Un poder seleccionado mínimo</p>
<p>- Una propiedad mínimo</p>
<p>- Si la raza tiene una longevidad superior a 2000 años y no esta marcado inmortal se debe dar una mensaje de error.</p>

Cuando se de al botón crear se debe mostrar un mensaje informativo de todas y cada una de las validaciones que han fallado. Con unos estilos para el modo claro y otros estilos ajustados al modo oscuro.

## Rúbrica de corrección

| Criterio | Insuficiente (0-3) | Aceptable (4-5) | Notable (6-7) | Sobresaliente (8-10) | Puntuación |
|--------|--------------------|-----------------|---------------|----------------------|------------|
| **Carga dinámica de imágenes** | No se cargan las imágenes o se cargan directamente desde HTML | Se cargan imágenes con JS pero no se adaptan correctamente | Se cargan correctamente las imágenes de cabecera y tarjetas | Carga dinámica correcta, imágenes adaptadas a pantalla y bien estructuradas | /10 |
| **Modo oscuro (funcionalidad)** | No existe modo oscuro | Se activa el modo oscuro pero con errores visuales | El modo oscuro funciona correctamente | Modo oscuro completo, sin errores y bien integrado | /10 |
| **Cambio dinámico del botón (Modo oscuro / claro)** | El botón no cambia | Cambia el texto pero no los estilos | Cambia texto y estilos correctamente | Cambio correcto y coherente con el estado de la aplicación | /10 |
| **Validación campos de texto** | No hay validaciones | Valida parcialmente la longitud | Valida correctamente longitudes de input y textarea | Validaciones completas con mensajes claros | /10 |
| **Validación longevidad** | No se valida | Validación incorrecta o incompleta | Valida mínimo de años correctamente | Valida también el caso especial de inmortalidad | /10 |
| **Validación select (poderes)** | No se valida | Se valida pero sin mensajes claros | Se valida correctamente | Validación clara y bien mostrada al usuario | /10 |
| **Validación checkbox (propiedades)** | No se valida | Se valida de forma incorrecta | Valida mínimo una propiedad | Validación correcta y bien estructurada | /10 |
| **Mensajes de error** | No se muestran mensajes | Se muestra un único mensaje genérico | Se muestran mensajes por cada error | Mensajes claros, completos y bien presentados | /10 |
| **Estilos de mensajes (modo claro / oscuro)** | Sin estilos | Estilos solo en un modo | Estilos correctos en ambos modos | Estilos diferenciados, legibles y bien diseñados | /10 |
| **Uso del DOM y buenas prácticas** | Uso incorrecto del DOM | Uso básico del DOM | Buen uso del DOM y classList | Código limpio, estructurado y reutilizable | /10 |
| **Total** | | | | | **/100** |

## Entrega

Se realizará mediante aula virtual. El día 21 de Enero de 2026 a las 23.59 mediante un .zip con el código fuente.
Para su correción el alumno expondrá su página y mediante una coevaluación todos los alumnos y el profesor valoraremos la práctica mediante la rúbrica y se establecera la nota ponderada

