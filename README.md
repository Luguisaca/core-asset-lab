# Core Asset Lab

**Idioma:** Español (Colombia) · [English](README.en.md)

Laboratorio ejecutado en el navegador para cargar, inspeccionar, validar, calibrar y presentar recursos GLB/GLTF locales.

Core Asset Lab es un proyecto independiente mantenido por **LUGUISACA / Luis Salamanca**. Nació como una herramienta de ingeniería para el Core/Hero de LUGUISACA y, desde el límite definido en Sprint 01, pasó a ser un proyecto reutilizable e independiente.

## Qué ofrece V1

La V1 actual incluye carga local de GLB/GLTF mediante selección o arrastrar y soltar, renderizado Three.js y controles orbitales, ajuste automático y telemetría, controles de modelo/escena/renderizado/FX, Wireframe, Bounding Box, Axes, Normals y Skeleton, inspección y visibilidad de meshes/materiales, reproducción de animaciones GLTF embebidas, validación del recurso, captura PNG, exportación de configuración e informe, consola de diagnóstico, interfaz ES/EN y diseño adaptable.

Los modelos seleccionados son procesados por el navegador. La arquitectura actual no tiene backend y el flujo de carga no envía intencionalmente el contenido de los modelos seleccionados a un servidor.

## Requisitos

Para ejecutar actualmente el proyecto desde el código fuente:

- Git, si se clona el repositorio;
- Node.js `>=22.19.0`;
- npm;
- un navegador moderno compatible con WebGL.

La aplicación acepta actualmente archivos `.glb` y `.gltf` de hasta 100 MB. Un archivo `.gltf` puede depender de buffers o texturas adicionales; no debe asumirse compatibilidad universal con todas las estructuras GLTF multiarchivo sin validarlas específicamente.

## Ejecutar localmente

```bash
git clone https://github.com/Luguisaca/core-asset-lab.git
cd core-asset-lab
npm ci
npm run dev
```

Abre la URL local que muestra Astro y selecciona o arrastra un modelo al Lab.

`npm ci` instala exactamente el conjunto de dependencias registrado en el lockfile del proyecto. `npm run check` es un comando de desarrollo/QA y no es necesario simplemente para abrir el Lab.

Para validación explícita y una compilación local similar a producción:

```bash
npm run check
npm run build
npm run preview
```

La aplicación generada en `dist/` es estática y se ejecuta en el navegador.

## Estado de validación

La V1 independiente superó la revisión de integridad de la migración y la revisión de independencia estática. GitHub Actions también validó instalación determinista de dependencias, comprobaciones Astro/TypeScript, compilación de producción y una prueba HTTP básica de la aplicación generada.

Además, se realizó QA manual independiente en Windows durante el 16/17-sep-2026 con Node.js 24.19.0 y npm 11.7.0. La instalación, comprobaciones, ejecución de desarrollo, comportamiento visual y funcionalidad V1 ejercitada fueron aceptadas por el responsable del proyecto.

Esto **no significa** que todos los posibles archivos GLB/GLTF, navegadores, GPU o sistemas operativos estén certificados. La evidencia técnica canónica está en `docs/CURRENT-STATE.md`.

## Estado de distribución

Actualmente validado:

- ejecución local desde código fuente con Node.js + npm;
- compilación estática de producción generada por Astro.

Planeado pero **todavía no publicado ni soportado oficialmente**:

- demo oficial alojada por LUGUISACA en una ruta aún por definir;
- distribución mediante Docker/contenedor;
- aplicación o instalador de escritorio descargable;
- artefactos descargables versionados y checksums.

Estos canales deberán implementarse y superar QA antes de anunciarse como disponibles.

## Documentación del proyecto

- `AGENTS.md` — reglas operativas y de gobierno para colaboradores humanos y automatizados.
- `docs/CURRENT-STATE.md` — estado canónico y evidencia de QA.
- `docs/architecture/README.md` — arquitectura de ejecución y límites de confianza.
- `docs/operations/README.md` — instalación, validación, compilación y operaciones de distribución.
- `docs/decisions/` — decisiones arquitectónicas y del proyecto aceptadas.
- `docs/EXTRACTION.md` — historial de extracción y procedencia.
- `SECURITY.md` — postura de seguridad y guía para reportar vulnerabilidades.
- `CONTRIBUTING.md` — flujo de contribución.

## Límite del proyecto

Este repositorio no contiene la landing de `luguisaca.com`, contenido profesional, recursos Core/Hero de producción de LUGUISACA, recursos personales/de marca, configuración Cloudflare del sitio ni QA específico del sitio web.

En el futuro, el sitio web podrá consumir una distribución validada de Core Asset Lab como demo pública, pero eso no vuelve a unir los ciclos de vida de ambos proyectos.

## Transparencia de desarrollo y comunidad

Core Asset Lab es un proyecto de LUGUISACA **en desarrollo activo, dirigido y revisado por personas**. Herramientas y capacidades basadas en inteligencia artificial pueden utilizarse como apoyo durante el desarrollo, investigación, documentación y otras tareas de ingeniería.

La revisión humana no significa que el software esté libre de errores. El proyecto puede contener bugs, código imperfecto o comportamientos inesperados. Los reportes reproducibles ayudan a investigarlos y corregirlos.

Para reportar bugs puedes utilizar **GitHub Issues**, cuando esté habilitado, o escribir a `bugs@luguisaca.com`. También utilizaremos las herramientas de GitHub que correspondan —Issues, Discussions y Pull Requests— para reportes reproducibles, propuestas, conversación comunitaria y contribuciones.

Para comunicación general con LUGUISACA: `contacto@luguisaca.com`.

Las vulnerabilidades de seguridad **no deben publicarse en un Issue público**. Deben seguirse las instrucciones de `SECURITY.md` y utilizar los mecanismos privados de seguridad de GitHub cuando estén habilitados.

No adjuntes públicamente modelos, archivos, información personal, propietaria, confidencial o sensible.

## Licencia

Core Asset Lab está disponible bajo la **PolyForm Noncommercial License 1.0.0**. El texto jurídicamente aplicable se encuentra en `LICENSE`.

Es una licencia source-available para usos no comerciales. El acceso al repositorio no concede derechos adicionales a los establecidos por la licencia. Cualquier permiso comercial, si se concede, requiere una licencia independiente otorgada por el licenciante.

> **Nota sobre idioma:** el archivo `LICENSE` conserva el texto oficial de PolyForm Noncommercial License 1.0.0 en inglés. Esta documentación en español sirve para facilitar la comprensión del proyecto y **no sustituye, modifica ni traduce jurídicamente** los términos de la licencia.
