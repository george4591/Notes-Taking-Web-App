const express = require("express");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send({ test: 255 });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
