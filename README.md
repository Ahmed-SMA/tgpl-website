# TGPL Website — Green Interactive Rebuild

A from-scratch static website concept for **Techno Guild Pakistan (Private) Limited**.

## Current visual direction

- Approved evergreen, deep-green, signal-green, cool-grey and almond-cream palette
- Equipment-led editorial interface based on the supplied industrial moodboard
- Oversized “Powering Progress” hero typography with corrected line spacing and responsive scaling
- Hyper-detailed procedural Three.js generator prepared for replacement by future GLB/GLTF models
- Powder-coated canopy materials, raised livery, controls, louvers, fan, hardware, lifting rail and exhaust geometry
- Official supplied TGPL identity used in the header, footer, favicon and generator detailing
- Animated selected-clientele and technology-partner logo rails
- Responsive multi-page architecture
- CSS and JavaScript motion without a framework
- GitHub Pages-ready deployment workflow
- Existing TGPL business information retained and reorganised for clarity

## Pages

- Home
- About
- Services
- Six service-detail pages
- Projects / capabilities
- Contact / quotation inquiry

## Brand and logo assets

- `assets/brand/tgpl-logo-horizontal.webp` — header lockup assembled from the supplied artwork
- `assets/brand/tgpl-logo-full.webp` — full supplied vertical identity for the footer
- `assets/brand/tgpl-mark.webp` — TGPL four-panel mark
- `assets/brand/tgpl-mark-192.png` and `tgpl-mark-512.png` — application icons
- `assets/clients/` — optimised selected-clientele assets
- `assets/partners/` — optimised equipment and technology partner assets

## 3D hero files

- `assets/generator3d-v2.js` — current hyper-detailed procedural generator, lighting and controls
- `assets/generator-fallback-v2.webp` — transparent static fallback derived from the supplied TGPL canopy reference
- `assets/source/tgpl-generator-reference.png` — supplied generator livery reference board
- `assets/generator3d.js` — archived first procedural version retained for comparison

The viewer currently loads Three.js and OrbitControls from public CDNs. A future production pass can self-host these files or migrate the viewer to a bundled module build. The current model can later be replaced by approved `.glb` or `.gltf` assets without changing the hero layout.

## Local preview

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Deployment

The included GitHub Actions workflow publishes the site to GitHub Pages whenever changes are pushed to `main`.

Before production launch:

1. Add approved GLB/GLTF equipment models as they become available.
2. Add verified project photography and approved case-study details.
3. Replace provisional capability statements with verified project figures.
4. Connect the inquiry form to a production endpoint or CRM.
5. Review legal company details before pointing `tgplpakistan.com` to the new build.
