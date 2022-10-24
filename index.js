// required packages

const inquirer = require('inquirer')
const fs = require('fs')


//Create questions that ask from the array. 1.Manager's name, Employee ID, email address, office number.
//These are asked for in prompts.
//Prompt selection between and intern engineer
//Then I can enter the Engineer's name, ID, email and GitHub username
//Select the intern option and the above is repeated
// An HTML file is generated

//function internChoice
//inquirer.prompt
// Need a name, ID number and email

 let ourTeamArr = []

function employeeType() {
    inquirer.prompt([
    {
        type: "input",
        name: "realName",
        message: "What is the individual's name?"

    },

    {
        type: "input",
        name: "idNum",
        message: "What is the user's ID number?"

    },

    {
        type: "input",
        name: "email",
        message: "What is the user's email"
    },

    {
            type: "list",
            name:"employeeType",
            choices: [
                "Manager",
                "Intern",
                "Engineer",
                "end"


            ] 
    }

    ]).then(function(answers) {
     if(answers.employeeType === "Intern"){
        internQuestions(answers)
     } else if  (answers.employeeType === "Engineer"){
        engineerQuestions(answers)
    } else if (answers.employeeType === "Manager"){
        managerQuestions(answers)
    } else (answers.employeeType === "end")
            return
        
        
})
}
employeeType()

function managerQuestions () {
    inquirer.prompt ([
        {
        type: "input",
        name: "officeNumber",
        Message: "What is their office number"
        },
        {
            type: "list",
            name: "continue",
            choices: [
                "yes",
                "no"
            ]

        }

    ]).then (function(answers){
        if (answers.continue === "yes"){
            employeeType()
        } else (answers.continue === "no")
            return
        
    })
}

function internQuestions () {
    inquirer.prompt([
        {
            type:"input",
            name: "school",
            message: "Where are they attending school"
        },

        {
            type: "list",
            name: "continue",
            choices: [
                "yes",
                "no"
            ]

        }
    ]).then (function(answers){
        if (answers.continue === "yes"){
            employeeType()
        } else (answers.continue === "no")
            return
        
    })
}

function engineerQuestions () {
    inquirer.prompt ([
        {
            type: "input",
            name: "github",
            message: "What is their Github username"
        },

        {
            type: "list",
            name: "continue",
            choices: [
                "yes",
                "no"
            ]

        }

    ]).then (function(answers){
        if (answers.continue === "yes"){
            employeeType()
        } else (answers.continue === "no")
            return
        
    })
}










// initIntern()

// const engineerQuestions = ([ 

//     {
//         type: 'input',
//         name: 'name',
//         message: 'What is their name?'
//     },

//     {
//         type: 'input',
//         name: 'managername',
//         message: 'What is the name of your manager?'
//     },

//     {
//         type: 'input',
//         name: 'employeeID',
//         message: 'What is your employee ID?'
//     },

//     {
//         type: 'input',
//         name: 'emailaddress',
//         message: 'What is your email address?'
//     },

//     {
//         type: 'input',
//         name: 'officenumber',
//         message: 'what is your office number?'
//     },

   
// ]);

// const generateEngineer = ({managername, employeeID, emailaddress, officenumber, stafftype

// }) => ""

// function initEngineer() {
//     inquirer.prompt(engineerQuestions)
//     .then ((inquirerResponse) =>{
//         console.log(inquirerResponse)

//         console.log('Writing HTML');
//         fs.writeFileSync("./output/index.html",
//        generateEngineer(inquirerResponse))
//     })
// }



// initEngineer()