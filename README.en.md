# Core Asset Lab

**Language:** English · [Español (Colombia)](README.md)

Browser-side laboratory for loading, inspecting, validating and calibrating local GLB/GLTF assets.

## Capabilities

Core Asset Lab can load `.glb` and `.gltf` files, inspect scenes, meshes and materials, play embedded animations, use diagnostic helpers, adjust presentation/rendering and generate snapshots or reports in the browser.

Selected models are processed locally by the browser. The current application is static and does not require an application backend for the inspection flow.

## Requirements

- Node.js `>=22.19.0`
- npm
- modern WebGL-capable browser
- Git, when cloning the repository

## Run locally

```bash
git clone https://github.com/Luguisaca/core-asset-lab.git
cd core-asset-lab
npm ci
npm run dev
```

To validate and build:

```bash
npm run check
npm run build
npm run preview
```

Production output is generated in `dist/`.

## Formats

The UI currently accepts `.glb` and `.gltf` selections up to 100 MB. GLTF files that depend on external buffers, textures or other files may require additional handling; universal support for every multi-file layout is not assumed.

## Privacy and security

Selected model contents are not intentionally uploaded to an application backend. Treat imported models as untrusted input and do not publicly attach confidential, proprietary, personal or sensitive files or information.

See `SECURITY.md` for vulnerability reporting. Ordinary bugs may be reported through GitHub Issues.

## Public documentation

- `docs/architecture/README.md` — runtime architecture and trust boundaries.
- `docs/operations/README.md` — installation, validation and build.
- `SECURITY.md` — security posture and vulnerability reporting.
- `CONTRIBUTING.md` — contribution guidance.
- `LICENSE` — license terms.

## License

Core Asset Lab is available under the **PolyForm Noncommercial License 1.0.0**. `LICENSE` contains the controlling terms. Repository access does not grant rights beyond those terms.
