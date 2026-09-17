# Core Asset Lab — Current State

Last consolidated: 2026-09-16

## Status

Core Asset Lab is now maintained in the independent `Luguisaca/core-asset-lab` repository. The current working baseline is branch `core-asset-lab-v1`.

Migration integrity from the source extraction was verified by repository-tree/blob comparison. The only file omitted during the manual web upload was `.gitignore`; it was restored byte-for-byte from the source in commit `7251fb49d2d13164115daf2db5562f3f2390e467`.

Static inspection found no functional dependency on `luguisaca.com`, its pages, branding assets, Cloudflare configuration or backend services.

## Runtime architecture

- Astro 7.3.2
- TypeScript 5.9.3
- Three.js 0.186.0
- Node.js >= 22.12.0 for development/build tooling
- Astro static output
- Browser-side GLB/GLTF processing
- No application backend in the current architecture

## Approved V1 baseline

Manual QA performed before extraction approved the following capabilities:

- local `.glb` / `.gltf` loading;
- Asset Audit and Performance information;
- Wireframe, Bounding Box and Axes;
- Copy Config and Export Report;
- Mesh/Material Inspector and per-mesh visibility;
- Grid, real Normals and Skeleton helpers;
- Center/Refit and Snapshot PNG;
- Asset Validation;
- HIDE ALL / SHOW ALL;
- scene, render and FX controls;
- GLTF animation playback/selection/speed;
- responsive behavior and ES/EN interface.

Previously exercised assets included Fox, RiggedSimple and BrainStem. This records historical manual QA; it is not evidence that the independent repository has already passed a clean installation/build/runtime validation.

## Migration provenance

Source repository: `Luguisaca/luguisaca.com`

Source branch: `extract/core-asset-lab`

Source checkpoint: `feefc5573ebd646534dbe9ad2eb397a02724d914`

The formal project boundary is Sprint 01. The source website retains its own Core/Hero validation Lab; post-boundary generalized viewer/inspection/calibration work belongs here.

## Validation status

- Migration file integrity: PASS by tree/blob comparison.
- Static independence audit: PASS by configuration/import/path inspection.
- Clean dependency installation in independent project: NOT YET VERIFIED.
- `npm run check`: NOT YET VERIFIED in the independent project.
- `npm run build`: NOT YET VERIFIED in the independent project.
- Independent runtime/manual GLB/GLTF QA: NOT YET VERIFIED after migration.
- Docker distribution: NOT IMPLEMENTED.
- Packaged desktop executable: NOT IMPLEMENTED.
- Hosted public release: NOT IMPLEMENTED.

Do not upgrade any NOT YET VERIFIED/NOT IMPLEMENTED item to PASS without direct evidence.

## Licensing

The existing `LICENSE` file is intentionally unchanged during this documentation consolidation. The long-term independent-project usage/license model remains a deliberate pending decision and must not be inferred from the source website.

## Next checkpoint

Complete clean installation, static/type checks, production build and independent runtime QA. Distribution channels such as Docker and packaged desktop builds require separate design/ADR and validation before being advertised as supported.
