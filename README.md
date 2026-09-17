# Core Asset Lab

Browser-side laboratory for loading, inspecting, validating, calibrating and presenting local GLB/GLTF assets.

Core Asset Lab is an independent project maintained by LUGUISACA / Luis Salamanca. It originated as engineering tooling for the LUGUISACA Core/Hero and became a separate reusable project at the Sprint 01 boundary. The independent V1 was extracted from `Luguisaca/luguisaca.com` branch `extract/core-asset-lab`, source commit `feefc5573ebd646534dbe9ad2eb397a02724d914`.

## What it does

The current V1 provides local GLB/GLTF loading and drag/drop, Three.js rendering and orbit controls, auto-fit and telemetry, model/scene/render/FX controls, wireframe, bounding box, axes, normals and skeleton helpers, mesh/material inspection and visibility, embedded GLTF animation playback, asset validation, snapshot PNG, configuration/report export, diagnostic console, ES/EN UI and responsive layouts.

Selected model files are processed by the browser runtime. The application has no backend in the current architecture and the model-loading flow does not intentionally upload selected model contents.

## Use it today

Core Asset Lab is currently a source-based application. Node.js >= 22.12.0 is required.

```bash
git clone https://github.com/Luguisaca/core-asset-lab.git
cd core-asset-lab
npm install
npm run dev
```

Open the local URL printed by Astro, then select or drag a `.glb` or `.gltf` file into the Lab. The current loader accepts files up to 100 MB.

For a production-style local build:

```bash
npm run check
npm run build
npm run preview
```

The generated application is static and browser-side.

## Distribution paths

Only the source/development path above is currently established. The project is being prepared for additional user-friendly distribution paths, but they must not be described as available until implemented and validated:

- hosted web application;
- container/Docker distribution;
- downloadable desktop application or installer;
- versioned release artifacts with checksums.

Architecture and packaging choices for those paths require explicit decisions and QA before release.

## Development commands

- `npm run dev` — Astro development server.
- `npm run check` — Astro/TypeScript checks.
- `npm run build` — runs checks and creates the static build.
- `npm run preview` — serves the generated build locally for preview.

See `CONTRIBUTING.md` for contribution workflow and `docs/operations/README.md` for the current operating model.

## Project status

The independent repository migration has passed source-tree integrity comparison and static independence review. Clean installation, `check`, `build` and independent functional QA remain required before V1 is promoted as a validated standalone release. See `docs/CURRENT-STATE.md` for the canonical current status.

## Architecture and decisions

- `docs/architecture/README.md` — architecture and trust boundaries.
- `docs/decisions/` — accepted architectural/project decisions.
- `docs/EXTRACTION.md` — historical extraction record.
- `SECURITY.md` — security posture and vulnerability reporting guidance.

## Scope boundary

This repository does not contain the `luguisaca.com` landing site, professional content, LUGUISACA production Core/Hero assets, personal/brand assets, Cloudflare website configuration or website-specific QA. Those remain separate concerns.

## License

The repository contains its current `LICENSE` file unchanged from the extraction. Licensing for the independent project has not yet been re-decided. Do not infer additional permissions from the public visibility of the repository; the licensing decision will be handled explicitly and separately.