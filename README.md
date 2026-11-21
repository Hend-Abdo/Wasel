# Wasel — Distribution Intelligence Platform

Wasel is an early-stage AI-assisted operations platform for Egyptian wholesale and distribution companies.

## What this first milestone contains
- React + Vite frontend prototype with interactive navigation and realistic sample data.
- ASP.NET Core API starter structure (not yet connected to a database).
- Product brief, MVP scope, architecture notes, and a Claude handoff guide.
- Arabic-first RTL interface with an English/Arabic-friendly structure.

## Important
This is a working frontend prototype using sample data. It is **not** connected to a real company, ERP, database, or AI model yet. Do not use its sample numbers for business decisions.

## Run the frontend
Requirements: Node.js 20+.

```bash
cd frontend
npm install
npm run dev
```

Open the local URL printed by Vite.

## Backend
The API starter targets .NET 8. Install the .NET 8 SDK, then:

```bash
cd backend/Wasel.Api
dotnet restore
dotnet run
```

The current API starter exposes a health endpoint only. Database, authentication, and integrations are planned, not implemented.

## Product direction
Start with a focused workflow: inventory risk and demand visibility for distributors. Expand only after validating workflows with real operators.
