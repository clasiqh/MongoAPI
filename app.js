const express = require("express");
const mongoose = require("mongoose");
const Student = require("./models/student");
const fs = require("fs");
require("dotenv").config();

const app = express();

const url = process.env.MONGO_URL;

mongoose
  .connect(url)
  .then((res) => {
    console.log("connected to db yay :)");
    app.listen(process.env.PORT, () => {
      console.log("server started, les go bruh");
    });
  })
  .catch((err) => {
    console.log("error connecting to database :(", err);
  });

app.get("/", (req, res) => {
  console.log("someone visited ./");
  fs.readFile("./index.html", (err, data) => {
    if (err) {
      res.send("error reading html");
    } else {
      res.write(data);
      res.end();
    }
  });
});

const testRouter = require("./routes/test.js");
app.use("/test", testRouter);
