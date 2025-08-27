import express from "express";
import cors from "cors";
import { env } from "./config/environment.js";

const app = express();

app.use(cors({ origin: "*" }));

// Parse JSON và URL-encoded body
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true }));

// Lấy port và hostname từ env
const port = env.APP_PORT || 8017;
const hostname = env.APP_HOST || "localhost";

app.listen(port, hostname, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running at http://${hostname}:${port}/`);
  console.log(`Server started successfully at ${new Date().toISOString()}`);
});
