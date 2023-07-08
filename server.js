import express from "express";
import fs from "fs";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
	res.send("Hello thanks for pinging")
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
