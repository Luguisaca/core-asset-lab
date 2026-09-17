# Contributing to Core Asset Lab

Thank you for helping improve Core Asset Lab.

## Before changing code

Read `AGENTS.md`, `docs/CURRENT-STATE.md`, `docs/architecture/README.md` and applicable ADRs. Preserve approved V1 behavior unless the change fixes a verified defect or implements an explicitly accepted requirement.

## Development environment

Requires Node.js `>=22.19.0`, npm and a modern WebGL-capable browser.

```bash
npm install
npm run dev
```

Before proposing a code change, run:

```bash
npm run check
npm run build
```

Record actual validation evidence and limitations. Never report PASS for checks that were not executed. Material UI/3D changes also require manual visual/functional QA; CI is supporting evidence rather than visual approval.

## Change workflow

Use a focused branch, keep commits small and traceable, and avoid unrelated refactors. Do not merge, release, publish or deploy without the required review and explicit authorization.

New dependencies require justification, maintenance/security consideration and license compatibility review. Material architecture, hosting, security, data, integration or packaging decisions require an ADR before implementation.

## Pull requests

A PR should state:

- what changed and why;
- validation actually performed and environment where relevant;
- known limitations, risks or technical debt;
- documentation impact;
- architecture/security/privacy implications;
- release/deployment impact.

Do not treat a green build as sufficient evidence for 3D behavior that was not exercised.

## Documentation

Documentation is part of the change. Audit affected canonical surfaces instead of creating duplicate Markdown narratives. `docs/CURRENT-STATE.md` is the canonical evidence/status checkpoint; operations, architecture, security and ADRs own their respective concerns.

## Security

Do not include secrets, private/proprietary models, sensitive personal data or exploitable vulnerability details in commits or public issues. Follow `SECURITY.md` for vulnerability handling.

## Licensing

The current `LICENSE` is intentionally unchanged. Do not infer permissions from repository access/visibility, and do not modify licensing terms as collateral work. Any licensing change requires explicit authorization from Luis Salamanca.
