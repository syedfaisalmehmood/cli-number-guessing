#! usr/bin/env node
import inquirer from "inquirer";
// 1) Computer will generate a random number - Done
// 2) User input the guessing number - Done
// 3) Compare the user input with Computer generated random number - Done
// 4) show the results of number comparison - Done completely
const randomnumber = Math.floor(Math.random() * 100 + 1);
// console.log(randomnumber);  
const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Please guess a Number between 1 - 100",
    },
]);
if (answer.userGuessNumber === randomnumber) {
    console.log(`Congragulations! you guessed the right number. Becase computer generated number is ${randomnumber}`);
}
else {
    console.log(`You guessed wrong number. Because computer generated number is ${randomnumber}`);
}
