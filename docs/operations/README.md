# Operaciones

## Requisitos

- Node.js `>=22.19.0`
- npm
- navegador moderno compatible con WebGL
- Git, si se clona el repositorio

## Instalación y desarrollo

```bash
git clone https://github.com/Luguisaca/core-asset-lab.git
cd core-asset-lab
npm ci
npm run dev
```

`npm ci` utiliza el grafo registrado en `package-lock.json`.

## Validación

```bash
npm ci
npm run check
npm run build
```

El build estático se genera en `dist/`. Para inspeccionarlo localmente:

```bash
npm run preview
```

## Entradas

La UI acepta actualmente archivos `.glb` y `.gltf` de hasta 100 MB. Un GLTF puede depender de recursos externos; valida el modelo concreto cuando utilice buffers o texturas separados.

## Seguridad

No introduzcas secretos en el repositorio ni en el bundle del cliente. Los modelos importados deben tratarse como entrada no confiable. Consulta `SECURITY.md` para los límites públicos de seguridad y privacidad.
