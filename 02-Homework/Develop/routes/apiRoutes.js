var notes = require("../db/db");
var  fs = require("fs");

module.exports = function(app){

    app.get("/api/notes", function(req, res) {
        res.json(notes);
        console.log("notes retrieved")
        if(!notes === undefined || !notes.length === 0){
            
        for(let i = 0 ; i < notes.length ; i ++){
            notes[i].id = i 
        }
    }
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
        let updatedNts = JSON.stringify(notes);
        fs.writeFile("db/db.json", updatedNts, function(err){
            if(err) throw err;
            console.log("note deleted")
        });

      });

};