# finsight-frontend

Financial Reconciliation Platform — React Frontend

## Folder Structure

```
src/
├── components/
│   ├── ui/         # Primitive UI components (Button, Input, Badge...)
│   ├── layout/     # Sidebar, Header
│   └── common/     # Shared composite components
├── features/       # Feature modules (reconciliation, settlements...)
├── pages/          # Route-level page components
├── layouts/        # Page layout wrappers
├── routes/         # AppRouter, ProtectedRoute
├── services/api/   # Axios instance, endpoint constants
├── hooks/          # Custom React hooks
├── context/        # React context providers
├── schemas/        # Zod validation schemas
├── types/          # TypeScript types
├── utils/          # Pure utility functions
├── constants/      # App-wide constants
└── styles/         # Global CSS
```

## Prerequisites

- Node.js 20+
- npm 10+
- finsight-backend running on port 5000

## Installation

```bash
npm install
```

## Environment Setup

```bash
cp .env.example .env
```

| Variable           | Description              |
|--------------------|--------------------------|
| VITE_API_BASE_URL  | Backend API base URL     |

## Development

```bash
npm run dev
```

App runs at http://localhost:5173

## Build

```bash
npm run build       # production build to dist/
npm run preview     # preview production build locally
```

## Code Quality

```bash
npm run lint        # ESLint
npm run type-check  # TypeScript strict check
```

## API Integration

All HTTP requests go through `src/services/api/axios.ts`.

- Base URL configured via `VITE_API_BASE_URL`
- Auth token attached automatically via request interceptor
- 401 responses redirect to `/login`
- Vite dev server proxies `/api` to `http://localhost:5000`

## Architecture Notes

- TanStack Query manages all server state
- React Hook Form + Zod handles all form validation
- Protected routes redirect unauthenticated users to `/login`
- Auth context and real login flow implemented in Phase 2
