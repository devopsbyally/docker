const express = require("express");
const path = require("path");

const app = express();
const PORT = 80;

// Serve static files
app.use(express.static(path.join(__dirname, "static")));

// Route for Rajasthan
app.get("/rajasthan", (req, res) => {
    res.sendFile(path.join(__dirname, "static", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Rajasthan service is running on port ${PORT}`);
});
