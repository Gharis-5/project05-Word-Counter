#! /usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter Your Sentence To Count The Word : ",
    },
]);
const word = answers.Sentence.trim().split(" ");
console.log(word);
console.log(`Your Sentence Word Count Is ${word.length}`);
