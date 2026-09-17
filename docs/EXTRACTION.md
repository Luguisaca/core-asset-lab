# Core Asset Lab — Extraction Record

This document is the historical record of the extraction that created the independent Core Asset Lab repository. It is not the canonical current-state document; see `CURRENT-STATE.md` for current status.

## Origin

Core Asset Lab originated inside `Luguisaca/luguisaca.com` as browser-based engineering tooling for loading, inspecting and calibrating GLB/GLTF assets used during development of the LUGUISACA Core/Hero.

Sprint 01 is the formal product boundary recorded by ADR 0003 in the source repository. Post-boundary reusable viewer/inspection/calibration development was preserved in source branch `extract/core-asset-lab`.

Migration source checkpoint:

- repository: `Luguisaca/luguisaca.com`
- branch: `extract/core-asset-lab`
- commit: `feefc5573ebd646534dbe9ad2eb397a02724d914`
- tree: `06b32dd5a0907cc73ecd3783db366370172ddbcd`

The independent destination is `Luguisaca/core-asset-lab`, initially consolidated on branch `core-asset-lab-v1`.

## Boundary

Included: browser-side model loading, Three.js viewer, inspector controls, animation playback, telemetry, diagnostics, presentation controls, responsive Lab UI and Lab-specific documentation.

Excluded: `luguisaca.com` landing/pages, professional content, LUGUISACA production Core/Hero assets, branding/personal assets, site-wide localization, Cloudflare website configuration and website QA.

## Privacy model at extraction

Selected GLB/GLTF files are read by the browser runtime. The extracted Lab has no application backend and does not intentionally upload selected model contents.

## Migration verification

The destination source tree was compared against the extraction source. One omitted `.gitignore` was restored from the exact source content; after restoration the migrated extraction files matched their source blobs. A static independence review found no functional dependency on the `luguisaca.com` application, its routes, branding assets or Cloudflare configuration.

These checks establish migration integrity and structural independence only. They do not substitute for clean installation, build/check evidence or standalone functional QA.

## Historical note

The original staging instruction not to publish a standalone repository was superseded when the independent project boundary was accepted and this repository was created. Licensing remains a separate explicit decision and is not established by the extraction itself.