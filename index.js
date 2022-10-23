// required packages

const inquirer = require('inquirer')
const fs = require('fs')


//Create questions that ask from the array. 1.Manager's name, Employee ID, email address, office number.
//These are asked for in prompts.
//Prompt selection between and intern engineer
//Then I can enter the Engineer's name, ID, email and GitHub username
//Select the intern option and the above is repeated
// An HTML file is generated

const questions = ([ 
    {
        type: 'list',
        name: 'Stafftype',
        message: 'Are you an engineer or a intern',
        choices: ['Intern', 'Engineer']
    },

    {
        type: 'input',
        name: 'name',
        message: 'What is their name?'
    },

    {
        type: 'input',
        name: 'managername',
        message: 'What is the name of your manager?'
    },

    {
        type: 'input',
        name: 'employeeID',
        message: 'What is your employee ID?'
    },

    {
        type: 'input',
        name: 'emailaddress',
        message: 'What is your email address?'
    },

    {
        type: 'input',
        name: 'officenumber',
        message: 'what is your office number?'
    },

   
]);

const generateHTML = ({managername, employeeID, emailaddress, officenumber, stafftype

}) => ""

//Skeleton of document

//initialize application
function initIntern() {
    inquirer.prompt(questions)
    .then ((inquirerResponse) =>{
        console.log(inquirerResponse)

        console.log('Writing HTML');
        fs.writeFileSync("./output/index.html",
       generateHTML(inquirerResponse) )
    })
}

initIntern()