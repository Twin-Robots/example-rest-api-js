# TypeScript Express REST API

A modern REST API built with Node.js, Express, TypeScript, and Prisma.

## Prerequisites

- Node.js (v14 or higher)
- pnpm (v6 or higher)
- Docker (optional)
- PostgreSQL (if running locally)

## Setup

1. Install dependencies:
```bash
pnpm install
```

2. Create a `.env` file in the root directory with the following content:
```
PORT=3000
NODE_ENV=development
DATABASE_URL="postgresql://postgres:password@localhost:5434/postgres"
```

3. Run database migrations:
```bash
pnpm prisma migrate dev
```

## Development

To start the development server with hot-reload:
```bash
pnpm dev
```

## Building

To build the project:
```bash
pnpm build
```

## Running in Production

To start the production server:
```bash
pnpm start
```

## Docker

Build the Docker image:
```bash
docker build -t typescript-express-api .
```

Run the container:
```bash
docker run -p 3000:3000 typescript-express-api
```

For development with hot-reload:
```bash
docker run -p 3000:3000 -v $(pwd):/app typescript-express-api pnpm dev
```

Or use Docker Compose:
```bash
docker-compose up
```

## Testing

Run the test suite:
```bash
pnpm test
```

Run tests in watch mode:
```bash
pnpm test:watch
```

Generate test coverage report:
```bash
pnpm test:coverage
```

## Available Scripts

- `pnpm dev` - Start development server with hot-reload
- `pnpm build` - Build the project
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint errors automatically
- `pnpm test` - Run tests
- `pnpm test:watch` - Run tests in watch mode
- `pnpm test:coverage` - Generate test coverage report
- `pnpm prisma generate` - Generate Prisma Client
- `pnpm prisma migrate dev` - Create and apply database migrations
- `pnpm prisma studio` - Open Prisma Studio to view/edit data

## API Endpoints
