require('dotenv').config();
const PROMPT=[
    {
      type: "list",
      name: "projectType",
      message: "Select project type:",
      choices: ['Basic','Adapter'],
    },
    {
      type: "list",
      name: "dbType",
      message: "Select database:",
      choices: ["MongoDB", "MySQL", "PostgreSQL", "None"],
    },
    {
      type: "checkbox",
      name: "features",
      message: "Select features to include:",
      choices: [
        { name: "Authentication", value: "auth" },
        { name: "Logging", value: "logging" },
        { name: "CORS", value: "cors" },
        { name: "Swagger Docs", value: "swagger" },
      ],
    },
    {
      type: "input",
      name: "projectName",
      message: "Enter project name:",
    //   default: "my-app",
      validate:(input)=>input?true:"Yub.. Project name can't be empty🙂",
    },


]

module.exports={PROMPT};