# Chaitanya — 3D Portfolio (Vite + React + R3F)   
###

## Scripts
- `npm install`
- `npm start`  ← (alias for `vite` in dev)
- `npm run build`
- `npm run serve` (preview the production build on localhost)

### Troubleshooting
If you see `SyntaxError: /: Unexpected token (1:0)`, you probably ran Node directly on a JSX/ESM file. Always use the scripts above (Vite handles JSX/Tailwind).

## Deploy (GitHub Pages)
- Default branch: `main`
- Settings → Pages → Source: GitHub Actions
- Push to `main`; workflow publishes `/dist` automatically