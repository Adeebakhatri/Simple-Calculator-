#! /usr/bin/env node


//SIMPLE CALCULATOR
import inquirer from 'inquirer';

//Printing a welcome message
console.log('\n\t Welcome - CLI Simple Calculator');

// Asking Questions From The Users Through Inquirer

const calculator = await inquirer.prompt([
    {message:'Enter First Number',type : 'number', name: 'fristNumber'},
    {message :'Enter Second Number',type :'number', name :'secondNumber'},
    {
        message: "Select one Operator to perform operations",
        type: "list",
        name: "operator",
        choices: ['Addition','Subtraction','Multiplication','Division'],
    },
]);
console.log(calculator);

//conditional Test
if(calculator.operator === 'Addition'){
console.log(calculator.firstNumber + calculator.secondNumber);
}else if(calculator.operator === 'Subtraction'){
console.log(calculator.firstNumber - calculator.secondNumber);
}else if(calculator.operator === 'Multiplication'){
console.log(calculator.firstNumber * calculator.secondNumber);
}else if(calculator.operator === 'Division'){
console.log(calculator.firstNumber / calculator.secondNumber);
}