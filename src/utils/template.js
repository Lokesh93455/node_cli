
const fs  = require("fs");
const { log } = require("./logger");
const path= require("path")

function createFileFromTemplate(type,name){
    const templatePath= path.join(__dirname,'..',"templates",`${type}.txt`);

    if(!fs.existsSync(templatePath)){
        return log(`Template for ${type} not found`,"error");

    }



    const content =fs.readFileSync(templatePath,"utf-8")
                     .replace(/<name>/g,name.split("/").pop());

    //breaks path into parts
    const parts=name.split("/").filter(Boolean);

    //file name is last element
    const filename=parts.pop();

    //create folder path dynamically
    const folderPath=path.join("src",`${type}s`,...parts);

    //ensure folder exists
    if(!fs.existsSync(folderPath)){
        fs.mkdirSync(folderPath,{recursive:true});
        log(`Created folders: ${folderPath}`, "info");
    };

                    
    // const outputFile=`src/${type}s/${name}.${type}.js`;

    //final file path
    const outputFile=path.join(folderPath,`${filename}.${type}.js`);

    if(fs.existsSync(outputFile)){
        return log(`File already exists : ${outputFile}`,"warn")
    }

    fs.writeFileSync(outputFile,content);
    log(`Created ${type}: ${outputFile}`,"success");

    return true;
}

module.exports = { createFileFromTemplate };