# Contributing to Core Asset Lab

Thank you for helping improve Core Asset Lab.

## Before changing code

Read `AGENTS.md`, `docs/CURRENT-STATE.md`, the architecture documentation and applicable ADRs. Preserve approved V1 behavior unless the change fixes a verified defect or an explicitly accepted requirement.

## Development environment

Requires Node.js >= 22.12.0.

```bash
npm install
npm run dev
```

Before proposing a code change, run:

```bash
npm run check
npm run build
```

Record actual validation evidence and any limitations. Do not report a PASS for checks that were not executed.

## Change workflow

Use a focused branch, keep commits small and traceable, and avoid unrelated refactors. New dependencies require justification, maintenance/security consideration and license compatibility review. Material architecture, hosting, security, data, integration or packaging decisions require an ADR before implementation.

UI changes require responsive review and, when material, manual visual QA in addition to automated checks.

## Documentation

Documentation is part of the change. Audit the canonical surfaces affected by the work rather than creating duplicate Markdown narratives. Update `docs/CURRENT-STATE.md` at meaningful consolidation/release checkpoints.

## Security

Do not include secrets, private/proprietary models, sensitive personal data or exploit details in commits or public issues. Follow `SECURITY.md` for vulnerability handling.

## Licensing

The independent project's licensing decision is currently pending. Do not assume that repository visibility grants reuse rights beyond the current `LICENSE`, and do not change licensing terms as part of an unrelated contribution.

## Pull requests

A PR should state what changed, why, validation performed, known limitations/risks, documentation impact and any architectural/security implications. Merge only after required review and evidence are complete.