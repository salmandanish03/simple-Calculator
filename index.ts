#! /usr/bin/env node

import inquirer from "inquirer";
const asnwer = await inquirer.prompt([
  { message: "Enter the first number", type: "number", name: "firstNumber" },
  { message: "Enter the second number", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operators to perform the operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

// console.log(asnwer);

// Condition 1st
if (asnwer.operator === "Addition") {
  console.log("Your Value is: ", asnwer.firstNumber + asnwer.secondNumber);
}

// Condition 2nd
else if (asnwer.operator === "Subtraction") {
  console.log("Your Value is: ", asnwer.firstNumber - asnwer.secondNumber);
}

// Condition 3rd
else if (asnwer.operator === "Multiplication") {
  console.log("Your Value is: ", asnwer.firstNumber * asnwer.secondNumber);
}

// Condition 4th
else if (asnwer.operator === "Division") {
  console.log("Your Value is: ", asnwer.firstNumber / asnwer.secondNumber);
}

else {
    console.log("Please select a valid operator");
}