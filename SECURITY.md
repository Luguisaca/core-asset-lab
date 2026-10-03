# Seguridad

## Alcance actual

Core Asset Lab es una aplicación estática ejecutada en el navegador. El flujo actual de inspección no requiere un backend de aplicación y los modelos seleccionados se procesan localmente en el navegador.

Los recursos importados deben tratarse como entrada no confiable. Las dependencias de terceros forman parte de la cadena de suministro.

## Información sensible

No publiques ni hagas commit de credenciales, tokens, llaves privadas, códigos de recuperación, datos personales sensibles, secretos de producción, modelos confidenciales/propietarios ni información interna del proyecto.

La aplicación actual no requiere secretos en runtime.

## Entradas y privacidad

La UI acepta actualmente archivos `.glb` y `.gltf` de hasta 100 MB. Las verificaciones de extensión y tamaño no constituyen una defensa completa frente a contenido malicioso.

Un GLTF puede referenciar recursos externos. No se asume compatibilidad universal con todos los layouts multiarchivo.

No debilites controles del navegador para cargar modelos y no introduzcas cargas remotas implícitas, telemetría o persistencia de contenido sin una revisión de seguridad y privacidad apropiada.

## Cadena de suministro

El proyecto utiliza un lockfile y el flujo reproducible de instalación usa `npm ci`. Revisa cambios de dependencias y conserva el principio de mínimo privilegio en CI.

## Reportar una vulnerabilidad

No publiques detalles explotables en Issues.

Usa **GitHub Private Vulnerability Reporting / Security Advisories** cuando esté disponible en este repositorio. Si ese canal no estuviera disponible, utiliza el contacto privado publicado por LUGUISACA.

Incluye solo la información necesaria para reproducir y evaluar el impacto. No envíes secretos o datos de terceros que no sean necesarios para investigar el reporte.
