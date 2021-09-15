#!/usr/bin/env node

const boxen = require('boxen');
const chalk = require('chalk');
const clear = require('clear');
const inquirer = require('inquirer');
const open = require('open');
clear();

const prompt = inquirer.createPromptModule();

const personal_data = {
    name: chalk.bold.blue("            Manuel Rodriguez Valencia"),
    ocup: chalk.whiteBright("       Industrial Engineer & Data Scientist"),
    linkedin_key: chalk.bold("LinkedIn: "),
    linkedin: chalk.gray("  https://www.linkedin.com/in/") + chalk.bold.blue("manuelrodval"),
    twitter_key: chalk.bold(" Twitter: "),
    twitter: chalk.grey("  https://www.twitter.com/") + chalk.bold.blue("Manuel3v9"),
    github_key: chalk.bold("  GitHub: "),
    github: chalk.grey("  https://www.github.com/") + chalk.bold.blue("manuelrodval"),
}

const message = boxen([
    `${personal_data.name}`, 
    `${personal_data.ocup}`,
    "",
    `${personal_data.linkedin_key}` + `${personal_data.linkedin}`,
    `${personal_data.github_key}` + `${personal_data.github}`,
    `${personal_data.twitter_key}` + `${personal_data.twitter}`,
    "",
    "",
    "Hi!, I am currently looking for new job opportunities",
    "in Data Science. Whether you have a question or just",
    "want to say hi, my inbox is open. I will get back", "at you."
    ].join('\n'),
    {padding: 1, margin: 1, borderStyle: 'double', borderColor:"#38b000", float:"center"}
)

const questions = [
    {
        type: "list",
        name: "answer",
        message: "What you want to do?",
        choices: [
            {
                name: `Send me an ${chalk.green.bold("email")}?`,
                value: () => {
                    open("mailto:manuelrodval@hotmail.com");
                    console.log("\nIf your client didn't open, my email address is: manuelrodval@hotmail.com.\nHope we stay in touch!.\n");
                }
            },
            {
                name: "Quit.",
                value: () => {
                    console.log("Bye.\n");
                }
            }
        ]
    }
];



console.log(message)

prompt(questions).then(answer => answer.answer());