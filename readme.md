# Pitaka Backend

Backend service for the Pitaka application, built with [Supabase](https://supabase.com/).

## Getting started

```bash
# Clone the repository
git clone https://github.com/blkflower/pitaka-backend.git
cd pitaka-backend

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

## Starting the server

Install the dependencies of the NestJS server locally and run the server in order to be able to use the APIs

```bash
# Install all dependencies
npm i

# Run the server locally
npm run start-dev
```
We can now call our server APIs using the base url of `localhost:3000/`

## Swagger documentation

When our local server is up, when can then access our API documentation using the url `localhost:3000/api`
