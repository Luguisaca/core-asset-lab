# Core Asset Lab — Operations and Distribution

This document is the canonical operational guide for the current application and the status of planned distribution paths.

## Current supported path: source/local

Prerequisite: Node.js >= 22.12.0 and npm.

```bash
git clone https://github.com/Luguisaca/core-asset-lab.git
cd core-asset-lab
npm install
npm run dev
```

Astro prints the local development URL. Open it in a modern WebGL-capable browser and load a `.glb` or `.gltf` file through the file picker or drag/drop surface.

The current loader rejects unsupported filename extensions and files above 100 MB. Selected model contents are processed in the browser by the current architecture.

## Validation/build

```bash
npm run check
npm run build
npm run preview
```

`npm run build` already runs `astro check` before `astro build`; running `check` separately is useful when collecting explicit validation evidence. The output is a static `dist/` application.

A release or checkpoint must record which commands were actually executed, their result, environment assumptions and any manual functional/visual QA performed.

## Static hosting

The architecture can produce static files, but this repository does not yet define or validate an official hosted deployment target. Hosting configuration must not be copied from `luguisaca.com` implicitly. Selecting an official hosting/release path is an architectural/operational decision.

## Docker/container — planned, not yet supported

A container distribution is a planned convenience path. The intended shape is a reproducible multi-stage build followed by a minimal static web server image, with no application backend added merely for packaging.

Before this path is advertised as supported, the repository must contain and validate the container definition, ignore rules, local run procedure, image build, runtime behavior and security/update model. A Compose file should be added only if it improves actual usage rather than as decoration.

## Desktop/downloadable application — evaluation required

A downloadable desktop application/installer is a planned user-friendly path, not a current feature. The project should evaluate lightweight wrappers such as Tauri and alternatives before selecting one. The decision must consider package size, security boundary, update/signing model, WebGL/file access behavior, build complexity and maintenance burden.

Do not add Electron, Tauri, Rust or another desktop dependency without an accepted ADR.

## Versioned releases — planned

Future releases should be reproducible and may include validated build artifacts, desktop packages when available, checksums, release notes and an explicit source commit/tag. Release automation/CI must report actual build results; repository updates alone are not release evidence.

## CI — pending

The project intends to automate clean installation, `check` and `build` as a minimum quality gate. Until CI exists and has executed successfully, these checks remain unverified for the independent repository unless supported by separate real execution evidence.

## Troubleshooting boundaries

When diagnosing a problem, distinguish development-server behavior, generated static build behavior, browser/WebGL behavior, model-specific behavior and any future hosting/container/desktop layer. Do not attribute one layer's state to another without evidence.

## Security and privacy

See `SECURITY.md`. Any future server-side processing, uploads, authentication, persistence, telemetry collection or privileged desktop integration changes the current trust boundary and requires architecture/security review before implementation.