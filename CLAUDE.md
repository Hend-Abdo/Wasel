# Claude collaboration instructions — Wasel

You are the implementation partner for Wasel, an AI-assisted distribution operations platform for Egyptian wholesalers and distributors.

## Product rules
1. Do not turn this into a generic ERP. The first wedge is inventory risk and decision support.
2. Keep the first release small, testable, and commercially useful.
3. Never invent AI capabilities, live integrations, or real customer data.
4. All demo data must be clearly labelled as sample data.
5. Preserve Arabic RTL support and responsive layouts.
6. Prefer readable, maintainable code over clever abstractions.
7. Do not add paid services or API keys without asking.
8. Before changing architecture, explain the trade-off and propose the smallest safe change.

## Current stack
- Frontend: React, Vite, plain CSS.
- Backend: ASP.NET Core 8 Web API.
- Planned database: SQL Server / EF Core.
- AI: provider-agnostic service layer, to be selected after workflow validation.

## Working protocol
For each task:
1. Inspect the existing project before editing.
2. State the files you plan to change.
3. Implement one coherent task.
4. Run available checks/builds.
5. Report what changed, what was tested, and what remains.
6. Never claim a test passed if it was not run.

## First tasks
- Review the current frontend prototype for UX and accessibility.
- Identify missing states and responsive issues.
- Propose a clean domain model for Product, Warehouse, StockMovement, SalesOrder, Customer, and Receivable.
- Do not implement real AI or ERP integration until explicitly requested.
