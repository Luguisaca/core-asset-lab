# Core Asset Lab — Registro de extracción

Este documento conserva el registro histórico de la extracción que creó el repositorio independiente de Core Asset Lab. No es el documento canónico del estado actual; consulta `CURRENT-STATE.md` para conocer el estado vigente.

## Origen

Core Asset Lab nació dentro de `Luguisaca/luguisaca.com` como herramienta de ingeniería ejecutada en el navegador para cargar, inspeccionar y calibrar recursos GLB/GLTF utilizados durante el desarrollo del Core/Hero de LUGUISACA.

Sprint 01 es el límite formal del producto registrado por el ADR 0003 en el repositorio de origen. El desarrollo reutilizable posterior al límite —visor, inspección y calibración— se conservó en la rama `extract/core-asset-lab`.

Checkpoint de origen de la migración:

- repositorio: `Luguisaca/luguisaca.com`
- rama: `extract/core-asset-lab`
- commit: `feefc5573ebd646534dbe9ad2eb397a02724d914`
- tree: `06b32dd5a0907cc73ecd3783db366370172ddbcd`

El destino independiente es `Luguisaca/core-asset-lab`, consolidado inicialmente en la rama `core-asset-lab-v1` y posteriormente promovido a `main`.

## Límite

Incluido: carga de modelos en navegador, visor Three.js, controles de inspección, reproducción de animaciones, telemetría, diagnósticos, controles de presentación, UI responsive del Lab y documentación específica del Lab.

Excluido: landing/páginas de `luguisaca.com`, contenido profesional, recursos Core/Hero de producción de LUGUISACA, recursos de marca/personales, localización global del sitio, configuración Cloudflare y QA del sitio web.

## Modelo de privacidad durante la extracción

Los archivos GLB/GLTF seleccionados son leídos por el runtime del navegador. El Lab extraído no tiene backend de aplicación y no carga intencionalmente el contenido de los modelos seleccionados.

## Verificación de la migración

El árbol de origen del destino se comparó con la extracción fuente. Un `.gitignore` omitido se restauró usando exactamente el contenido de origen; después de restaurarlo, los archivos migrados coincidieron con sus blobs de origen. Una revisión estática de independencia no encontró dependencias funcionales de la aplicación `luguisaca.com`, sus rutas, recursos de marca ni configuración Cloudflare.

Estas comprobaciones establecen integridad de migración e independencia estructural. No reemplazan instalación limpia, evidencia de build/check ni QA funcional independiente.

## Nota histórica

La instrucción inicial de staging de no publicar un repositorio independiente quedó reemplazada cuando se aceptó el límite de proyecto independiente y se creó este repositorio. La licencia se decidió posteriormente de forma explícita y no se deriva de la extracción.
