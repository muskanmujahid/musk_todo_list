#! /usr/bin/env node
import inquirer from "inquirer";
//array add kia h:
let todos = ["Khushbu", "Muskan"];
//function banaya h:
async function createTodo(todos) {
    do {
        let answer = await inquirer.prompt({
            type: "list",
            message: "Select an operators",
            name: "Select",
            choices: ["Add", "Update", "View", "Delete"],
        });
        //agr list me kuch add krna h :
        if (answer.Select == "Add") {
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "add items in the list",
                name: "todo"
            });
            todos.push(addTodo.todo);
            todos.forEach(todo => console.log(todo));
            // console.log(todos);
        }
        //agr update krna ho koi bhi name or item :
        else if (answer.Select == "Update") {
            let updateTodo = await inquirer.prompt({
                type: "list",
                message: "update items in the list",
                name: "todo",
                choices: todos.map(item => item)
            });
            //pehle name add hoga compiler me :
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "add items in the list",
                name: "todo"
            });
            //then change hoga:
            let newTodo = todos.filter(value => value !== updateTodo.todo);
            todos = [...newTodo, addTodo.todo];
            todos.forEach(todo => console.log(todo));
            // console.log(todos);
        }
        //view k lie just dsign krna h:
        else if (answer.Select == "View") {
            console.log("  *** TO DO LIST ***  ");
            todos.forEach(todo => console.log(todo));
            //console.log(todos);
            console.log("  ******************  ");
        }
        //delete krne k lie working:
        else if (answer.Select == "Delete") {
            let deleteTodo = await inquirer.prompt({
                type: "list",
                message: "delete items in the list",
                name: "todo",
                choices: todos.map(item => item),
            });
            //new todo dene k lie:
            let newTodo = todos.filter(value => value !== deleteTodo.todo);
            todos = [...newTodo];
            todos.forEach(todo => console.log(todo));
            // console.log(todos);
        }
    } while (true);
}
createTodo(todos);
