# Core Asset Lab — Extraction Notes

This workspace isolates the QA-approved Sprint 02 Core Asset Lab from the LUGUISACA website.

## Boundary

Included: browser-side model loading, Three.js viewer, inspector controls, animation playback, telemetry, diagnostics, presentation controls, responsive Lab UI and Lab documentation.

Excluded: luguisaca.com landing/pages, professional content, LUGUISACA production Core, branding assets, personal assets, site-wide localization, Cloudflare configuration and website QA.

## Privacy model

Selected GLB/GLTF files are read by the browser runtime. The Lab has no application backend and does not intentionally upload model contents.

## Extraction status

The current extraction remains a staging branch until dependency cleanup, local `npm install`, `npm run check`, `npm run build` and functional GLB/GLTF QA have been completed. Do not publish a standalone repository or assign an open-source license before those checks.
