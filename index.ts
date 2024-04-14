#!usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter First Number", type: "number", name: "FirstNum" },
  { message: "Enter Second Number", type: "number", name: "Secondnum" },
  {
    message: "Please Select The One Operator",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

// Conditional Statement

if (answer.operator === "Addition") {
  console.log(answer.FirstNum + answer.Secondnum);
} else if (answer.operator === "Subtraction") {
  console.log(answer.FirstNum - answer.Secondnum);
} else if (answer.operator === "Multiplication") {
  console.log(answer.FirstNum * answer.Secondnum);
} else if (answer.operator === "Division") {
  console.log(answer.FirstNum / answer.Secondnum);
} else {
  console.log("Your operator is not correct");
}
