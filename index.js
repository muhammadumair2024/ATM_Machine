#! /usr/bin/env node
import inquirer from "inquirer";
//initilize user balance and pin code:
let myBalance = 5000;
let mypin = 4321;
//print welcome message
console.log("welcome to umairji - ATM Machine");
let pinAnswer = await inquirer.prompt({
    name: "pin",
    type: "number",
    message: "Enter your pin code"
});
if (pinAnswer.pin === mypin) {
    console.log("pin is correct, login successfully");
    // console.log(`current Account Balance is ${myBalance}`)
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an opearation",
            choices: ["Withdraw Amount", "Check Balance"]
        }
    ]);
    if (operationAns.operation === "Withdraw Amount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to withdraw;"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} Withdraw successfully`);
            console.log(`Your Remainig Balance is: ${myBalance}`);
        }
    }
    else if (operationAns.opearation === "Check Balance") {
        console.log(`Your Account Balance is: ${myBalance}`);
    }
}
else {
    console.log("Pin Is Incorrect, Try Again!");
}
