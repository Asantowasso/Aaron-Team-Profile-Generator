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

const employeeType = () => {
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
            name:"position",
            choices: [
                "Manager",
                "Intern",
                "Engineer",
                "end"


            ] 
    }

    ]).then(function(answers) {
     if(answers.position === "Intern"){
        internQuestions(answers)
     } else if  (answers.position === "Engineer"){
        engineerQuestions(answers)
    } else if (answers.position === "Manager"){
        managerQuestions(answers)
    } else (answers.position === "end")
            return
        
        
})
}
employeeType()

const managerQuestions = () => {
    inquirer.prompt ([
        {
        type: "input",
        name: "officeNumber",
        message: "What is their office number"
        },
        {
            type: "list",
            name: "addmore",
            message: "Add more staff?",
            choices: [
                "yes",
                "no"
            ]

        }

    ]).then (function(answers){
        if (answers.addmore === "yes"){
            employeeType()
        } else (answers.addmore === "no")
            return
        
    })
}

const internQuestions = () => {
    inquirer.prompt([
        {
            type:"input",
            name: "school",
            message: "Where are they attending school"
        },

        {
            type: "list",
            name: "addmore",
            message: "Add more staff?",
            choices: [
                "yes",
                "no"
            ]

        }
    ]).then (function(answers){
        if (answers.addmore === "yes"){
            // const intern = new Intern (realName, idNum, email, position, school)
            // ourTeamArr.push(intern)
            employeeType()
        } else (answers.addmore === "no")
            return
        
    })
}

const engineerQuestions = () => {
    inquirer.prompt ([
        {
            type: "input",
            name: "github",
            message: "What is their Github username"
        },

        {
            type: "list",
            name: "addmore",
            message: "Add more staff?",
            choices: [
                "yes",
                "no"
            ]

        }

    ]).then (function(answers){
        if (answers.addmore === "yes"){
            // const engineer = new Engineer (realName, idNum, email, position, officeNumber)
            // ourTeamArr.push(engineer)
            employeeType()
        } else (answers.addmore === "no")
            return
        
    })
}


const generateHTML = ({
realName, idNum, email, officeNumber, github, school
}) =>

// Skeleton of doc
`
<h1>${realName}</h1>
<h2>Manager</h2>

<h3>${idNum}</h3>
<h3>${email}</h3>
<h3>${officeNumber}</h3>




<h1>${realName}</h1>
<h2>Engineer</h2>

<h3>${idNum}</h3>
<h3>${email}</h3>
<h3>https://github.com/${github}</h3>




<h1>${realName}</h1>
<h2>Intern</h2>

<h3>${idNum}</h3>
<h3>${email}<h3>
<h3>${school}</h3>
`






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