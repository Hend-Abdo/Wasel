# Wasel — Distribution Intelligence Platform

Wasel is an early-stage AI-assisted operations platform for Egyptian wholesale and distribution companies.

## Current repository structure

- `src/`: React + Vite frontend source.
- `backend/Wasel.Api/`: ASP.NET Core 8 Web API starter.
- `PRODUCT_BRIEF.md`: MVP scope and product direction.
- `ARCHITECTURE.md`: current and planned technical architecture.
- `CLAUDE.md`: product and implementation rules for coding assistants.

## Current milestone

The frontend is a prototype using clearly labelled sample data. The API currently exposes a health endpoint only. The project is **not** connected to a real company, ERP, database, or AI model. Do not use sample figures for business decisions.

## Run the frontend

Requirements: Node.js 20+.

From the repository root:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Run the backend

Requirements: .NET 8 SDK.

From the repository root:

```bash
cd backend/Wasel.Api
dotnet restore
dotnet run
```

The health endpoint is available at `/api/health`. Database, authentication, file import, and integrations are planned, not implemented.

## Product direction

Start with a focused workflow: inventory risk and demand visibility for distributors. Expand only after validating the workflow with real operators.
