const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

let visitorCount = 0;

app.get("/visitor-count", (req, res) => {
  res.json({ count: visitorCount });
});

app.post("/visitor-count", (req, res) => {
  visitorCount += 1;
  res.json({ count: visitorCount });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});