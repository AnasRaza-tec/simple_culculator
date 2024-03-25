#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "enter first number", type: "number", name: "firstnumber" },
  { message: "enter second number", type: "number", name: "secondnumber" },
  {
    message: "select one to the oprators to perform opration",
    type: "list",
    name: "oprator",
    choices: ["addition", "subraction", "multipilcation", "division"],
  },
]);
if (answer.oprator === "addition") {
  console.log(answer.firstnumber + answer.secondnumber);
} else if (answer.oprator === "subraction") {
  console.log(answer.firstnumber - answer.secondnumber);
} else if (answer.oprator === "multipilcation") {
  console.log(answer.firstnumber * answer.secondnumber);
} else if (answer.oprator === "division") {
  console.log(answer.firstnumber / answer.secondnumber);
} else {
  console.log("please select valid oprator");
}