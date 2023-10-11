# TransTrack Backend

Backend service for the TransTrack application, built with [Supabase](https://supabase.com/).

## Getting started

```bash
# Clone the repository
git clone https://github.com/blkflower/transtrack-backend.git
cd transtrack-backend

# Install dependencies
npm ci
```

## Developing locally with Supabase

This project uses [Supabase](https://supabase.com/) for data storage and authentication. Supabase services can be run locally during development.

```bash
# Start supabase containers
npm run supabase

# Migrate database and add seed data
npm run db:migrate

# Stop supabase containers
npm run supabase:stop
```

The local Supabase services are what we should use during local development. The dashboard is available at http://localhost:54323.

## Syncing remote database

Once the database schema changes are working locally, we can sync them with the remote Supabase database.

```bash
# Run migrations against the remote database
npm run db:remote:migrate

# Add seed data to the remote database, only do this once
npm run db:remote:seed
```