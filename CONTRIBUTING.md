# Contribuir a Core Asset Lab

Gracias por ayudar a mejorar Core Asset Lab.

## Antes de cambiar código

Lee `AGENTS.md`, `docs/CURRENT-STATE.md`, `docs/architecture/README.md` y los ADR aplicables. Conserva el comportamiento V1 aprobado, salvo que el cambio corrija un defecto verificado o implemente un requisito aceptado explícitamente.

## Entorno de desarrollo

Requiere Node.js `>=22.19.0`, npm y un navegador moderno compatible con WebGL.

```bash
npm ci
npm run dev
```

Antes de proponer un cambio de código, ejecuta:

```bash
npm run check
npm run build
```

Registra la evidencia real de validación y sus limitaciones. Nunca reportes PASS para comprobaciones que no se ejecutaron. Los cambios importantes de UI/3D también requieren QA visual y funcional manual; CI es evidencia de apoyo, no aprobación visual.

## Flujo de cambios

Usa una rama enfocada, mantén commits pequeños y trazables y evita refactors no relacionados. No hagas merge, release, publicación ni despliegue sin la revisión requerida y autorización explícita.

Las dependencias nuevas requieren justificación, revisión de mantenimiento/seguridad y compatibilidad de licencia. Las decisiones importantes de arquitectura, hosting, seguridad, datos, integración o empaquetado requieren un ADR antes de implementarse.

## Pull Requests

Un PR debe indicar:

- qué cambió y por qué;
- validación realmente ejecutada y entorno, cuando corresponda;
- limitaciones conocidas, riesgos o deuda técnica;
- impacto documental;
- implicaciones de arquitectura, seguridad y privacidad;
- impacto sobre release o despliegue.

No consideres un build verde como evidencia suficiente de comportamiento 3D que no haya sido probado.

## Documentación

La documentación forma parte del cambio. Audita las fuentes canónicas afectadas en lugar de crear narrativas Markdown duplicadas. `docs/CURRENT-STATE.md` es el punto canónico de evidencia y estado; operaciones, arquitectura, seguridad y ADR conservan sus responsabilidades respectivas.

El idioma canónico del proyecto es español de Colombia (`es-CO`), según `AGENTS.md`. Las versiones en inglés son localizaciones y deben conservar paridad semántica con la documentación canónica en español.

## Comunidad y reportes

Usa GitHub Issues para bugs reproducibles y propuestas de funcionalidades, y Pull Requests para contribuciones. Cuando Discussions esté habilitado, úsalo para preguntas, ideas abiertas y conversación comunitaria. Los bugs también pueden reportarse a `bugs@luguisaca.com`; el contacto general de LUGUISACA es `contacto@luguisaca.com`.

Un reporte útil de bug incluye la versión o commit afectado, entorno, características del modelo cuando sea seguro compartirlas, pasos de reproducción, comportamiento esperado y comportamiento observado. No adjuntes archivos ni datos confidenciales, propietarios, personales o sensibles en reportes públicos.

## Seguridad

No incluyas secretos, modelos privados/propietarios, datos personales sensibles ni detalles explotables de vulnerabilidades en commits o Issues públicos. Sigue `SECURITY.md` para el manejo de vulnerabilidades y utiliza Private Vulnerability Reporting / Security Advisories de GitHub cuando ese mecanismo esté habilitado.

## Licencia

Las contribuciones y el uso del proyecto se rigen por el archivo `LICENSE` del repositorio (PolyForm Noncommercial License 1.0.0). No infieras permisos adicionales por el acceso o visibilidad del repositorio. Los cambios de licencia requieren autorización explícita de Luis Salamanca.
