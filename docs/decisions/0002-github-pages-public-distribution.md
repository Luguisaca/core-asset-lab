# ADR 0002 — GitHub Pages como canal público estático de Core Asset Lab

- Estado: Propuesto
- Fecha: 2026-09-18

## Contexto

Core Asset Lab V1 ya produce un artefacto estático `dist/` validado mediante el gate QA. El canal soportado actual es ejecución local desde código fuente; todavía no existe un destino oficial de hosting público desde este repositorio.

El proyecto necesita un canal de acceso directo para personas y agentes automatizados sin introducir backend, autenticación, telemetría, almacenamiento remoto ni procesamiento de modelos por terceros. El límite de privacidad vigente exige que los modelos seleccionados continúen procesándose localmente en el navegador.

## Decisión propuesta

Usar GitHub Pages como canal público estático del repositorio independiente, mediante GitHub Actions y el artefacto `dist/`.

La URL prevista para un project site es `https://luguisaca.github.io/core-asset-lab/`. Esta ruta no se considera publicada ni soportada hasta que el workflow, la configuración de Astro, el runtime y el QA humano correspondiente hayan sido validados y el responsable autorice explícitamente el despliegue.

GitHub Pages no sustituye la futura demo integrada bajo `luguisaca.com`; son canales distintos. La integración de LUGUISACA podrá consumir posteriormente una distribución validada sin volver a unir los ciclos de vida de ambos repositorios.

## Consecuencias

- Se conserva una arquitectura completamente estática y en navegador.
- No se introduce backend de aplicación.
- El proyecto deberá funcionar correctamente bajo el prefijo `/core-asset-lab/`; las rutas y recursos deberán validarse antes de publicar.
- El workflow de despliegue requerirá únicamente los permisos mínimos necesarios para Pages.
- Un fallo de hosting no debe confundirse con un fallo del artefacto local.
- Cambios futuros de dominio, hosting o modelo de distribución requerirán revisar esta decisión cuando alteren materialmente el canal soportado o el límite de confianza.

## Seguridad y privacidad

El hosting sirve únicamente los recursos estáticos del Lab. Los archivos GLB/GLTF seleccionados por la persona usuaria deben continuar procesándose localmente y no cargarse intencionalmente a GitHub ni a servicios remotos.

No se incorporan secretos de aplicación, telemetría ni integraciones de terceros como parte de esta decisión.

## Validación requerida antes de aceptar

1. validar build bajo el prefijo de Pages;
2. comprobar carga de JS/CSS y recursos estáticos;
3. ejecutar el gate QA automatizado;
4. realizar smoke test HTTP del artefacto;
5. realizar QA funcional/visual del URL desplegado;
6. actualizar documentación de operaciones/estado únicamente después de observar el despliegue real.

## Alternativas consideradas

- Continuar únicamente con ejecución local: mantiene simplicidad, pero no ofrece acceso directo en navegador.
- Integrar primero en `luguisaca.com`: sigue planeado, pero acoplaría el cierre de la V1 independiente al ciclo del sitio principal.
- Añadir servidor/backend propio: no aporta valor para la V1 estática y ampliaría innecesariamente la superficie operativa y de seguridad.
