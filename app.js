"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Guess a number between 1 To 10");
// now create variable
let a = Math.floor(Math.random() * 10);
const inquirer_1 = __importDefault(require("inquirer"));
while (true) {
    let input = await inquirer_1.default.prompt({ name: "guess", type: "number",
        message: "enter your guess number you want:  " });
    //provide code
    let ans = input.guess;
    if (a == ans) {
        console.log("congratulation your guess number is correct");
        break;
    }
    else {
        console.log("sorry you guess wrong number try again");
    }
}
