import { config as dotenvConfig } from "dotenv";
import { ConnectionConfig } from "mysql";

dotenvConfig();

interface Config {
  port: number;
  cors: {
    origin: string;
    allowedHeaders: string[];
    allowedOrigins: string[];
  };
  morgan: string;
  database: {
    host: string;
    user: string;
    password: string;
    database: string;
  };
}

const config: Config = {
  port: (process.env.PORT as unknown as number) || 7575,
  cors: {
    origin: process.env.CORS_ORIGIN || "*",
    allowedOrigins: ["http://localhost:3000"],
    allowedHeaders: ["Content-Type", "Authorization"],
  },
  morgan: process.env.NODE_ENV === "production" ? "combined" : "dev",
  database: {
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "voucher-campaign",
  },
};

export default config;
