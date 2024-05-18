#!/usr/bin/env node

import inquirer from "inquirer"

let todos = [];

let condition = true;

while(condition) {

let addTask = await inquirer.prompt(
    [
        {
            name: "todo",
            type: "input",
            message: "What you want to add in your Todos",
        },

        {
            name: "addMore",
            type: "confirm",
            message: "Whoul you like to add more in your Todos",
            default: "true"
        }
    ]
);
todos.push(addTask.todo)
console.log(todos)
condition = addTask.addMore
}