const express = require("express");

const app = express();

const port = process.env.PORT || 5000;

// Get route to confirm server is up when routing to /
app.get("/", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});

// Console log to notify dev server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
