const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const visitorCountFilePath = path.join(__dirname, "visitorCount.json");

// Dosyadan visitorCount değerini oku
let visitorCount = 0;
if (fs.existsSync(visitorCountFilePath)) {
  const data = fs.readFileSync(visitorCountFilePath, "utf8");
  visitorCount = JSON.parse(data).count;
}

// visitorCount değerini dosyaya yaz
const saveVisitorCount = () => {
  fs.writeFileSync(visitorCountFilePath, JSON.stringify({ count: visitorCount }), "utf8");
};

app.get("/visitor-count", (req, res) => {
  res.json({ count: visitorCount });
});

app.post("/visitor-count", (req, res) => {
  visitorCount += 1;
  saveVisitorCount();
  res.json({ count: visitorCount });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});