# Core Asset Lab

**Idioma:** Español (Colombia) · [English](README.en.md)

Laboratorio ejecutado en el navegador para cargar, inspeccionar, validar y calibrar recursos GLB/GLTF locales.

## Capacidades

Core Asset Lab permite cargar archivos `.glb` y `.gltf`, inspeccionar escena, meshes y materiales, reproducir animaciones embebidas, usar helpers de diagnóstico, ajustar presentación/renderizado y generar capturas o reportes desde el navegador.

Los modelos seleccionados se procesan localmente en el navegador. La aplicación actual es estática y no requiere backend para el flujo de inspección.

## Requisitos

- Node.js `>=22.19.0`
- npm
- navegador moderno compatible con WebGL
- Git, si clonas el repositorio

## Ejecutar localmente

```bash
git clone https://github.com/Luguisaca/core-asset-lab.git
cd core-asset-lab
npm ci
npm run dev
```

Para validar y compilar:

```bash
npm run check
npm run build
npm run preview
```

La salida de producción se genera en `dist/`.

## Formatos

La interfaz acepta actualmente selecciones `.glb` y `.gltf` de hasta 100 MB. Los GLTF que dependen de buffers, texturas u otros archivos externos pueden requerir manejo adicional; no se asume compatibilidad universal con todos los layouts multiarchivo.

## Privacidad y seguridad

Los modelos seleccionados no se cargan intencionalmente a un backend de la aplicación. Trata cualquier modelo importado como entrada no confiable y no adjuntes públicamente archivos o información confidencial, propietaria, personal o sensible.

Para vulnerabilidades consulta `SECURITY.md`. Para bugs ordinarios puedes utilizar GitHub Issues.

## Documentación pública

- `docs/architecture/README.md` — arquitectura de runtime y límites de confianza.
- `docs/operations/README.md` — instalación, validación y build.
- `SECURITY.md` — postura de seguridad y reporte de vulnerabilidades.
- `CONTRIBUTING.md` — contribuciones.
- `LICENSE` — términos de licencia.

## Licencia

Core Asset Lab está disponible bajo **PolyForm Noncommercial License 1.0.0**. `LICENSE` contiene los términos aplicables. El acceso al repositorio no concede derechos adicionales a los establecidos por esa licencia.
