# Security

## Current security model

Core Asset Lab is currently a static, browser-side application with no application backend. User-selected GLB/GLTF files are read by the browser runtime. The current model-loading flow does not intentionally upload selected model contents.

This architecture reduces some server-side exposure but is not a claim that the application is inherently secure. Imported assets are untrusted input and third-party packages are part of the supply-chain boundary.

## Sensitive information

Never commit credentials, access tokens, private keys, recovery codes, proprietary model files, sensitive personal information or production secrets. The current application does not require runtime secrets.

## Model/input boundary

Treat every imported model as untrusted. Do not weaken browser security controls to load a model. The current UI accepts `.glb`/`.gltf` selections up to 100 MB; extension and size checks are usability/safety guards, not a complete malicious-file defense.

A `.gltf` can reference external buffers/textures. The current selected-file object-URL flow must not be described as universal multi-file GLTF support unless that resource model is explicitly implemented and validated.

## Privacy boundary

Under the current architecture, model inspection occurs in the browser and there is no application backend upload step. Do not add remote model processing, telemetry collection, persistent storage or third-party uploads without explicit architecture/security review and user-facing disclosure.

## Dependencies and build chain

Astro, Three.js and development dependencies are supply-chain dependencies. Dependency changes require justification, maintenance/security review and license compatibility review.

Independent CI has validated installation, static/type checks, production build and built-app smoke serving. This evidence does not replace dependency vulnerability review or guarantee the absence of security defects.

The project currently lacks a committed `package-lock.json`; dependency bootstrap therefore is not yet lockfile-deterministic. Reproducible dependency installation remains a release-hardening task.

## Reporting a vulnerability

Do not publish exploitable vulnerability details, credentials or sensitive proof material in a public issue. Until a dedicated private vulnerability-reporting mechanism is configured for this repository, contact the maintainers privately through an established LUGUISACA contact channel and provide the affected version/commit, reproduction conditions, impact and a minimal proof where safe.

A dedicated repository reporting mechanism should be configured before a formal public release.

## Architecture changes requiring security review

Adding a backend, authentication, persistent storage, remote model processing, third-party uploads, analytics/telemetry collection, desktop privileges or privileged integrations changes the current trust boundary and requires an ADR/threat-model review before implementation.

## Current validation boundary

Migration integrity, static independence, automated build/smoke QA and independent Windows functional/visual acceptance have been completed for the V1 workflow described in `docs/CURRENT-STATE.md`. This is scoped QA evidence, not a security certification and not universal model/browser compatibility evidence.
