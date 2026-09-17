# Core Asset Lab — Operations and Distribution

This is the canonical operational guide for installing, running, validating and packaging the current application. Distribution ideas are listed separately from supported paths so planned work is never presented as shipped functionality.

## Supported path: source/local

### Requirements

- Git for repository cloning;
- Node.js `>=22.19.0`;
- npm;
- modern WebGL-capable browser.

Node 22.19.0 is the automated CI baseline. Windows manual QA also passed with Node 24.19.0 and npm 11.7.0.

### Install and run

While V1 remains on its validation branch:

```bash
git clone https://github.com/Luguisaca/core-asset-lab.git
cd core-asset-lab
git switch core-asset-lab-v1
npm ci
npm run dev
```

Astro prints the local development URL. Open it and load a `.glb` or `.gltf` file through the picker or drag/drop surface.

`npm ci` is the normal clean-clone path and installs the exact dependency graph committed in `package-lock.json`. Use `npm install` only when intentionally changing dependencies or regenerating/updating the lockfile, then review and validate that change before committing it.

`npm run check` is not required merely to use the development server. It is a QA/development command that performs Astro/TypeScript checks.

The loader rejects unsupported filename extensions and selections above 100 MB. Selected model contents are processed in the browser under the current architecture.

### GLTF companion-resource caveat

A `.glb` normally packages its resources into one binary asset. A `.gltf` may reference separate `.bin` files and textures. The current local picker creates an object URL for the selected file; therefore documentation must not claim universal support for every external-resource/multi-file GLTF layout until that workflow is explicitly tested and, if necessary, implemented.

## Validation and production-style local build

```bash
npm ci
npm run check
npm run build
npm run preview
```

`npm run build` runs `astro check` before `astro build` and produces the static `dist/` application. Running `check` separately is useful when collecting explicit validation evidence.

The automated QA gate uses Node 22.19.0 and performs locked dependency installation with `npm ci`, Astro check, production build and an HTTP smoke test against the built `dist/` application. Run #18 (`35180417863`) validated this deterministic path successfully.

A release/checkpoint must record commands actually executed, environment, results and any manual functional/visual QA. Automated checks support but do not replace manual approval for material UI/3D behavior.

## Dependency reproducibility

`package-lock.json` is committed and is the dependency source of truth for reproducible clean installations. CI and clean local validation use `npm ci`; this fails rather than silently rewriting the lockfile when `package.json` and the lockfile are inconsistent.

The validated V1 path is therefore:

```text
package.json + package-lock.json
        ↓
      npm ci
        ↓
   astro check
        ↓
 production build
        ↓
 HTTP smoke test
```

Do not copy a lockfile from `luguisaca.com` or another project. Dependency updates must originate in this independent repository and be reviewed with the resulting lockfile diff.

## Static artifact

Astro's `dist/` directory is the canonical production build artifact. It can be served by a static HTTP server; no application backend is required by the current runtime architecture.

The static-build path is validated, but no official public Core Asset Lab hosting target has yet been released from this repository.

## Official LUGUISACA demo — planned

The intended public convenience path is a demo hosted under `luguisaca.com` at a route still to be defined. That website will consume a validated Core Asset Lab distribution; the projects remain independently governed and developed.

Do not hard-code or document a placeholder route as canonical before it is selected, integrated and validated in the website project.

## Docker/container — planned, not supported yet

The intended container shape is a reproducible multi-stage build followed by a minimal static web server image. Containerization must not introduce an application backend merely for packaging.

Before advertising Docker support, validate the container definition, ignore rules, image build, runtime, static asset behavior and security/update model. Add Compose only if it improves actual usage.

## Desktop/downloadable application — planned, decision required

A downloadable desktop application/installer is a desired user-friendly path, not current V1 functionality. A future ADR must evaluate a lightweight desktop wrapper and alternatives against package size, security boundary, update/signing model, WebGL/file access, build complexity and maintenance burden.

Do not add Electron, Tauri, Rust or another desktop dependency without an accepted ADR.

## Versioned releases — planned

Future releases should identify a source commit/tag and may include validated static artifacts, desktop packages when implemented, checksums and release notes. Repository commits alone are not release evidence.

## Troubleshooting

Diagnose the layer that actually failed:

- clone/install and Node/npm compatibility;
- lockfile/package manifest consistency;
- Astro development server;
- Astro/TypeScript check;
- production build;
- static HTTP serving;
- browser/WebGL runtime;
- model-specific parsing/resources;
- future hosting/container/desktop layers.

Do not attribute one layer's state to another without evidence.

## Security and privacy

See `SECURITY.md`. Any server-side processing, uploads, authentication, persistence, telemetry collection or privileged desktop integration changes the current trust boundary and requires architecture/security review and an accepted decision before implementation.
