import inquirer, { Answers } from "inquirer";
let TODOS: string[]=[];
let loop = true;
while(loop){
type answers = {
    todos: string,
    addmore: boolean
}
const answers : Answers= await inquirer.prompt([
{

type:"input",
name:"todos",
message:"Please Enter Your TODOS"
},
{
    type:"confirm",
    name:"addMore",
    message:"Do You Want to ADD more ?",
    default:"false"
}

])
const {todos , addMore}=answers
loop= addMore;
console.log(answers);
if(todos){
TODOS.push(todos);
}else( "Please enter a valid input")


}
if(TODOS.length > 0){
    console.log("Your ToDo List is :")
    TODOS.forEach(TODOS => {
        console.log(TODOS)
    });
}