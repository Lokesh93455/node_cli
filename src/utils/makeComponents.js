const { log } = require("./logger");
const { createFileFromTemplate } = require("./template");

function makeComponents(name,option){
    const types=[
        "route",
        "model",
        "service",
        "controller",
        "repo",
    ];

    let createdCount=0;
    let total=types.length;



    types.forEach((t)=>{
       const result= createFileFromTemplate(t,name);
       if(result=== true) createdCount++;
    });

    if(createdCount===total){
         log(`✔ All ${total} components created for: ${name}`, "success");
    }else{
        log(
            `⚠ Only ${createdCount}/${total} components created for: ${name} (Some already existed or failed).`,
            "info"
        );

    }
}

module.exports={makeComponents};