const { Command } = require("commander");
const { createProject } = require("../utils/projectSetup/createProject");
const { initNodeProject } = require("../utils/projectSetup/initNodeProject");
const { installDefaultPackages } = require("../utils/projectSetup/installDefaultPackages");
const { createEnvFile } = require("../utils/projectSetup/createEnvFile");
const { createDBConfig } = require("../utils/projectSetup/createDBConfig");
const { createStarterFiles } = require("../utils/projectSetup/createStarterFiles");
const { log } = require("../utils/logger");
const { greet } = require("../utils/message");
const { safeRun } = require("../utils/helper/safeRun");
// const { createProject } = require("../utils/file");

const create = new Command("create");

create
  .argument("<type>")
  .description("Create project structure")
  .action((type) => {
   try{
    // createProject(type);
    // initNodeProject();
    // installDefaultPackages();
    // createEnvFile();
    // createDBConfig();
    // createStarterFiles();

     safeRun(() => createProject(type), "Project creation failed");
     safeRun(() => initNodeProject(), "NPM init failed");
     safeRun(() => installDefaultPackages(), "Package install failed");
     safeRun(() => createEnvFile(), ".env creation failed");
     safeRun(() => createDBConfig(), "DB config creation failed");
     safeRun(() => createStarterFiles(), "Starter files creation failed");
    // --------------
    greet();
   }catch(error){
    log(error.message,"error")
   }
  });
module.exports = create;
