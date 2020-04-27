const express = require("express");


const app = express();
const port = process.env.PORT || 8080;





app.get("/index", function(req, res){
    res.sendFile(path.join(__dirname, "index.html")

)});

app.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "notes.html")

)});



app.listen(port, function(){
    console.log(`App Server is listening on port: ${port}`);

})

