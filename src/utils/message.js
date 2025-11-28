const { log } = require("./logger");

function greet(){
log(`"npm start" to run your project`,"success")
log("😊 Happy Hacking..!! \n -by Abu","done")
    
}

function startMessage(projectName,){
   log(`Run your project using below commands \n cd ${projectName} \n npm start `,'success')
   log("😊 Happy Hacking..!! \n -by Abu","done")


}

module.exports={greet,startMessage}