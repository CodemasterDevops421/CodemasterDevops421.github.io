# Chaitanya Portfolio

Production-ready portfolio built with Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui.

## Features
- Sections for hero, about, experience, projects, skills, and contact with validated data.
- Dark/light theme toggle with persistent preferences.
- Hardened Next.js configuration with CSP headers and health check endpoint.
- Jest coverage, CI pipeline, Docker image, and Make targets for reproducible ops.

## Prerequisites
- Node.js 20+
- npm 10+

## Setup
```bash
cp .env.example .env.local
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run start
```

## Testing & linting
```bash
npm run lint        # type-checks with tsc
npm run test
```

## Docker
```bash
docker compose up --build
```

## Make targets
```bash
make install   # install deps + lint + test + build
make dev       # start dev server
make test      # run unit tests
make lint      # run type-checks
make docker-build
make docker-run
```

## CI/CD
GitHub Actions workflow (`.github/workflows/ci.yml`) executes install, type-check, test, and build on push & PR.

## Security & Ops
- Security headers via `next.config.mjs`.
- Structured logging with Pino (`lib/logger.ts`).
- `/api/health` endpoint for uptime checks.
- Environment-driven configuration via `.env.local`.
