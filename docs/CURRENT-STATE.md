# Core Asset Lab — Current State

Last consolidated: 2026-09-17

## Status

Core Asset Lab is maintained independently in `Luguisaca/core-asset-lab`. The current pre-merge V1 baseline is branch `core-asset-lab-v1`; promotion to `main` remains intentionally blocked until the project owner explicitly approves the completed V1 gate.

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

The Node baseline was raised from 22.12.0 after the first independent CI bootstrap exposed current transitive package engine requirements above that version. Node 22.19.0 is the CI baseline; Node 24.19.0 is also directly exercised on Windows.

## V1 capabilities

The V1 baseline includes:

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

Historical pre-extraction QA exercised Fox, RiggedSimple and BrainStem. The post-migration manual acceptance confirms the independent application is visually and functionally behaving as expected in the owner's exercised workflow; it is not a universal compatibility certification for every GLB/GLTF/browser/GPU combination.

## Migration provenance

Source repository: `Luguisaca/luguisaca.com`

Source branch: `extract/core-asset-lab`

Source checkpoint: `feefc5573ebd646534dbe9ad2eb397a02724d914`

The formal project boundary is Sprint 01. The source website retains its own Core/Hero validation Lab; post-boundary generalized viewer/inspection/calibration work belongs here.

## Validation evidence

### Repository and architecture

- Migration file integrity: **PASS** — tree/blob comparison against the extraction source.
- Static independence audit: **PASS** — configuration/import/path inspection found no runtime dependency on `luguisaca.com`.

### Automated independent QA

GitHub Actions run #2 (`35177543306`) passed dependency installation, `npm run check` and production build after correcting a real TypeScript material-union issue.

GitHub Actions run #3 (`35177699229`) additionally passed the generated-app smoke test: the static `dist/` artifact was served over HTTP and the expected Core Asset Lab/file-input surface was found.

A later CI run validates the updated Node 22.19.0 supported baseline; its result must be checked before the V1 merge gate is closed.

The current CI uses `npm install`, not `npm ci`, because a committed `package-lock.json` is not yet present. Therefore the bootstrap is clean but not yet a deterministic lockfile install.

### Independent manual Windows QA

Observed environment:

- Windows 11
- Node.js 24.19.0
- npm 11.7.0
- independent `core-asset-lab` clone/worktree

Observed result:

- dependency installation: **PASS**;
- `npm run check`: **PASS** with 0 errors, 0 warnings and 4 non-blocking hints;
- development server: **PASS**;
- visual behavior: **PASS** by project-owner acceptance;
- exercised V1 functionality: **PASS** by project-owner acceptance.

The remaining hints include Three.js `Clock` deprecation notices and are tracked as non-blocking technical debt rather than silently refactored during V1 closure.

## Distribution status

- Source/local Node + npm workflow: **VALIDATED**.
- Static Astro build: **VALIDATED**.
- Official hosted LUGUISACA demo: **NOT IMPLEMENTED**; route remains intentionally undefined.
- Docker distribution: **NOT IMPLEMENTED**.
- Packaged desktop executable: **NOT IMPLEMENTED**.
- Versioned downloadable release artifacts: **NOT IMPLEMENTED**.

Planned channels must not be described as supported until implemented and validated.

## Licensing

The existing `LICENSE` file is intentionally unchanged. The long-term independent-project usage/license model remains a deliberate pending decision and must not be inferred from the source website, repository visibility or planned distribution channels.

## V1 merge gate

Before `core-asset-lab-v1` is promoted to `main`:

1. confirm the final CI run on the documented Node 22.19.0 baseline is green;
2. keep the independent manual QA evidence above as the acceptance record;
3. complete the canonical documentation consistency audit;
4. review PR #1 as a whole;
5. obtain explicit project-owner approval for merge.

No merge, release, public demo deployment or source-repository cleanup is implied by this document.
