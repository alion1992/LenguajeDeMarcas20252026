# Práctica: Mini RPG (Versión Simple)

## Funcionamiento del juego

### 1. Empezar partida

Al pulsar el botón **Empezar**:

- Si el campo nombre está vacío:
  - Mostrar en el log: "Introduce un nombre".
- Si el nombre es válido:
  - Mostrar la zona de juego.
  - Mostrar el nombre en el título.
  - Inicializar:
    - Vida = 100
    - Energía = 50
    - Experiencia = 0
    - Estado = Normal

### 2. Entrenar

Al pulsar **Entrenar**:

- Requiere al menos 10 de energía.
- Si puede entrenar:
  - Energía −10
  - Experiencia +10
  - Mostrar mensaje en el log.
- Si no puede:
  - Mostrar mensaje indicando que no tiene energía suficiente.

### 3. Luchar

Al pulsar **Luchar**:

- Requiere al menos 15 de energía.
- Si puede luchar:
  - Energía −15
  - Vida − daño aleatorio entre 5 y 20
  - Experiencia +20
  - Mostrar mensaje en el log.

Si la vida llega a 0 o menos:

- Cambiar estado a KO.
- Desactivar los botones de acción usando la clase `bloqueado`.
- Mostrar mensaje de derrota en el log.

### 4. Descansar

Al pulsar **Descansar**:

- Energía +20 (máximo 100).
- Vida +10 (máximo 100).
- Mostrar mensaje en el log.

### 5. Estados visuales

Después de cada acción:

- Si vida <= 25 → añadir clase `peligro`.
- Si energía <= 10 → añadir clase `cansado`.
- Si ninguna condición se cumple → eliminar esas clases.
- Si está KO → estado debe mostrar "KO".

### 6. Reiniciar

Al pulsar **Reiniciar**:

- Volver al estado inicial.
- Ocultar zona de juego.
- Vaciar el log.
- Restablecer todas las variables.
- Quitar clases visuales.
- Habilitar botones.
