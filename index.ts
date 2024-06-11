#! /usr/bin/env node

import inquirer from 'inquirer'

let myBalance = 10000;

let pincode = 1234;

let pinAnswer = await inquirer.prompt(
    {
        name : 'pin',
        message: 'Enter your pin',
        type: 'number'
    }
)

if(pinAnswer.pin === pincode){
    console.log('Correct pin code..')

   let operationAnswer = await inquirer.prompt({
        name: 'operation',
        message: 'please select option',
        type: 'list',
        choices: ['withdraw' , 'check balance']
    })

    if(operationAnswer.operation === 'withdraw'){
        let amountAnswer = await inquirer.prompt({
            name: 'amount',
            message: 'Enter your amount to withdraw',
            type: 'number'
        })
        if(amountAnswer.amount <= myBalance){
            myBalance -= amountAnswer.amount
            console.log(`Your remaining balance = ${myBalance}`)
    }
        else{
            console.log('Sorry! insufficient amount')
        }
        }
   
    
    else if(operationAnswer.operation === 'check balance'){
        console.log(`your balance is PKR ${myBalance}`)
    }
    
}
else{
    console.log('incorrect pin code')
}