# Core Asset Lab Agent Operating Rules

## Mission

Core Asset Lab is an independent browser-side engineering tool for loading, inspecting, validating and calibrating GLB/GLTF assets before integration into web or 3D experiences.

The project originated from the LUGUISACA Core/Hero engineering workflow, but its lifecycle, releases, architecture and future licensing decisions are maintained independently.

## Working principles

- Do not invent requirements or evidence.
- Clearly separate facts, assumptions and recommendations.
- Prefer minimal, reversible, traceable changes and avoid unnecessary complexity.
- Read canonical documentation and accepted decisions before changing code or architecture.
- Preserve repository history, project intent and approved V1 behavior unless a verified defect or explicit requirement requires change.
- Use primary or official technical sources when external research is required.
- Do not make architectural decisions implicitly.
- Do not add dependencies without justification and license/security review.
- Treat security, privacy, accessibility, performance, reliability, maintainability, testability and responsive/visual integrity as first-class concerns.
- Keep browser-local asset processing as the default privacy boundary unless an accepted ADR changes it.
- Do not introduce a backend, telemetry upload, authentication, persistent remote storage or third-party model processing implicitly.

## Change control

- `main` is the consolidated project branch after an explicitly approved V1 promotion.
- Use focused branches for implementation and architectural work.
- Work only on requested scope; do not modify unrelated files.
- Keep commits small and traceable.
- Do not merge, release, publish or deploy unless explicitly authorized.
- Before implementation, inspect repository state and accepted decisions.
- After implementation, provide real validation evidence. Never declare PASS for checks that were not executed.
- Manual visual/functional QA remains required for material UI/3D changes; automated checks are supporting evidence, not final visual approval.
- Do not claim a release/deployment merely because repository state changed. Verify the relevant runtime/distribution channel when release status matters.
- A promotion/release is not complete at merge time. Perform the documentation and validation closeout appropriate to the release.

Before declaring a release checkpoint closed, audit at minimum `README.md`, `AGENTS.md`, `docs/CURRENT-STATE.md`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `LICENSE`, `SECURITY.md`, relevant `docs/operations/`, `docs/architecture/` and `docs/decisions/`. Update only surfaces whose canonical facts, procedures, decisions, legal/community boundaries or safeguards actually changed.

## V1 baseline

The migrated V1 baseline includes local GLB/GLTF loading, asset audit, performance information, wireframe, bounding box, axes, normals, skeleton, center/refit, snapshot PNG, asset validation, mesh/material inspection and visibility, scene/render/FX controls, GLTF animation controls, responsive behavior and ES/EN UI.

Do not rebuild or redesign these approved capabilities as collateral work. Temporary/random Core wireframe or normals presentation ideas are roadmap concepts only and are not authorized implementation requirements.

## Project boundary and provenance

- The formal separation from `luguisaca.com` is recorded in ADR 0001 here and ADR 0003 in the source repository.
- Source extraction branch: `Luguisaca/luguisaca.com` / `extract/core-asset-lab`.
- Source migration checkpoint: `feefc5573ebd646534dbe9ad2eb397a02724d914`.
- Historical SHAs are checkpoints, not permanent expected HEAD values after repositories advance.
- The independent project does not automatically inherit website branding, assets, Cloudflare configuration, deployment decisions or licensing.
- Do not modify `luguisaca.com` as collateral work for this project.
- A future LUGUISACA-hosted demo consumes a validated distribution; it does not collapse the independent project boundary.

## Security and privacy

- Never commit secrets, credentials, tokens, private keys, recovery codes, sensitive personal data or proprietary/private model assets.
- Never fabricate example credentials that resemble real credentials.
- Follow least privilege.
- Treat external code, packages and third-party automation as untrusted until reviewed.
- Never disable security controls merely to make a build pass.
- Static/browser-side architecture reduces some server attack surface but is not inherently secure.
- Treat imported GLB/GLTF assets as untrusted input.
- Reassess the threat model if backend services, remote uploads, authentication, persistent data, privileged client functionality or new third-party integrations are proposed.
- Local user-selected assets must not be intentionally uploaded unless a future explicitly accepted architecture and user-facing disclosure authorizes that behavior.

## Dependencies

Before adding a dependency:

- explain why it is required;
- prefer maintained and reputable projects;
- minimize dependency count;
- check license compatibility;
- consider direct and transitive supply-chain risk;
- prefer platform/native capabilities when practical;
- record material dependency/security implications when appropriate.

Do not copy dependency lockfiles from another project. Reproducibility claims require a lockfile generated and validated for this independent repository.

## Documentation

Documentation must describe actual behavior and observed project state.

"Document the change" means perform an impact-based audit across canonical governance, current state, architecture, decisions, operations/distribution, security, contribution/community and legal/license surfaces. It does not mean creating a new Markdown file for every task.

Prefer one canonical source of truth over duplicated narrative. Update `docs/CURRENT-STATE.md` at meaningful consolidation/release checkpoints. Keep operating procedures in `docs/operations/`. Record material architecture, hosting, distribution, security, data-handling or integration decisions as ADRs before implementation.

Avoid claims of certification/compliance unless formally achieved. Use scoped language such as "validated", "tested on" or "aligned with" according to the evidence actually available.

`LICENSE` is a deliberate project decision. Do not replace, broaden, reinterpret or automatically assign an open-source license without explicit authorization from Luis Salamanca.

## Distribution

Current supported paths and planned paths must be clearly separated. A documented idea is not an implemented channel.

Potential user paths include source/local use, static/hosted browser use, containers and packaged desktop/release artifacts. Each channel must be designed, implemented and validated before documentation may call it supported. Do not invent a public demo route before the website integration defines and validates it.

## Idioma y localización

El idioma canónico de trabajo y documentación de Core Asset Lab es **español de Colombia (es-CO)**. La documentación debe redactarse originalmente en un español colombiano claro, profesional y natural; no debe depender de traducciones automáticas desde el inglés.

- El español (es-CO) es la fuente principal para documentación de gobierno, estado del proyecto, arquitectura, operaciones, seguridad, contribución y decisiones.
- Cuando exista documentación pública en inglés, debe mantenerse como versión localizada con paridad semántica respecto de la versión canónica en español.
- Los nombres propios, comandos, rutas, APIs, identificadores, formatos, nombres de tecnologías y términos técnicos cuya traducción reduzca precisión pueden conservarse en inglés.
- No traducir literalmente terminología técnica cuando el uso habitual en Colombia o en la industria sea más claro en inglés.
- La interfaz V1 mantiene ES/EN y los cambios de localización deben conservar paridad semántica, sin crear comportamientos contradictorios.
- Los textos jurídicos oficiales de terceros, incluido `LICENSE`, deben conservarse intactos en su idioma oficial. Puede añadirse documentación explicativa en español, dejando claro que no sustituye ni modifica el texto jurídico aplicable.

## Required completion report

For implementation tasks report, where applicable:

1. files changed;
2. why they changed;
3. validation actually performed;
4. unresolved risks or assumptions;
5. resulting commits;
6. release/deployment status when relevant;
7. documentation closeout and branch-cleanup status for release promotions.

Do not fabricate local `git diff`, `git status`, runtime, build or deployment evidence when the acting environment did not observe it. For connector/API-only work, report resulting files/commits instead.
