var notes = require("../db/db");
var fs = require("fs");
const router = require("express").Router();

router.get("/notes", function (req, res) {
  res.json(notes);
  //   console.log("notes retrieved");
  //   if (!notes === undefined || !notes.length === 0) {
  //     for (let i = 0; i < notes.length; i++) {
  //       notes[i].id = i;
  //     }
  //   }
});

router.post("/notes", function (req, res) {
  let newNote = req.body;

  if (notes === "") {
    newNote.id = 0;

    let noteString = JSON.stringify(newNote);

    fs.writeFile("db/db.json", noteString, function (err) {
      if (err) throw err;
      console.log("note sent");
    });
  } else {
    newNote.id = notes.length;
    console.log(notes);
    notes.push(newNote);

    let noteString = JSON.stringify(notes);

    fs.writeFile("db/db.json", noteString, function (err) {
      if (err) throw err;
      console.log("note sent");
    });
  }
});

router.delete("/notes/:id", function (req, res) {
  let nodeId = req.params.id;
  notes.splice(nodeId, 1);
  let updatedNts = JSON.stringify(notes);
  fs.writeFile("db/db.json", updatedNts, function (err) {
    if (err) throw err;
    console.log("note deleted");
  });
});
module.exports = router;
