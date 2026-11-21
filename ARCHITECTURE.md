# Technical architecture

## Current prototype
- React SPA with local sample data.
- ASP.NET Core 8 API starter with health endpoint only.

## Planned production shape
- React frontend
- ASP.NET Core Web API
- SQL Server + Entity Framework Core
- Import pipeline for CSV/XLSX
- Domain services for inventory calculations
- AI explanation service behind an interface, so the model provider can change
- Authentication and role-based access
- Audit log for imports, recommendations, and approvals

## Core entities (draft)
- Company
- User
- Warehouse
- Product
- StockSnapshot
- StockMovement
- SalesOrder
- SalesOrderLine
- Supplier
- PurchaseOrder
- Recommendation
- ImportBatch

## Trust and safety requirements
- Tenant isolation: each company can access only its own data.
- No cross-company training on customer data by default.
- Log imports and user approvals.
- AI must not invent missing quantities or silently change source data.
- Show calculation inputs and confidence/limitations.
- Human approval required before any purchasing action.
