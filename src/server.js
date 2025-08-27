import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const hostname = process.env.HOST || "localhost";
const port = process.env.PORT || 8017;

app.use(cors({ origin: "*" }));

// Parse JSON và URL-encoded body
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true }));

app.listen(port, hostname, () => {
  // eslint-disable-next-line no-console
  console.log(`http://${hostname}:${port}/`);
  console.log(`Server started successfully at ${new Date().toISOString()}`);
});
