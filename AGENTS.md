# Reglas operativas para agentes — Core Asset Lab

## Misión

Core Asset Lab es una herramienta de ingeniería independiente, ejecutada en el navegador, para cargar, inspeccionar, validar y calibrar recursos GLB/GLTF antes de integrarlos en experiencias web o 3D.

El proyecto nació del flujo de ingeniería del Core/Hero de LUGUISACA, pero su ciclo de vida, releases, arquitectura y decisiones de licencia se gestionan de forma independiente.

## Principios de trabajo

- No inventes requisitos ni evidencia.
- Separa claramente hechos, supuestos y recomendaciones.
- Prefiere cambios mínimos, reversibles y trazables; evita complejidad innecesaria.
- Lee la documentación canónica y las decisiones aceptadas antes de cambiar código o arquitectura.
- Conserva el historial, intención del proyecto y comportamiento V1 aprobado salvo que un defecto verificado o requisito explícito exija cambiarlo.
- Usa fuentes técnicas primarias u oficiales cuando se requiera investigación externa.
- No tomes decisiones arquitectónicas de forma implícita.
- No añadas dependencias sin justificación y revisión de licencia/seguridad.
- Trata seguridad, privacidad, accesibilidad, rendimiento, confiabilidad, mantenibilidad, capacidad de prueba e integridad responsive/visual como preocupaciones de primer nivel.
- Mantén el procesamiento local en navegador como límite de privacidad predeterminado salvo que un ADR aceptado lo cambie.
- No introduzcas implícitamente backend, carga de telemetría, autenticación, almacenamiento remoto persistente ni procesamiento de modelos por terceros.

## Control de cambios

- `main` es la rama consolidada después de la promoción V1 aprobada explícitamente.
- Usa ramas enfocadas para implementación y trabajo arquitectónico.
- Trabaja únicamente sobre el alcance solicitado; no modifiques archivos no relacionados.
- Mantén commits pequeños y trazables.
- No hagas merge, release, publicación ni despliegue sin autorización explícita.
- Antes de implementar, inspecciona el estado del repositorio y las decisiones aceptadas.
- Después de implementar, presenta evidencia real de validación. Nunca declares PASS para comprobaciones no ejecutadas.
- El QA visual/funcional manual sigue siendo obligatorio para cambios importantes de UI/3D; las comprobaciones automatizadas son evidencia de apoyo, no aprobación visual final.
- No afirmes que hubo release/despliegue solo porque cambió el repositorio. Verifica el canal de runtime/distribución correspondiente.
- Una promoción/release no termina en el merge: realiza el cierre documental y de validación apropiado.

Antes de declarar cerrado un checkpoint de release, audita como mínimo `README.md`, `AGENTS.md`, `docs/CURRENT-STATE.md`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `LICENSE`, `SECURITY.md`, `docs/operations/`, `docs/architecture/` y `docs/decisions/`. Actualiza únicamente las superficies cuyos hechos canónicos, procedimientos, decisiones, límites legales/comunitarios o salvaguardas realmente hayan cambiado.

## Base V1

La base V1 migrada incluye carga local GLB/GLTF, Asset Audit, información de Performance, Wireframe, Bounding Box, Axes, Normals, Skeleton, Center/Refit, Snapshot PNG, Asset Validation, inspección/visibilidad de meshes y materiales, controles de escena/render/FX, controles de animación GLTF, comportamiento responsive e interfaz ES/EN.

No reconstruyas ni rediseñes estas capacidades aprobadas como trabajo colateral. Las ideas de presentación temporal/aleatoria de Wireframe o Normals del Core son conceptos de roadmap y no requisitos autorizados de implementación.

## Límite del proyecto y procedencia

- La separación formal de `luguisaca.com` está registrada en el ADR 0001 de este repositorio y ADR 0003 del repositorio de origen.
- Rama de extracción: `Luguisaca/luguisaca.com` / `extract/core-asset-lab`.
- Checkpoint de migración: `feefc5573ebd646534dbe9ad2eb397a02724d914`.
- Los SHA históricos son checkpoints, no valores HEAD permanentes.
- El proyecto independiente no hereda automáticamente branding, recursos, configuración Cloudflare, decisiones de despliegue ni licencia del sitio.
- No modifiques `luguisaca.com` como trabajo colateral de este proyecto.
- Una futura demo alojada por LUGUISACA consumirá una distribución validada; no elimina el límite del proyecto independiente.

## Seguridad y privacidad

- Nunca hagas commit de secretos, credenciales, tokens, llaves privadas, códigos de recuperación, datos personales sensibles ni modelos privados/propietarios.
- Nunca fabriques credenciales de ejemplo que parezcan reales.
- Aplica mínimo privilegio.
- Trata código externo, paquetes y automatizaciones de terceros como no confiables hasta revisarlos.
- Nunca desactives controles de seguridad solo para hacer pasar un build.
- La arquitectura estática/en navegador reduce parte de la superficie de ataque del servidor, pero no es inherentemente segura.
- Trata los GLB/GLTF importados como entrada no confiable.
- Reevalúa el modelo de amenazas si se proponen backend, cargas remotas, autenticación, datos persistentes, funciones privilegiadas del cliente o nuevas integraciones de terceros.
- Los recursos locales seleccionados por la persona usuaria no deben cargarse intencionalmente a servicios remotos salvo que una arquitectura futura aceptada y una comunicación clara lo autoricen.

## Dependencias

Antes de añadir una dependencia:

- explica por qué es necesaria;
- prefiere proyectos mantenidos y reputados;
- minimiza la cantidad de dependencias;
- verifica compatibilidad de licencia;
- considera riesgo directo y transitivo de cadena de suministro;
- prefiere capacidades nativas/de plataforma cuando sea práctico;
- registra implicaciones materiales de dependencia/seguridad cuando corresponda.

No copies lockfiles desde otro proyecto. Las afirmaciones de reproducibilidad requieren un lockfile generado y validado para este repositorio independiente.

## Documentación

La documentación debe describir comportamiento real y estado observado del proyecto.

“Documentar el cambio” significa realizar una auditoría basada en impacto sobre gobierno, estado actual, arquitectura, decisiones, operaciones/distribución, seguridad, contribución/comunidad y superficies legales/licencia. No significa crear un archivo Markdown nuevo para cada tarea.

Prefiere una fuente canónica de verdad sobre narrativas duplicadas. Actualiza `docs/CURRENT-STATE.md` en checkpoints importantes de consolidación/release. Mantén procedimientos operativos en `docs/operations/`. Registra decisiones importantes de arquitectura, hosting, distribución, seguridad, manejo de datos o integración mediante ADR antes de implementarlas.

Evita afirmar certificación/compliance salvo que se haya logrado formalmente. Usa lenguaje acotado como “validado”, “probado en” o “alineado con” según la evidencia disponible.

`LICENSE` es una decisión deliberada del proyecto. No reemplaces, amplíes, reinterpretes ni asignes automáticamente una licencia sin autorización explícita de Luis Salamanca.

## Distribución

Los canales soportados actualmente y los planeados deben separarse claramente. Una idea documentada no es un canal implementado.

Los posibles canales incluyen uso local desde código fuente, uso estático/alojado en navegador, contenedores y artefactos empaquetados de escritorio/release. Cada canal debe diseñarse, implementarse y validarse antes de que la documentación pueda llamarlo soportado. No inventes una ruta de demo pública antes de que la integración web la defina y valide.

## Idioma y localización

El idioma canónico de trabajo y documentación de Core Asset Lab es **español de Colombia (es-CO)**. La documentación debe redactarse originalmente en un español colombiano claro, profesional y natural; no debe depender de traducciones automáticas desde el inglés.

- El español (es-CO) es la fuente principal para documentación de gobierno, estado del proyecto, arquitectura, operaciones, seguridad, contribución y decisiones.
- Cuando exista documentación pública en inglés, debe mantenerse como versión localizada con paridad semántica respecto de la versión canónica en español.
- Los nombres propios, comandos, rutas, APIs, identificadores, formatos, nombres de tecnologías y términos técnicos cuya traducción reduzca precisión pueden conservarse en inglés.
- No traducir literalmente terminología técnica cuando el uso habitual en Colombia o en la industria sea más claro en inglés.
- La interfaz V1 mantiene ES/EN y los cambios de localización deben conservar paridad semántica, sin crear comportamientos contradictorios.
- Los textos jurídicos oficiales de terceros, incluido `LICENSE`, deben conservarse intactos en su idioma oficial. Puede añadirse documentación explicativa en español, dejando claro que no sustituye ni modifica el texto jurídico aplicable.

## Reporte de finalización requerido

Para tareas de implementación reporta, cuando corresponda:

1. archivos modificados;
2. por qué cambiaron;
3. validación realmente realizada;
4. riesgos o supuestos pendientes;
5. commits resultantes;
6. estado de release/despliegue cuando sea relevante;
7. cierre documental y limpieza de ramas para promociones de release.

No fabriques evidencia local de `git diff`, `git status`, runtime, build o despliegue cuando el entorno actuante no la haya observado. Para trabajo realizado únicamente mediante connector/API, reporta los archivos y commits resultantes.
