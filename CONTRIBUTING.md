# Contributing to Core Asset Lab

Thank you for helping improve Core Asset Lab.

## Before changing code

Read `AGENTS.md`, `docs/CURRENT-STATE.md`, `docs/architecture/README.md` and applicable ADRs. Preserve approved V1 behavior unless the change fixes a verified defect or implements an explicitly accepted requirement.

## Development environment

Requires Node.js `>=22.19.0`, npm and a modern WebGL-capable browser.

```bash
npm ci
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

## Community and reporting

Use GitHub's collaboration features as they are enabled: Issues for reproducible bugs and feature proposals, Discussions for questions/ideas, and Pull Requests for contributions. Bugs may also be reported to `bugs@luguisaca.com`; general LUGUISACA contact is `contacto@luguisaca.com`.

A useful bug report includes the affected version/commit, environment, model characteristics where safe to disclose, reproduction steps, expected behavior and observed behavior. Do not attach confidential, proprietary, personal or otherwise sensitive files/data to public reports.

## Security

Do not include secrets, private/proprietary models, sensitive personal data or exploitable vulnerability details in commits or public issues. Follow `SECURITY.md` for vulnerability handling and use GitHub private vulnerability reporting / Security Advisories when that mechanism is enabled.

## Licensing

Contributions and use of the project are governed by the repository `LICENSE` (PolyForm Noncommercial License 1.0.0). Do not infer additional permissions from repository access/visibility. Licensing changes require explicit authorization from Luis Salamanca.
