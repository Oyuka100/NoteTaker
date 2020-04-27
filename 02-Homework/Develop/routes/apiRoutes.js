


var notes = require("../db/db");
var  fs = require("fs");

module.exports = function(app){

    app.get("/api/notes", function(req, res) {
        res.json(notes);
        console.log("notes retrieved")
      });


      app.post("/api/notes", function(req, res) {
        
       if (notes===""){
           req.body.id = 0;


        let newNote = JSON.stringify(req.body);
        
        fs.writeFile("db/db.json", newNote, function(err){
            if(err) throw err;
            console.log("note sent")
        });
        }else{
            res.body.id = notes.length
            notes.push(req.body);
            console.log(notes);

            let newNote = JSON.stringify(req.body);
        
        fs.writeFile("db/db.json", newNote, function(err){
            if(err) throw err;
            console.log("note sent")
        });
        }

      });

      app.delete("/api/notes/:id", function(req, res){
        let nodeId = req.params.id 
        notes.splice(noteId, 1)
      });

};