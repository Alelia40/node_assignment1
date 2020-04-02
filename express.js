const express = require('express');
const app = express();
const port = 3000;

var fs = require('fs');
const arrayFile = "./content.json";

app.get('/', (req, res) =>{
    fs.readFile(arrayFile, (err, data) =>{
        res.json(JSON.parse(data));
    });
});

app.listen(port, (err) =>{
    if(err){
        console.log("There was an error");
    }else{
        console.log("server running on port: "+port);
    }
});