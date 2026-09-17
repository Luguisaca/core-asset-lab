# Core Asset Lab Agent Operating Rules

## Mission

Core Asset Lab is an independent browser-side engineering tool for loading, inspecting, validating and calibrating GLB/GLTF assets before integration into web or 3D experiences.

The project originated from the LUGUISACA Core/Hero engineering workflow, but its lifecycle, releases, architecture and future licensing decisions are maintained independently.

## Working principles

- Do not invent requirements or evidence.
- Prefer minimal, reversible and traceable changes.
- Read canonical documentation before changing code or architecture.
- Preserve approved V1 behavior unless a verified defect or explicit change requires modification.
- Do not make architectural decisions implicitly.
- Do not add dependencies without justification and license/security review.
- Treat security, privacy, accessibility, performance, maintainability and responsive behavior as first-class concerns.
- Keep browser-local asset processing as the default privacy boundary unless an accepted ADR changes it.
- Do not introduce a backend, telemetry upload, authentication, persistent remote storage or third-party model processing implicitly.

## Change control

- `main` is the consolidated project branch once V1 migration is promoted.
- Use focused branches for implementation and architectural work.
- Work only on requested scope; do not modify unrelated files.
- Keep commits small and traceable.
- Do not merge, release, publish or deploy unless explicitly authorized.
- Before implementation, inspect repository state and accepted decisions.
- After implementation, provide real validation evidence. Never declare PASS for checks that were not executed.
- Manual visual QA remains required for material UI/3D changes; automated checks are supporting evidence, not final visual approval.

## V1 baseline

The migrated V1 baseline includes local GLB/GLTF loading, asset audit, performance information, wireframe, bounding box, axes, normals, skeleton, center/refit, snapshot PNG, asset validation, mesh/material inspection and visibility, scene/render/FX controls, GLTF animation controls, responsive behavior and ES/EN UI.

Do not rebuild or redesign these approved capabilities as collateral work. Temporary/random Core wireframe or normals presentation ideas are roadmap concepts only and are not authorized implementation requirements.

## Project boundary and provenance

- The formal separation from `luguisaca.com` is recorded in ADR 0001 in this repository and ADR 0003 in the source repository.
- Source extraction branch: `Luguisaca/luguisaca.com` / `extract/core-asset-lab`.
- Source migration checkpoint: `feefc5573ebd646534dbe9ad2eb397a02724d914`.
- The independent project does not automatically inherit website branding, assets, Cloudflare configuration, deployment decisions or licensing.
- Do not modify `luguisaca.com` as collateral work for this project.

## Security and privacy

- Never commit secrets, credentials, tokens, private keys or sensitive personal data.
- Follow least privilege.
- Treat third-party packages and automation as supply-chain dependencies requiring review.
- Never disable security controls merely to make a build pass.
- Static/browser-side architecture reduces some server attack surface but is not inherently secure.
- Reassess the threat model if backend services, remote uploads, authentication, persistent data, privileged client functionality or new third-party integrations are proposed.
- Local user-selected assets must not be intentionally uploaded unless a future explicitly accepted architecture and user-facing disclosure authorizes that behavior.

## Dependencies

Before adding a dependency:

- explain why it is required;
- prefer maintained and reputable projects;
- minimize dependency count;
- check license compatibility;
- consider direct and transitive supply-chain risk;
- prefer platform/native capabilities when practical.

## Documentation

Documentation must describe actual behavior and observed project state.

"Document the change" means perform an impact-based audit across canonical governance, current state, architecture, decisions, operations/distribution, security, contribution/community and legal/license surfaces. It does not mean creating a new Markdown file for every task.

Prefer one canonical source of truth over duplicated narrative. Update `docs/CURRENT-STATE.md` at meaningful consolidation/release checkpoints. Record architectural decisions as ADRs before implementing material changes to runtime architecture, distribution, hosting, security, data handling or integrations.

`LICENSE` is a deliberate project decision. Do not replace, broaden, reinterpret or automatically assign an open-source license without explicit authorization from Luis Salamanca.

## Distribution

Potential user paths include browser-hosted use, local development, containers and packaged desktop/release artifacts. A documented idea is not an implemented or supported distribution channel. Each channel must be designed, implemented and validated before documentation may call it supported.

## Required completion report

For implementation tasks report, where applicable:

1. files changed;
2. why they changed;
3. validation actually performed;
4. unresolved risks or assumptions;
5. resulting commits;
6. release/deployment status when relevant.

Do not fabricate local `git diff`, `git status`, runtime, build or deployment evidence when the acting environment did not observe it.
