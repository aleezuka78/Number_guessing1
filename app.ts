console.log("Guess a number between 1 To 10");
// now create variable
let a:number=Math.floor(Math.random()*10)
import inquirer from "inquirer";
while(true){
    let input =await inquirer.prompt
    ({name:"guess",type:"number",
message: "enter your guess number you want:  "})


//provide code
let ans:number= input.guess
if(a==ans)
{console.log("congratulation your guess number is correct")
break;}
else{console.log("sorry you guess wrong number try again")}
}