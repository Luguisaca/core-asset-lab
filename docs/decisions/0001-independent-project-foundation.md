# ADR 0001 — Independent Core Asset Lab foundation

- Status: Accepted
- Date: 2026-09-16

## Context

Core Asset Lab originated inside `luguisaca.com` while developing and validating the LUGUISACA Core/Hero GLB/GLTF experience. During Sprint 01 the Lab demonstrated a broader purpose as a reusable browser-side viewer, inspection and calibration workbench.

The source repository accepted ADR 0003 to separate the website-specific Core Lab from the generalized project. Development was preserved on `extract/core-asset-lab` and subsequently copied into the independent `Luguisaca/core-asset-lab` repository.

## Decision

Core Asset Lab is an independent project from the Sprint 01 boundary onward.

Its current architectural baseline is a static Astro + TypeScript + Three.js application that processes user-selected GLB/GLTF assets in the browser and has no application backend.

The independent repository owns its post-boundary features, QA, architecture, documentation, distribution, releases, roadmap and future licensing decisions.

The project does not automatically inherit LUGUISACA website branding assets, Cloudflare configuration, production deployment model or licensing decisions.

## Provenance

- Source repository: `Luguisaca/luguisaca.com`
- Source extraction branch: `extract/core-asset-lab`
- Source checkpoint: `feefc5573ebd646534dbe9ad2eb397a02724d914`
- Source boundary decision: `docs/decisions/0003-core-lab-project-boundary.md`

The independent migration was compared against the source extraction at file/blob level. `.gitignore`, omitted during the manual web upload, was restored exactly from the source.

## Consequences

- `luguisaca.com` continues to own its website-specific Core/Hero Lab.
- General Core Asset Lab development occurs here and must not be merged back into the website merely because of historical origin.
- Browser-local/static architecture is the current baseline and material departures require a new ADR.
- Docker, desktop packaging and hosted releases may be evaluated independently; none is considered supported until implemented and validated.
- The current license is not changed by this ADR. A future licensing model requires an explicit decision.
