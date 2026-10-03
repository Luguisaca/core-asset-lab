# Arquitectura pública

Core Asset Lab es una aplicación estática construida con Astro, TypeScript y Three.js.

## Runtime

1. La persona usuaria selecciona o arrastra un archivo GLB/GLTF.
2. Las APIs de archivos del navegador proporcionan acceso local al recurso.
3. Three.js carga y representa el modelo mediante WebGL.
4. La UI permite inspeccionar y modificar el estado de presentación.
5. Capturas, configuración e informes se generan desde el cliente.

La arquitectura actual no requiere un backend de aplicación para este flujo.

## Límite de confianza

Los archivos importados se consideran entrada no confiable. El contenido seleccionado no debe enviarse implícitamente a servicios remotos.

Cualquier funcionalidad futura que introduzca procesamiento remoto, autenticación, persistencia, telemetría o privilegios adicionales deberá reevaluar los límites de privacidad y seguridad antes de exponerse como comportamiento soportado.
