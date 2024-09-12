const express = require("express");
const app = express();
require("dotenv").config();
const { mongoConnect } = require("./mongoConnect");

app.use(express.json());

mongoConnect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useNewUnifiedTopology: true,
})
  .then(() => {
    console.log("Database is conneted successfully");
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/", (req, res) => {
  res.status(200).send(`Welcome to Backend`);
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});