# Contribuir a Core Asset Lab

Gracias por ayudar a mejorar Core Asset Lab.

## Entorno

Requiere Node.js `>=22.19.0`, npm y un navegador moderno compatible con WebGL.

```bash
npm ci
npm run dev
```

Antes de proponer cambios de código:

```bash
npm run check
npm run build
```

Cuando el cambio afecte la interfaz o el renderizado 3D, valida también el comportamiento relevante en un navegador compatible.

## Pull Requests

Mantén cada PR enfocado y describe qué cambia, cómo fue validado y cualquier limitación pública relevante. No incluyas secretos, credenciales, datos personales, modelos confidenciales/propietarios ni información interna del proyecto.

Las dependencias nuevas deben ser compatibles con la licencia y el modelo de seguridad del proyecto.

## Documentación

Actualiza únicamente la documentación pública necesaria para que las personas puedan usar, verificar o contribuir al software. No publiques notas de trabajo, conversaciones, razonamiento interno, planes privados ni material confidencial.

## Comunidad y seguridad

Usa GitHub Issues para bugs reproducibles y propuestas públicas. No adjuntes archivos o datos confidenciales, propietarios, personales o sensibles.

Las vulnerabilidades deben reportarse mediante el mecanismo privado indicado en `SECURITY.md`; no publiques detalles explotables en Issues.

## Licencia

Las contribuciones y el uso del proyecto se rigen por `LICENSE` (PolyForm Noncommercial License 1.0.0). El acceso al repositorio no concede permisos adicionales.
