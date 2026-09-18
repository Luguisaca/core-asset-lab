# Core Asset Lab — Current State

Last consolidated: 2026-09-18

## Status

Core Asset Lab is maintained independently in `Luguisaca/core-asset-lab`. V1 was promoted to `main` through PR #2 after project-owner approval. The merge commit is `744e0a301262576b7af2689b5a76c1e58db06a1c`. A fresh Windows clone of `main` subsequently passed deterministic install, check, build, development runtime and project-owner visual/functional acceptance. The migration branch `core-asset-lab-v1` was then deleted.

Migration integrity from the source extraction was verified by repository-tree/blob comparison. The only file omitted during the manual web upload was `.gitignore`; it was restored byte-for-byte from the source in commit `7251fb49d2d13164115daf2db5562f3f2390e467`.

Static inspection found no functional dependency on `luguisaca.com`, its pages, branding assets, Cloudflare configuration or backend services.

## Runtime architecture

- Astro 7.3.2
- TypeScript 5.9.3
- Three.js 0.186.0
- Node.js >= 22.19.0 for current development/build tooling
- Astro static output
- browser-side GLB/GLTF processing
- no application backend in the current architecture

The Node baseline was raised from 22.12.0 after the first independent CI bootstrap exposed current transitive package engine requirements above that version. Node 22.19.0 is the validated CI baseline; Node 24.19.0 is also directly exercised on Windows.

## V1 capabilities

The V1 baseline includes local `.glb`/`.gltf` loading, Asset Audit and Performance information, Wireframe, Bounding Box, Axes, Copy Config, Export Report, Mesh/Material Inspector and visibility, Grid, real Normals, Skeleton helpers, Center/Refit, Snapshot PNG, Asset Validation, HIDE ALL/SHOW ALL, scene/render/FX controls, GLTF animation controls, responsive behavior and ES/EN UI.

Historical pre-extraction QA exercised Fox, RiggedSimple and BrainStem. Post-migration manual acceptance confirms the independent application is visually and functionally behaving as expected in the owner's exercised workflow; this is not universal certification for every GLB/GLTF/browser/GPU combination.

## Migration provenance

- Source repository: `Luguisaca/luguisaca.com`
- Source branch: `extract/core-asset-lab`
- Source checkpoint: `feefc5573ebd646534dbe9ad2eb397a02724d914`
- Formal product boundary: Sprint 01

The source website retains its own Core/Hero validation Lab; post-boundary generalized viewer/inspection/calibration work belongs here.

## Validation evidence

### Repository and architecture

- Migration file integrity: **PASS** — tree/blob comparison against the extraction source.
- Static independence audit: **PASS** — configuration/import/path inspection found no runtime dependency on `luguisaca.com`.

### Automated independent QA

- Run #2 (`35177543306`): **PASS** — dependency installation, `npm run check` and production build after correcting a real TypeScript material-union issue.
- Run #3 (`35177699229`): **PASS** — generated `dist/` served over HTTP and expected Core Asset Lab/file-input surface found.
- Run #5 (`35179217936`): **PASS** — Node 22.19.0 supported baseline, dependency installation, check, build and smoke-test workflow completed successfully.
- Run #18 (`35180417863`): **PASS** — committed lockfile, Node 22.19.0, deterministic `npm ci`, Astro check, production build and built-app HTTP smoke test all completed successfully on commit `43d70bdffd47d85900a4410b5749f71cd8ce3f7a`.

The repository now commits `package-lock.json` (lockfileVersion 3). CI uses `npm ci --no-audit --no-fund`, so the V1 dependency bootstrap is lockfile-reproducible rather than an unlocked `npm install` bootstrap.

### Independent manual Windows QA

Observed environment:

- Windows 11
- Node.js 24.19.0
- npm 11.7.0
- independent `core-asset-lab` clone/worktree

Observed result:

- deterministic `npm ci`: **PASS** with 0 reported vulnerabilities;
- `npm run check`: **PASS** with 0 errors, 0 warnings and 4 non-blocking hints;
- `npm run build`: **PASS** with static `dist/` output;
- development server: **PASS**;
- visual behavior: **PASS** by project-owner acceptance;
- exercised V1 functionality: **PASS** by project-owner acceptance.

The remaining hints include Three.js `Clock` deprecation notices and an unused `modelScale`; the production build also reports a non-blocking large-chunk advisory. These remain tracked technical debt rather than being silently refactored during V1 closure.

## Distribution status

- Source/local Node + npm workflow: **VALIDATED**.
- Lockfile-reproducible `npm ci` workflow: **VALIDATED**.
- Static Astro build: **VALIDATED**.
- Official hosted LUGUISACA demo: **NOT IMPLEMENTED**; route remains intentionally undefined.
- Docker distribution: **NOT IMPLEMENTED**.
- Packaged desktop executable: **NOT IMPLEMENTED**.
- Versioned downloadable release artifacts: **NOT IMPLEMENTED**.

Planned channels must not be described as supported until implemented and validated.

## Licensing

The project owner approved **PolyForm Noncommercial License 1.0.0** as the independent-project license on 2026-09-18. The project is source-available under those noncommercial terms; repository access does not grant rights beyond `LICENSE`. Commercial permissions, if any, require a separate license from the licensor.

Core Asset Lab is human-directed and human-reviewed while using AI-enabled tools as development/research/documentation assistance. This process does not guarantee defect-free software. Community reporting uses GitHub collaboration/security features as enabled, `bugs@luguisaca.com` for ordinary bugs and `contacto@luguisaca.com` for general contact.

## Pull-request and V1 closure state

PR #1 (`core-asset-lab-v1` → `main`, title `Add files via upload`) was closed without merge on 2026-09-17 and remains historical migration trace. PR #2 (`Core Asset Lab V1 — independent baseline`) was reviewed and explicitly approved by the project owner, then merged to `main` on 2026-09-17 with merge commit `744e0a301262576b7af2689b5a76c1e58db06a1c`.

V1 migration and promotion are **CLOSED**. Fresh-clone validation of `main` passed and the independent migration branch was removed. Release packaging, public demo deployment and cleanup of historical branches in the separate `luguisaca.com` source repository remain separate future work.
