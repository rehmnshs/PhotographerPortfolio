const express = require("express");
const cors = require("cors");
const fs = require('fs/promises'); // Use fs.promises for async file operations
const path = require('path');

const app = express();
const PORT = 5000;
app.use(express.json());
app.use(cors());

app.post("/storeDis", async (req, res) => {
const logo = req.body.logo;
const displayimgs = req.body.displayimgs;



})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  