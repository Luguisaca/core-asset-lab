# Seguridad

## Modelo de seguridad actual

Core Asset Lab es actualmente una aplicación estática que se ejecuta en el navegador y no tiene backend de aplicación. Los archivos GLB/GLTF seleccionados por la persona usuaria son leídos por el runtime del navegador. El flujo actual de carga de modelos no envía intencionalmente el contenido de los modelos seleccionados.

Esta arquitectura reduce parte de la exposición del lado del servidor, pero no significa que la aplicación sea inherentemente segura. Los recursos importados se consideran entradas no confiables y los paquetes de terceros forman parte del límite de la cadena de suministro.

## Información sensible

Nunca hagas commit de credenciales, tokens de acceso, llaves privadas, códigos de recuperación, archivos de modelos propietarios, información personal sensible ni secretos de producción. La aplicación actual no requiere secretos en runtime.

## Límite de modelos y entradas

Trata cada modelo importado como entrada no confiable. No debilites los controles de seguridad del navegador para cargar un modelo. La UI actual acepta selecciones `.glb`/`.gltf` de hasta 100 MB; las verificaciones de extensión y tamaño son medidas de usabilidad/seguridad, no una defensa completa frente a archivos maliciosos.

Un `.gltf` puede referenciar buffers o texturas externas. El flujo actual basado en una URL de objeto para el archivo seleccionado no debe describirse como soporte universal para GLTF multiarchivo hasta que ese modelo de recursos sea implementado y validado explícitamente.

## Límite de privacidad

Con la arquitectura actual, la inspección del modelo ocurre en el navegador y no existe un paso de carga hacia un backend de la aplicación. No añadas procesamiento remoto de modelos, recolección de telemetría, almacenamiento persistente ni cargas a terceros sin revisión explícita de arquitectura/seguridad y comunicación clara a la persona usuaria.

## Dependencias y cadena de build

Astro, Three.js y las dependencias de desarrollo forman parte de la cadena de suministro. Los cambios de dependencias requieren justificación, revisión de mantenimiento/seguridad y compatibilidad de licencia.

El CI independiente ha validado instalación, comprobaciones estáticas/de tipos, build de producción y smoke test de la aplicación compilada. Esta evidencia no reemplaza una revisión de vulnerabilidades de dependencias ni garantiza ausencia de defectos de seguridad.

El proyecto incluye `package-lock.json` y el bootstrap de dependencias validado utiliza `npm ci` de forma determinista. Esto mejora la reproducibilidad, pero no elimina el riesgo de cadena de suministro.

## Reportar una vulnerabilidad

No publiques en un Issue detalles explotables de vulnerabilidades, credenciales, material sensible de prueba ni modelos/datos confidenciales.

**Private Vulnerability Reporting** está habilitado en este repositorio público y es el canal preferido para reportes de seguridad mediante GitHub. Si ese mecanismo no está disponible para la persona reportante, inicia el contacto de forma privada mediante `contacto@luguisaca.com`. Los bugs ordinarios que no impliquen una vulnerabilidad de seguridad corresponden a GitHub Issues o `bugs@luguisaca.com`.

Incluye la versión o commit afectado, condiciones de reproducción, impacto y una prueba mínima cuando sea seguro compartirla. Evita enviar secretos o datos de terceros que no sean necesarios para investigar el reporte.

## Cambios de arquitectura que requieren revisión de seguridad

Añadir backend, autenticación, almacenamiento persistente, procesamiento remoto de modelos, cargas a terceros, analítica/telemetría, privilegios de escritorio o integraciones privilegiadas modifica el límite de confianza actual y requiere un ADR y revisión del modelo de amenazas antes de implementarse.

## Límite de la validación actual

La integridad de migración, independencia estática, QA automatizado de build/smoke y aceptación funcional/visual independiente en Windows se completaron para el flujo V1 descrito en `docs/CURRENT-STATE.md`. Esta es evidencia de QA acotada, no una certificación de seguridad ni evidencia de compatibilidad universal de modelos o navegadores.
