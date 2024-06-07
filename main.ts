#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let todos = ["coding","Gym"]

async function createTodo(todo: string[]){
    do{
        let answer = await inquirer.prompt(
            {
                type: "list",
                message: chalk.bold.green("select an option"),
                name: "option",
                choices: ["Add","Update","Veiw",'Delete']

            }
        );
        if(answer.option === "Add"){
            let addMore = await inquirer.prompt(
                {
                    type: "input",
                    message:chalk.bold.magenta( "add task in the list"),
                    name: "add",
                }
            );
            todo.push(addMore.add)
            todo.forEach((item) => console.log(item));
        
        };

        if (answer.option === "Update"){
            let UpdateMore = await inquirer.prompt(
                {
                    type: "list",
                    message: chalk.bold.yellow("update task in the list"),
                    name: 'todos',
                    choices: todos.map((item) => (item))
                }
            );

            let addMore = await inquirer.prompt(
                {
                    name: "todo",
                    type: "input",
                    message: chalk.bold.rgb(23,222,229)("add item in the list")
                }
            );

            let newTask = todos.filter((val) => val !== UpdateMore.todos)
            todos = [...newTask,addMore.todo]
        }
        if(answer.option === "Veiw"){
            console.log(chalk.bold.rgb(255,51,255)("\n*****TO DO LIST*****\n"));
            console.log(todos);
            console.log("\n\t*******\t");
            
        }
        if(answer.option === "Delete"){
            let deleteTask = await inquirer.prompt(
                {
                    type: "list",
                    message: chalk.bold.red("delete task from the list"),
                    name: "deletetask",
                    choices: todos.map((val) => (val))
                }
            );
        

            let newTask = todos.filter((val) => val !== deleteTask.deletetask)
            todos = [...newTask]
            console.log(todos);
        }
          
    } while(true)
    
}      

createTodo(todos)