# Nori — Portafolio Ejecutivo (NortDev)

Sitio estático independiente del producto Nori. Presenta el portafolio ejecutivo del proyecto con la estética del dashboard de Nori (meta-portafolio).

## Contenido

- Portada, resumen ejecutivo, descripción del software
- Problemática, objetivos y valor agregado
- Requerimientos funcionales / no funcionales e historias de usuario
- Desarrollo, tecnologías y módulos
- Pruebas de usabilidad y conclusiones
- Anexo EDT (árbol + imagen)

## Desarrollo

```bash
cd Nori_Portafolio
npm install
npm run dev
```

Abre http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

## Capturas

Para agregar capturas del producto, reemplaza el placeholder en la sección «Desarrollo e implementación» en `src/pages/PortfolioPage.tsx`, o añade imágenes en `public/` y referéncialas desde el componente.

## Relación con Nori

| Proyecto | Rol |
|----------|-----|
| `nori/` | Frontend del producto |
| `nori-demo/` | Backend microservicios |
| `Nori_Portafolio/` | Documentación ejecutiva (este repo) |
