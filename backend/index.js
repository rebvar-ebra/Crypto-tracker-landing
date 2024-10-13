require('dotenv').config();
const express = require("express");
const mongose = require("mongoose");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const uri = process.env.URI;

app.use(cors());
app.use(express.json());

mongose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err)); // Correctly chained .catch()

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
