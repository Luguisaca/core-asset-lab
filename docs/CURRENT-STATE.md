# Core Asset Lab — Estado actual

Última consolidación: 2026-09-18

## Estado

Core Asset Lab se mantiene de forma independiente en `Luguisaca/core-asset-lab`. V1 fue promovida a `main` mediante el PR #2 después de la aprobación del responsable del proyecto. El commit de merge es `744e0a301262576b7af2689b5a76c1e58db06a1c`. Posteriormente, un clon limpio de `main` en Windows superó instalación determinista, check, build, runtime de desarrollo y aceptación visual/funcional del responsable del proyecto. Después se eliminó la rama de migración `core-asset-lab-v1`.

La integridad de la migración desde la extracción de origen fue verificada mediante comparación de árboles/blobs del repositorio. El único archivo omitido durante la carga manual por web fue `.gitignore`; se restauró byte por byte desde el origen en el commit `7251fb49d2d13164115daf2db5562f3f2390e467`.

La inspección estática no encontró dependencia funcional de `luguisaca.com`, sus páginas, recursos de marca, configuración Cloudflare ni servicios backend.

## Arquitectura de runtime

- Astro 7.3.2
- TypeScript 5.9.3
- Three.js 0.186.0
- Node.js >= 22.19.0 para las herramientas actuales de desarrollo/build
- salida estática de Astro
- procesamiento GLB/GLTF en navegador
- sin backend de aplicación en la arquitectura actual

La base de Node se elevó desde 22.12.0 después de que el primer bootstrap de CI independiente revelara requisitos de engine de paquetes transitivos superiores a esa versión. Node 22.19.0 es la base validada en CI; Node 24.19.0 también fue probado directamente en Windows.

## Capacidades V1

La base V1 incluye carga local `.glb`/`.gltf`, información Asset Audit y Performance, Wireframe, Bounding Box, Axes, Copy Config, Export Report, Mesh/Material Inspector y visibilidad, Grid, Normals reales, helpers Skeleton, Center/Refit, Snapshot PNG, Asset Validation, HIDE ALL/SHOW ALL, controles de escena/render/FX, controles de animación GLTF, comportamiento responsive e interfaz ES/EN.

El QA histórico previo a la extracción probó Fox, RiggedSimple y BrainStem. La aceptación manual posterior a la migración confirma que la aplicación independiente se comporta visual y funcionalmente como se esperaba dentro del flujo probado por el responsable; esto no constituye certificación universal para todas las combinaciones GLB/GLTF/navegador/GPU.

## Procedencia de la migración

- Repositorio de origen: `Luguisaca/luguisaca.com`
- Rama de origen: `extract/core-asset-lab`
- Checkpoint de origen: `feefc5573ebd646534dbe9ad2eb397a02724d914`
- Límite formal del producto: Sprint 01

El sitio de origen conserva su propio Lab de validación Core/Hero; el desarrollo generalizado de visor/inspección/calibración posterior al límite corresponde a este repositorio.

## Evidencia de validación

### Repositorio y arquitectura

- Integridad de archivos de migración: **PASS** — comparación de árboles/blobs frente al origen de extracción.
- Auditoría estática de independencia: **PASS** — la inspección de configuración/imports/rutas no encontró dependencia de runtime con `luguisaca.com`.

### QA automatizado independiente

- Run #2 (`35177543306`): **PASS** — instalación de dependencias, `npm run check` y build de producción después de corregir un problema real de unión de materiales en TypeScript.
- Run #3 (`35177699229`): **PASS** — `dist/` generado servido mediante HTTP y superficie esperada de Core Asset Lab/entrada de archivos encontrada.
- Run #5 (`35179217936`): **PASS** — base Node 22.19.0, instalación, check, build y smoke test completados correctamente.
- Run #18 (`35180417863`): **PASS** — lockfile incluido, Node 22.19.0, `npm ci` determinista, Astro check, build de producción y smoke test HTTP de la aplicación compilada completados correctamente sobre el commit `43d70bdffd47d85900a4410b5749f71cd8ce3f7a`.

El repositorio incluye `package-lock.json` (lockfileVersion 3). CI utiliza `npm ci --no-audit --no-fund`, por lo que el bootstrap de dependencias V1 es reproducible mediante lockfile en lugar de depender de un `npm install` sin bloqueo.

### QA manual independiente en Windows

Entorno observado:

- Windows 11
- Node.js 24.19.0
- npm 11.7.0
- clon/worktree independiente de `core-asset-lab`

Resultado observado:

- `npm ci` determinista: **PASS**, con 0 vulnerabilidades reportadas;
- `npm run check`: **PASS**, con 0 errores, 0 warnings y 4 hints no bloqueantes;
- `npm run build`: **PASS**, con salida estática en `dist/`;
- servidor de desarrollo: **PASS**;
- comportamiento visual: **PASS**, aprobado por el responsable del proyecto;
- funcionalidad V1 probada: **PASS**, aprobada por el responsable del proyecto.

Los hints restantes incluyen avisos de deprecación de `Clock` de Three.js y un `modelScale` sin usar; el build de producción también reporta una advertencia no bloqueante por chunk grande. Estos puntos permanecen como deuda técnica registrada y no se refactorizaron silenciosamente durante el cierre de V1.

## Estado de distribución

- Flujo local desde código fuente con Node + npm: **VALIDADO**.
- Flujo reproducible mediante `npm ci`: **VALIDADO**.
- Build estático Astro: **VALIDADO**.
- Demo oficial alojada por LUGUISACA: **NO IMPLEMENTADA**; la ruta permanece intencionalmente sin definir.
- Distribución Docker: **NO IMPLEMENTADA**.
- Ejecutable de escritorio empaquetado: **NO IMPLEMENTADO**.
- Artefactos descargables versionados: **NO IMPLEMENTADOS**.

Los canales planeados no deben describirse como soportados hasta que sean implementados y validados.

## Licencia

El responsable del proyecto aprobó **PolyForm Noncommercial License 1.0.0** como licencia del proyecto independiente el 2026-09-18. El proyecto es source-available bajo esos términos no comerciales; el acceso al repositorio no concede derechos adicionales a los definidos en `LICENSE`. Los permisos comerciales, si existen, requieren una licencia separada del licenciante.

Core Asset Lab es dirigido y revisado por personas y utiliza herramientas basadas en IA como apoyo para desarrollo, investigación y documentación. Este proceso no garantiza software libre de defectos. Los reportes comunitarios utilizan las funciones de colaboración/seguridad de GitHub a medida que se habiliten, `bugs@luguisaca.com` para bugs ordinarios y `contacto@luguisaca.com` para contacto general.

El idioma canónico de trabajo y documentación es **español de Colombia (`es-CO`)**. Las localizaciones en inglés deben conservar paridad semántica con la documentación canónica. El texto jurídico oficial de `LICENSE` se conserva intacto en su idioma oficial.

## Estado de Pull Requests y cierre V1

El PR #1 (`core-asset-lab-v1` → `main`, título `Add files via upload`) fue cerrado sin merge el 2026-09-17 y permanece como rastro histórico de migración. El PR #2 (`Core Asset Lab V1 — independent baseline`) fue revisado y aprobado explícitamente por el responsable del proyecto y luego integrado a `main` el 2026-09-17 mediante el commit de merge `744e0a301262576b7af2689b5a76c1e58db06a1c`.

La migración y promoción de V1 están **CERRADAS**. La validación desde clon limpio de `main` pasó y la rama independiente de migración fue eliminada. El empaquetado de releases, despliegue de demo pública y limpieza de ramas históricas en el repositorio separado `luguisaca.com` permanecen como trabajo futuro independiente.
