import express from "express";
import "dotenv/config";

const app = express();

// Define an array to capture console log and error messages
const consoleMessages = [];

// Override console.log and console.error to capture messages
const originalLog = console.log;
const originalError = console.error;

console.log = (...args) => {
	originalLog(...args);
	consoleMessages.push({ type: "log", message: args.join(" ") });
};

console.error = (...args) => {
	originalError(...args);
	consoleMessages.push({ type: "error", message: args.join(" ") });
};

app.get("/", (req, res) => {
	res.send("Hello, thanks for pinging!");
});

// Route to display console log and error messages
app.get("/console", (req, res) => {
	res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Console Log and Errors</title>
    </head>
    <body>
      <h1>Console Log and Errors</h1>
      <ul>
        ${consoleMessages.map((message, index) => `<li>${index + 1}: [${message.type}] ${message.message}</li>`).join("")}
      </ul>
    </body>
    </html>
  `);
});

app.listen(process.env.PORT, () => {
	console.log(`Server is running on port ${process.env.PORT}`);
});

