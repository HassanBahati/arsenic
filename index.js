const express = require("express");
require("dotenv").config();

const app = express();

const PORT = 9000 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
