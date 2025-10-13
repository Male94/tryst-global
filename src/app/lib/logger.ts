import fs from "fs";
import path from "path";

// Define the log file path (in your project root or a /logs directory)
const logFilePath = path.join(process.cwd(), "logs", "email-errors.log");

// Ensure logs directory exists
function ensureLogDir() {
  const logDir = path.dirname(logFilePath);
  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
  }
}

export function logError(message: string, error?: unknown) {
  ensureLogDir();

  // Safely serialize error
  let errorInfo = "";
  if (error instanceof Error) {
    errorInfo = JSON.stringify(
      { message: error.message, stack: error.stack },
      null,
      2
    );
  } else if (error !== undefined) {
    try {
      errorInfo = JSON.stringify(error, null, 2);
    } catch {
      errorInfo = String(error); // fallback if error can't be stringified
    }
  }

  const timestamp = new Date().toISOString();
  const logEntry = `
[${timestamp}] ERROR: ${message}
${errorInfo}
----------------------------------------------
`;

  fs.appendFileSync(logFilePath, logEntry, "utf8");
  console.error("🚨 Logged error:", message);
}
