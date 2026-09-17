# Core Asset Lab

Standalone browser-side laboratory for loading, inspecting, calibrating and presenting local GLB/GLTF assets.

Extraction workspace derived from the QA-approved Sprint 02 implementation. Model files are processed locally in the browser and are not uploaded by the application.

## Development

Requires Node.js >= 22.12.

```bash
npm install
npm run dev
```

Then open the local URL printed by Astro.

## Validation

```bash
npm run check
npm run build
```

## Current scope

- local GLB/GLTF loading and drag/drop
- Three.js viewer and orbit controls
- model auto-fit and telemetry
- MODEL / SCENE / RENDER / FX / TOOLS inspector
- transforms, lighting, colors, exposure, bloom and scale
- presentation presets and motion
- embedded GLTF animation playback
- diagnostic console
- ES/EN interface
- responsive desktop, compact and mobile layouts

This extraction intentionally excludes the LUGUISACA website, professional content, production Core, branding assets and Cloudflare deployment configuration.

Licensing for the future standalone repository remains undecided until the extraction/dependency audit is complete.
