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

The existing `LICENSE` file is intentionally unchanged. The long-term independent-project usage/license model remains a deliberate pending decision and must not be inferred from the source website, repository visibility or planned distribution channels.

## Pull-request state

PR #1 (`core-asset-lab-v1` → `main`, title `Add files via upload`) was closed without merge on 2026-09-17 and points to an earlier branch checkpoint. It is historical migration trace, not the V1 promotion vehicle.

When V1 promotion is authorized, use a fresh PR/review from the then-current validated `core-asset-lab-v1` HEAD to `main`; do not rely on PR #1 as evidence of the final diff.

## V1 merge gate

Completed evidence: migration integrity, static independence, Node 22.19 CI baseline, deterministic lockfile bootstrap/check/build/smoke QA, independent Windows runtime QA and canonical documentation consolidation.

Still required before `core-asset-lab-v1` is promoted to `main`:

1. confirm the documentation-only closure commit preserves a green branch-head CI;
2. create/review the final promotion PR from the validated branch HEAD;
3. obtain explicit project-owner approval for merge.

No merge, release, public demo deployment or source-repository cleanup is implied by this document.
