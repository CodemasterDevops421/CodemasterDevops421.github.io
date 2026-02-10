# Chaitanya Portfolio

Production-grade portfolio built with Next.js 14 App Router, TypeScript, Tailwind CSS, and shadcn/ui.

## Features
- High-conversion hero and portfolio sections tailored for senior DevOps consulting opportunities.
- Secure contact workflow using Server Actions + webhook route with shared schema/service validation, honeypot spam control, timing-safe secret verification, and rate limiting.
- Structured logging (Pino), health endpoint, CSP headers, and environment-driven configuration.
- Jest coverage (including webhook route behavior tests), CI workflow, Docker image, and Make targets for repeatable delivery.

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
npm run lint
npm run test
```

## Docker
```bash
docker compose up --build
```

## Make targets
```bash
make install
make dev
make lint
make test
make docker-build
make docker-run
```

## Environment variables
- `NEXT_PUBLIC_SITE_URL`: base URL used by server actions.
- `LOG_LEVEL`: logger verbosity (`debug`, `info`, `warn`, `error`).
- `CONTACT_WEBHOOK_SECRET`: shared secret for `/api/webhooks/contact` route (required in production).
