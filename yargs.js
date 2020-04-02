var fs = require('fs');

const prompt = require('prompt-sync')();

const args = require('yargs').argv;
const arrayFile = "./content.json";
const arrayFileCopy = require(arrayFile);

let arrayCopy;
let newFile = args.fileName;
fs.readFile("content.json", (err, data) => {
    if(err){
        console.log("There was an issue fetching the list of files");
    }else{
        let jsonData = JSON.parse(data);
        arrayCopy = jsonData.array;
        //console.log(arrayCopy);
    }

    if(arrayCopy.includes(newFile)){
        let name = prompt('File exists already, enter a new one: ');
        if(name == newFile){
            console.log("That one exists too, closing the program");
        }else{
            newFile = name;
            if(newFile !== undefined){
                //update the json file
                arrayCopy.push(args.fileName);
                arrayFileCopy.array = arrayCopy;
                let data = JSON.stringify(arrayFileCopy, null, 2);
                fs.writeFileSync(arrayFile, data);
                //create the file and write in it
                fs.writeFileSync(newFile, "You are Awesome");
            }else{
                console.log("You must enter a fileName");
            }
        }
    }else{
        if(newFile !== undefined){
            //update the json file
            arrayCopy.push(args.fileName);
            arrayFileCopy.array = arrayCopy;
            let data = JSON.stringify(arrayFileCopy, null, 2);
            fs.writeFileSync(arrayFile, data);
            //create the file and write in it
            fs.writeFileSync(newFile, "You are Awesome");
        }else{
            console.log("You must enter a fileName");
        }
    }

    
});