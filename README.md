# TypeScript Express REST API

A modern REST API built with Node.js, Express, and TypeScript.

## Prerequisites

- Node.js (v14 or higher)
- pnpm (v6 or higher)
- Docker (optional)

## Setup

1. Install dependencies:
```bash
pnpm install
```

2. Create a `.env` file in the root directory with the following content:
```
PORT=3000
NODE_ENV=development
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

## API Endpoints

- `GET /` - Welcome message
