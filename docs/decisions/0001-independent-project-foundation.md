# ADR 0001 — Fundación independiente de Core Asset Lab

- Estado: Aceptada
- Fecha: 2026-09-16

## Contexto

Core Asset Lab nació dentro de `luguisaca.com` durante el desarrollo y validación de la experiencia GLB/GLTF del Core/Hero de LUGUISACA. Durante Sprint 01, el Lab demostró un propósito más amplio como visor reutilizable, herramienta de inspección y banco de calibración ejecutado en el navegador.

El repositorio de origen aceptó el ADR 0003 para separar el Core Lab específico del sitio web del proyecto generalizado. El desarrollo se conservó en `extract/core-asset-lab` y posteriormente se copió al repositorio independiente `Luguisaca/core-asset-lab`.

## Decisión

Core Asset Lab es un proyecto independiente desde el límite establecido en Sprint 01.

Su base arquitectónica actual es una aplicación estática Astro + TypeScript + Three.js que procesa en el navegador recursos GLB/GLTF seleccionados por la persona usuaria y no tiene backend de aplicación.

El repositorio independiente es responsable de sus funcionalidades posteriores al límite, QA, arquitectura, documentación, distribución, releases, roadmap y decisiones de licencia.

El proyecto no hereda automáticamente recursos de marca del sitio LUGUISACA, configuración Cloudflare, modelo de despliegue de producción ni decisiones de licencia.

## Procedencia

- Repositorio de origen: `Luguisaca/luguisaca.com`
- Rama de extracción de origen: `extract/core-asset-lab`
- Checkpoint de origen: `feefc5573ebd646534dbe9ad2eb397a02724d914`
- Decisión de límite en origen: `docs/decisions/0003-core-lab-project-boundary.md`

La migración independiente se comparó con la extracción de origen a nivel de archivos/blobs. `.gitignore`, omitido durante la carga manual por web, se restauró exactamente desde el origen.

## Consecuencias

- `luguisaca.com` continúa siendo responsable de su Core/Hero Lab específico del sitio.
- El desarrollo general de Core Asset Lab ocurre aquí y no debe fusionarse de vuelta al sitio únicamente por su origen histórico.
- La arquitectura estática/local en navegador es la base actual y cualquier cambio importante requiere un ADR nuevo.
- Docker, empaquetado de escritorio y releases alojados pueden evaluarse independientemente; ninguno se considera soportado hasta implementarse y validarse.
- Este ADR no define ni modifica la licencia actual. Las decisiones de licencia se gestionan explícitamente por separado.
