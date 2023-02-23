# Used Tools

- **express**: the web framework for Node.js.
- **body-parser**: middleware for parsing request bodies.
- **cors**: middleware for handling Cross-Origin Resource Sharing.
- **helmet**: middleware for adding security headers to HTTP responses.
- **morgan**: middleware for logging HTTP requests and esponses.
- **typescript**: TypeScript language and compiler.
- **@types/node**: TypeScript definitions for Node.js.
- **@types/express**: TypeScript definitions for Express.
- **@types/cors**: TypeScript definitions for CORS middleware.
- **@types/helmet**: TypeScript definitions for Helmet middleware.
- **@types/morgan**: TypeScript definitions for Morgan middleware.
- **nodemon**: a tool for automatically restarting the Node.js - application when code changes are detected.

# Structure

- **src**: This directory contains all the source code of the application.
- **src/config**: This directory contains configuration files and code.
- **src/repositores**: This directory contains the repository classes that handle incoming requests and send responses back to the client.
- **src/services**: This directory contains the services classes that connect the repositores with the rotes.
- **src/models**: This directory contains the model classes that represent the data entities of the application.
- **src/routes**: This directory contains the route files that define the endpoints of the API and the functions that handle each endpoint.
- **src/utils**: This directory contains utility functions that can be used throughout the application.
- **src/app.ts**: This is the main entry point of the application, where the Express app is created and configured.
- **.env**: This file contains environment variables that can be used in the application.
- **.gitignore**: This file specifies files and directories that should not be tracked by Git.
- **package.json**: This file contains information about the project, its dependencies, and its scripts.
- **tsconfig.json**: This file contains TypeScript configuration options.
