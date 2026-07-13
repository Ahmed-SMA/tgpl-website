# TGPL Website — Local Review Master

This is the current local review build for **Techno Guild Pakistan (Private) Limited**. The folder is being reviewed before any further GitHub deployment.

## Approved visual direction in this build

- Evergreen, deep-green, signal-green, cool-grey and almond-cream brand palette
- Editorial homepage hero based on the approved layout reference
- Oversized “Powering Progress” typography
- Original illustrated TGPL generator, solar array and hybrid battery composition
- Hover motion, floating labels and pointer parallax
- Responsive desktop, tablet and mobile layouts
- Animated clientele and technology-partner rails

## Exact supplied logo handling

The supplied logo files are used as complete, unaltered images:

- `assets/brand/tgpl-logo-complete.png` — complete TGPL identity used in header, footer and favicon
- `assets/clients/chakor-ventures.png` — exact supplied Chakor Ventures logo
- `assets/clients/marriott-international.png` — exact supplied Marriott International logo

All three use `object-fit: contain`; no logo is cropped, rebuilt, rearranged or masked.

## Pages

- Home
- About
- Services
- Projects / capabilities
- Contact / quotation inquiry
- Six service-detail pages

## Local preview

From this folder, run:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080/index.html`.

## Review workflow

Use this folder as the local master for the next requested changes. Deploy to the main GitHub repository only after visual approval.
