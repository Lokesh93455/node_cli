#!/usr/bin/env node
const {Command}=require("commander");
const { initProject } = require("../src/commands/init");
const program=new Command();


//GLOBAL CONFIG
program
    .name("abu")
    .description("Node Project Generator CLI")
    .version("1.0.0");

program
    .command("init")
    .description("Hello Techies start interactive project setup")
    .action(()=>{
        initProject();
    });
    
program.addCommand(require("../src/commands/create"))
program.addCommand(require("../src/commands/make"))


program.parse(process.argv);