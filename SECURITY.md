# Security

## Current security model

Core Asset Lab is currently a static, browser-side application with no application backend. User-selected GLB/GLTF files are read by the browser runtime. The current model-loading flow does not intentionally upload selected model contents.

This architecture reduces some server-side exposure but is not a claim that the application is inherently secure. GLB/GLTF files and third-party dependencies are untrusted input and supply-chain boundaries respectively.

## Sensitive information

Never commit credentials, access tokens, private keys, recovery codes, proprietary model files, sensitive personal information or production secrets. The current application does not require runtime secrets.

## Model safety boundary

Treat every imported model as untrusted. Do not weaken browser security controls to load a model. Files are currently limited by the UI loader to GLB/GLTF extensions and a maximum size of 100 MB; these checks are usability/safety guards, not a complete malicious-file defense.

## Dependencies

Astro, Three.js and development dependencies are part of the supply-chain boundary. Dependency changes require justification and review. Dependency/security auditing is required before a standalone release is declared validated.

## Reporting a vulnerability

Do not publish exploitable vulnerability details, credentials or sensitive proof material in a public issue. Until a dedicated private vulnerability-reporting channel is configured for this repository, contact the maintainers privately through an established LUGUISACA contact channel and provide the affected version/commit, reproduction conditions, impact and a minimal proof where safe.

A dedicated repository reporting mechanism should be configured before a formal public release.

## Future architecture

Adding a backend, authentication, persistent storage, remote model processing, third-party uploads, desktop privileges or privileged integrations requires a new threat-model review and an architectural decision before implementation.

## Validation status

Repository migration integrity and static independence have been reviewed. Clean dependency installation, automated checks/build, dependency audit and standalone functional QA are still required. See `docs/CURRENT-STATE.md`; do not infer release security from repository visibility.