var notes = require("../db/db");
var fs = require("fs");
const router = require("express").Router();

router.get("/notes", function (req, res) {
  for (let i = 0; i < notes.length; i++) {
    notes[i].id = i;
  }

  res.json(notes);
});

router.post("/notes", function (req, res) {
  let newNote = req.body;
  console.log(notes);
  notes.push(newNote);

  let noteString = JSON.stringify(notes);

  fs.writeFile("db/db.json", noteString, function (err) {
    if (err) throw err;
    console.log("note sent");
    res.end();
  });
  //  }
});

router.delete("/notes/:id", function (req, res) {
  let nodeId = req.params.id;
  notes.splice(nodeId, 1);
  let updatedNts = JSON.stringify(notes);
  fs.writeFile("db/db.json", updatedNts, function (err) {
    if (err) throw err;
    console.log("note deleted");
    res.end();
  });
});
module.exports = router;
