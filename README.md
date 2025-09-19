# Fireportal

Fireportal is a web application designed to visualize and record fire incidents in cities. It allows you to quickly view the latest fire incidents and register new ones.

## Quick start

Clone the repository and follow the steps below for each application (backend and frontend).

### Backend

1. Navigate to the `backend` directory.
2. Create a `.env` file and copy all parameters from the `.env.example` file. (Don’t worry, the parameters in `.env.example` are set for local development, so no sensitive information is exposed.)
3. Install all backend dependencies by running `go mod tidy`.
4. Fireportal uses a SQLite database for persistence. You’ll need to create the database and run migrations. Use the integrated `runmigrations` tool by running:

   ```bash
   go run ./cmd/runmigrations
   ```

   This command creates the database, connects to it, and runs all required migrations.
5. Finally, start the HTTP server by running:

   ```bash
   go run ./cmd/api
   ```

### Frontend

1. Navigate to the `frontend` directory.
2. Create a `.env` file and copy all parameters from `.env.example`.
3. Install dependencies by running `npm install`.
4. Make sure the backend is running.
5. Start the development client with:

   ```bash
   npm run dev
   ```

## Tech stack

To align with BlazeStack’s requirements, Fireportal was built with Go for the backend (application and migrations management) and TypeScript with React for the frontend interface. I also added CI/CD pipelines to ensure the applications build correctly and tests run as expected.

### Backend dependencies

I like to keep the backend simple and avoid unnecessary dependencies, since Go already provides powerful tools for most use cases. To speed up development, these dependencies were included:

* [echo](https://echo.labstack.com/docs/quick-start): Simplifies HTTP development and provides utilities like routing, JSON mapping, and middleware chaining.
* [go-sqlite3](https://github.com/mattn/go-sqlite3): SQLite database driver.
* [viper](https://github.com/spf13/viper): For easy environment configuration and type-safe parameter access via struct unmarshalling.
* [testify](https://github.com/stretchr/testify): For writing unit tests and mocking dependencies.

### Frontend dependencies

The React ecosystem is broad, and I prefer leveraging existing tools to avoid reinventing the wheel and stay focused on business logic. These dependencies improve productivity:

* [axios](https://axios-http.com/es/docs/intro): A simple HTTP client for requests.
* [@tanstack/react-query](https://tanstack.com/query/latest/docs/framework/react/overview): My go-to library for managing HTTP request lifecycles. It handles loading and error states, provides automatic data refreshing, and is great for server-driven applications.
* [react hook form](https://react-hook-form.com/): A powerful form state management library. Slightly overkill for this project, but it integrates nicely with ShadCN’s `Form` component.
* [zod](https://zod.dev/): My go-to schema validation library, with excellent integration with React Hook Form and ShadCN’s `Form`.
* [tailwindcss](https://tailwindcss.com/), [shadcn](https://ui.shadcn.com/): A modern styling framework and UI component library that I enjoy working with.

## Architecture

Fireportal consists of two independent applications, `backend` and `frontend`, following a client-server architecture. The `backend` serves as an HTTP server handling requests and responses, while the `frontend` provides the user interface and communicates with the backend via HTTP.

Data persistence is managed with a SQLite database. I chose this to keep things simple while still ensuring true persistence without unnecessary complexity.

### Tradeoffs and assumptions

Although Fireportal is a small and simple application (just two endpoints and a single view), I focused on making it reliable rather than adding new features. Most of my time went into handling potential edge cases and ensuring the endpoints work correctly.

For storage, SQLite works well in local development but should be replaced with a production-grade database engine in a real deployment.

## What’s done and what I’d improve

I’ve built a simple application, but with persistence included, since I consider it a critical layer. I prefer not to create full-application demos with all data stored in memory.

Potential improvements include:

* **Backend validation layer:** Currently, payload validation is minimal. It matches the payload with the DTO struct, but no detailed validators exist. I’d like to add one.
* **Image storage:** Images are currently stored in base64. This can bloat the database and increase request/response latency. I chose this approach for speed and simplicity, but in the future I’d replace it with static asset serving or object storage (e.g., S3).
* **More tests (backend):** Right now, tests cover only the `IncidentsService`, which is the main business logic module. I’d expand this to include integration and other layers.
* **Tests for the frontend:** Currently, there are none. I’d add mocked end-to-end tests using tools like Cypress or Playwright.

## AI usage

I used AI tools for this project, specifically ChatGPT-5 and GitHub Copilot. AI support was mainly used for researching database management with Go’s `database/sql` package (I usually use SQLC, which removes boilerplate). GitHub Copilot also helped generate stub data based on the `Incident` shape for faster UI development, and to scaffold some backend endpoints.

<img width="1899" height="1116" alt="image" src="https://github.com/user-attachments/assets/95a5eb5e-f568-4970-9778-3eea55a126be" />

