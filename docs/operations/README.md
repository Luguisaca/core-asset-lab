# Core Asset Lab — Operaciones y distribución

Esta es la guía operativa canónica para instalar, ejecutar, validar y empaquetar la aplicación actual. Las ideas de distribución se separan de los canales soportados para que el trabajo planeado nunca se presente como funcionalidad ya publicada.

## Canal soportado: código fuente/local

### Requisitos

- Git para clonar el repositorio;
- Node.js `>=22.19.0`;
- npm;
- navegador moderno compatible con WebGL.

Node 22.19.0 es la base automatizada de CI. El QA manual en Windows también pasó con Node 24.19.0 y npm 11.7.0.

### Instalación y ejecución

```bash
git clone https://github.com/Luguisaca/core-asset-lab.git
cd core-asset-lab
npm ci
npm run dev
```

Astro muestra la URL local de desarrollo. Ábrela y carga un archivo `.glb` o `.gltf` mediante el selector o arrastrándolo al área correspondiente.

`npm ci` es el procedimiento normal para un clon limpio e instala exactamente el grafo de dependencias registrado en `package-lock.json`. Usa `npm install` únicamente cuando se cambien intencionalmente dependencias o se regenere/actualice el lockfile; revisa y valida ese cambio antes del commit.

`npm run check` no es necesario simplemente para utilizar el servidor de desarrollo. Es un comando de QA/desarrollo que ejecuta comprobaciones Astro/TypeScript.

El cargador rechaza extensiones no soportadas y archivos superiores a 100 MB. Con la arquitectura actual, el contenido de los modelos seleccionados se procesa en el navegador.

### Consideración sobre recursos complementarios GLTF

Un `.glb` normalmente empaqueta sus recursos en un único archivo binario. Un `.gltf` puede referenciar archivos `.bin` y texturas separados. El selector local actual crea una URL de objeto para el archivo seleccionado; por tanto, la documentación no debe afirmar soporte universal para todos los esquemas GLTF multiarchivo o con recursos externos hasta que ese flujo sea probado explícitamente y, si es necesario, implementado.

## Validación y build local similar a producción

```bash
npm ci
npm run check
npm run build
npm run preview
```

`npm run build` ejecuta `astro check` antes de `astro build` y produce la aplicación estática en `dist/`. Ejecutar `check` por separado es útil para recopilar evidencia explícita de validación.

El gate automatizado de QA utiliza Node 22.19.0 y realiza instalación bloqueada con `npm ci`, Astro check, build de producción y un smoke test HTTP sobre la aplicación `dist/`. El run #18 (`35180417863`) validó exitosamente este camino determinista.

Un release o checkpoint debe registrar comandos realmente ejecutados, entorno, resultados y cualquier QA funcional/visual manual. Las comprobaciones automatizadas apoyan, pero no reemplazan, la aprobación manual de cambios importantes de UI/3D.

## Reproducibilidad de dependencias

`package-lock.json` está incluido y es la fuente de verdad para instalaciones limpias reproducibles. CI y la validación local limpia utilizan `npm ci`; este comando falla en lugar de reescribir silenciosamente el lockfile cuando `package.json` y el lockfile son inconsistentes.

El camino V1 validado es:

```text
package.json + package-lock.json
        ↓
      npm ci
        ↓
   astro check
        ↓
 build de producción
        ↓
 HTTP smoke test
```

No copies un lockfile desde `luguisaca.com` ni desde otro proyecto. Las actualizaciones de dependencias deben originarse en este repositorio independiente y revisarse junto con el diff resultante del lockfile.

## Artefacto estático

El directorio `dist/` de Astro es el artefacto canónico del build de producción. Puede servirse mediante un servidor HTTP estático; la arquitectura actual no requiere backend de aplicación.

El build estático está validado, pero todavía no se ha publicado desde este repositorio un destino oficial de hosting público para Core Asset Lab.

## Demo oficial de LUGUISACA — planeada

El canal público previsto es una demo alojada bajo `luguisaca.com` en una ruta aún por definir. El sitio consumirá una distribución validada de Core Asset Lab; ambos proyectos seguirán gobernados y desarrollados de forma independiente.

No fijes ni documentes una ruta provisional como canónica antes de seleccionarla, integrarla y validarla en el proyecto web.

## Docker/contenedor — planeado, aún no soportado

La forma prevista del contenedor es un build reproducible multietapa seguido de una imagen mínima de servidor web estático. La contenerización no debe introducir un backend de aplicación únicamente para empaquetar.

Antes de anunciar soporte Docker, valida la definición del contenedor, reglas de exclusión, construcción de imagen, runtime, comportamiento de recursos estáticos y modelo de seguridad/actualización. Añade Compose solo si mejora un uso real.

## Aplicación de escritorio/descargable — planeada, requiere decisión

Una aplicación o instalador de escritorio descargable es un canal amigable deseado, no funcionalidad V1 actual. Un ADR futuro deberá evaluar un wrapper de escritorio liviano y sus alternativas considerando tamaño del paquete, límite de seguridad, modelo de actualización/firma, WebGL/acceso a archivos, complejidad del build y mantenimiento.

No añadas Electron, Tauri, Rust ni otra dependencia de escritorio sin un ADR aceptado.

## Releases versionados — planeados

Los releases futuros deben identificar un commit/tag de origen y podrán incluir artefactos estáticos validados, paquetes de escritorio cuando existan, checksums y notas de release. Los commits del repositorio por sí solos no constituyen evidencia de release.

## Solución de problemas

Diagnostica la capa que realmente falló:

- clonación/instalación y compatibilidad Node/npm;
- consistencia entre lockfile y manifiesto del paquete;
- servidor de desarrollo Astro;
- Astro/TypeScript check;
- build de producción;
- servicio HTTP estático;
- runtime del navegador/WebGL;
- parsing o recursos específicos del modelo;
- futuras capas de hosting/contenedor/escritorio.

No atribuyas el estado de una capa a otra sin evidencia.

## Seguridad y privacidad

Consulta `SECURITY.md`. Cualquier procesamiento del lado del servidor, cargas, autenticación, persistencia, recolección de telemetría o integración de escritorio privilegiada cambia el límite de confianza actual y requiere revisión de arquitectura/seguridad y una decisión aceptada antes de implementarse.
