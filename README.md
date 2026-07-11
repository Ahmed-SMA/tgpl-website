# TGPL Website

Rebuilt corporate website for TechnoGuild (Private) Limited.

## Current design

- Dark evergreen editorial hero with oversized **Powering Progress** typography
- Original illustrated generator, solar array and hybrid battery system
- Hover motion, floating labels, scroll reveals and pointer parallax
- Responsive mobile navigation and layout
- Integrated services, capabilities, clientele, partners and quotation sections
- GitHub Pages deployment through Actions

## Brand asset handling

The supplied TGPL identity is preserved in its complete form. The mark, `TechnoGuild` wording and `(Private) Limited` wording are treated as one logo and are not cropped, rearranged or recreated. The same complete asset is used in the header, footer and favicon.

The supplied Chakor Ventures and Marriott identities are also displayed in their complete supplied proportions with `object-fit: contain`, preventing cropping.

## Deployment

Every push to `main` triggers `.github/workflows/pages.yml`, reconstructs the static page from the checked-in deployment parts and publishes it to GitHub Pages.
