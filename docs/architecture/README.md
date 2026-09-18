# Arquitectura

## Propósito

Core Asset Lab es un banco de trabajo ejecutado en el navegador para inspeccionar, validar y calibrar recursos GLB/GLTF. La arquitectura actual mantiene intencionalmente el procesamiento de modelos en el cliente y permite desplegar la aplicación como archivos estáticos.

## Sistema actual

Astro proporciona la estructura estática de la aplicación y el pipeline de build. TypeScript implementa el comportamiento del Lab. Three.js proporciona renderizado WebGL, carga GLTF, interacción de cámara/orbit, animación, helpers y postprocesamiento.

La página principal compone la UI del Lab. Los scripts del navegador coordinan selección/arrastre de archivos locales, estado de escena, renderizado, inspección, diagnósticos, controles, exportación/capturas y animación. Los estilos se separan según estructura, herramientas, workspace y comportamiento responsive.

## Flujo de datos

1. La persona usuaria selecciona o arrastra un archivo `.glb` o `.gltf`.
2. Las APIs `File` del navegador crean una URL de objeto local.
3. `GLTFLoader` de Three.js lee el recurso en el navegador.
4. La escena cargada se inspecciona y renderiza localmente.
5. Los controles de UI modifican el estado de presentación del visor/escena.
6. Informes, configuración y capturas se generan desde el estado del cliente.

La aplicación actual no tiene un paso de carga a backend dentro de este flujo.

## Límites

El repositorio no requiere páginas del sitio LUGUISACA, contenido profesional, recursos Core/Hero de producción, localización global del sitio ni configuración Cloudflare. Tampoco es el Lab canónico del Hero de producción de LUGUISACA; esa responsabilidad permanece en `luguisaca.com`.

## Arquitectura de distribución

El artefacto canónico de runtime es actualmente la salida estática de Astro. Esto permite varios métodos futuros de distribución sin cambiar el modelo principal del navegador: hosting estático, un contenedor con servidor web pequeño o un shell de escritorio alrededor de la aplicación estática compilada.

Que la arquitectura lo permita no significa que esos canales estén soportados actualmente. Docker/contenedores y empaquetado de escritorio requieren su propia decisión aceptada, implementación y validación.

## Restricciones arquitectónicas

- Conservar la operación estática/en navegador salvo que un ADR la cambie explícitamente.
- Evitar dependencias innecesarias de backend o procesamiento remoto.
- No cargar modelos de las personas usuarias de forma implícita.
- Conservar en UI y documentación la semántica de privacidad de archivos locales.
- Mantener dependencias al mínimo y revisar impacto de licencia/cadena de suministro antes de añadirlas.
- Cambios importantes de hosting, datos remotos, runtime de escritorio, distribución en contenedor, autenticación o persistencia requieren un ADR.

## Límite de validación

La documentación de arquitectura describe el sistema previsto e inspeccionado estáticamente. Las afirmaciones sobre soporte de build/runtime se registran por separado en `docs/CURRENT-STATE.md` y requieren evidencia observada.
