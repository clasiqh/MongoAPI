const express = require("express");
const { Mongoose } = require("mongoose");
const Student = require("../models/student");

const router = express.Router();

router.use(express.json());

router.get("/", async (req, res) => {
  console.log("all data requested");
  try {
    Student.find()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  } catch {
    console.log("error sending all data on /test");
    res.send("Could not get data :(");
  }
});

router.post("/", async (req, res) => {
  console.log("post request on test");
  const student = new Student({
    name: req.body.name,
    roll_no: req.body.roll_no,
    city: req.body.city,
  });
  student
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log("error saving data.", err);
      res.status(404).send(err);
    });
});

router.get("/:id", async (req, res) => {
  Student.findById(req.params.id)
    .then((result) => {
      console.log("SENT BY ID.");
      res.json(result);
    })
    .catch((err) => {
      console.log("ERROR SENDING DATA WITH ID", err);
      res.send("Could not get data :(");
    });
});

router.put("/:id", async (req, res) => {
  console.log("put request made");
  try {
    const id = req.params.id;
    Student.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(
      (data) => {
        if (!data) {
          res.status(404).send(`could not update user with ${id}`);
        } else {
          res.send("database updated");
        }
        console.log(data);
      }
    );
  } catch (err) {
    res.status(404).send("error patching data");
  }
});

router.delete("/:id", async (req, res) => {
  console.log("delete request made");
  Student.findByIdAndDelete(req.params.id)
    .then((data) => {
      if (!data) {
        res.status(404).send("error deleting, no data");
      } else {
        res.send("deleted :)");
      }
    })
    .catch((err) => {
      console.log("error deleting: ", err);
      res.status(404).send("error deleting");
    });
});

module.exports = router;
