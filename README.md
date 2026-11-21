# Wasel — Distribution Intelligence Platform

Wasel is an early-stage AI-assisted operations platform for Egyptian wholesale and distribution companies.

## Current repository structure

- `index.html`, `package.json`, `vite.config.js`: React + Vite frontend entry and configuration (repository root).
- `src/`: React frontend source.
- `backend/Wasel.Api/`: ASP.NET Core 8 Web API starter.
- `PRODUCT_BRIEF.md`: MVP scope and product direction.
- `ARCHITECTURE.md`: current and planned technical architecture.
- `CLAUDE.md`: product and implementation rules for coding assistants.
- `CLAUDE_FIRST_TASK.md`: initial review brief for coding assistants.

## Current milestone

The frontend is a prototype using clearly labelled sample data; it does not call the API yet. The API currently exposes a health endpoint only. The project is **not** connected to a real company, ERP, database, or AI model. Do not use sample figures for business decisions.

## Run the frontend

Requirements: Node.js 20.19+ or 22.12+ (required by Vite 8).

From the repository root:

```bash
npm install
npm run dev
```

Open http://localhost:5173. The dev server is pinned to this port because the API's CORS policy only allows this origin; if the port is already in use, Vite exits with an error instead of switching ports.

To check that the production build works:

```bash
npm run build
```

## Run the backend

Requirements: .NET 8 SDK.

From the repository root:

```bash
cd backend/Wasel.Api
dotnet restore
dotnet run
```

Use the URL printed in the console. The health endpoint is available at `/api/health`. Swagger UI is only enabled when `ASPNETCORE_ENVIRONMENT` is `Development`; the project has no `launchSettings.json`, so set it yourself if you need Swagger, for example `ASPNETCORE_ENVIRONMENT=Development dotnet run` (macOS/Linux). To check that the project compiles:

```bash
dotnet build
```

The first restore needs access to NuGet (it downloads `Swashbuckle.AspNetCore`). Database, authentication, file import, and integrations are planned, not implemented.

## Product direction

Start with a focused workflow: inventory risk and demand visibility for distributors. Expand only after validating the workflow with real operators.
