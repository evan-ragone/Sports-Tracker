# Dev Setup

## Requirements
- Node 20+
- Docker Desktop
- Python 3.11 (for scripts optional)
- Git

## Backend Setup (NestJS)
1. cd backend-api
2. npm install
3. Create `.env` using `.env.example`
4. Start dev server:

## Database (Postgres via Docker)
From project root:

Database runs on: `postgres://postgres:postgres@localhost:5432/sportsdb`

## Object Storage (MinIO)
Also runs from docker compose:
- http://localhost:9000
- access: `minioadmin`
- secret: `minioadmin`

## Mobile App (React Native / Expo)

## Linting & Formatting
Backend:
