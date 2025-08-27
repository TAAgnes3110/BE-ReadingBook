import admin from "firebase-admin";
import fs from "fs";
import path from "path";

let serviceAccount;
try {
  const serviceAccount = path.join(__dirname, "service_account.js");
  if (!fs.existsSync(serviceAccount)) {
    throw new Error("Service account file not found");
  }
  serviceAccount = require(serviceAccount);
} catch {
  console.error("Error loading service account:", error);
  throw new Error("Thiếu hoặc sai file service_account.json!");
}

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
} catch (error) {
  console.error("Error initializing Firebase Admin SDK:", error);
  throw new Error("Failed to initialize Firebase Admin SDK");
}

const db = admin.firestore();

module.exports = { admin, db };
