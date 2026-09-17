# Architecture

## Purpose

Core Asset Lab is a browser-side workbench for inspecting, validating and calibrating GLB/GLTF assets. The current architecture intentionally keeps model processing on the client and keeps the application deployable as static files.

## Current system

Astro provides the static application shell and build pipeline. TypeScript implements the Lab behavior. Three.js provides WebGL rendering, GLTF loading, camera/orbit interaction, animation, helpers and post-processing.

The main page composes the Lab UI. Browser scripts coordinate local file selection/drop, scene state, rendering, inspection, diagnostics, controls, export/snapshot behavior and animation. Styles are split by shell, tools, workspace and responsive concerns.

## Data flow

1. The user selects or drops a `.glb` or `.gltf` file.
2. Browser `File` APIs create a local object URL.
3. Three.js `GLTFLoader` reads the asset in the browser.
4. The loaded scene is inspected and rendered locally.
5. UI controls mutate viewer/scene presentation state.
6. Reports/configuration/snapshots are generated from client-side state.

The current application has no backend upload step in this flow.

## Boundaries

The repository does not require LUGUISACA website pages, professional content, Core/Hero production assets, site-wide localization or Cloudflare configuration. It is not the canonical Lab for the production LUGUISACA Hero; that responsibility remains with `luguisaca.com`.

## Distribution architecture

The canonical runtime artifact is currently Astro static output. This makes several future distribution methods possible without changing the core browser-side model: static hosting, a small web-server container, or a desktop shell around the built static application.

Those possibilities are not current supported channels merely because the architecture permits them. Docker/container packaging and desktop packaging require their own accepted design decision, implementation and validation.

## Architectural constraints

- Preserve static/browser-side operation unless an ADR explicitly changes it.
- Avoid unnecessary backend or remote-processing dependencies.
- Do not upload user models implicitly.
- Preserve local-file privacy semantics in UI and documentation.
- Keep dependencies minimal and review licensing/supply-chain impact before additions.
- Material changes to hosting, remote data, desktop runtime, container distribution, authentication or persistence require an ADR.

## Validation boundary

Architecture documentation describes the intended and statically inspected system. Build/runtime support claims are tracked separately in `docs/CURRENT-STATE.md` and require observed evidence.
