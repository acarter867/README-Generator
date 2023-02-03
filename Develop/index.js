// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = ['Enter the title of the project', 'Enter description', 'Enter installation instructions',
'Enter usage information', 'Enter contribution guidelines', 'Enter testing instructions',
'Select a license', 'Enter github username', 'Enter email address'];

//Write resopnses to README
function writeToFile(fileName, data) {
    //move responses to array
    const answers = [data.projectName, data.description, data.install, data.usage, data.contributions, 
    data.testing, data.license, data.github, data.email];
    
    //Generate markdown & send to variable
    let outputFile = generateMarkdown(answers);

    //Write file, console log errors
    fs.writeFile(fileName, outputFile, (err) =>
    err ? console.log(err) : console.log('Success!')
    ) 
}

//prompt user for responses
function collectData(){
    let result = '';
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'projectName',
                message: questions[0]
            },
            {
                type: 'input',
                name: 'description',
                message: questions[1]
            },
            {
                type: 'input', 
                name: 'install',
                message: questions[2]
            },
            {
                type: 'input',
                name: 'usage',
                message: questions[3]
            },
            {
                type: 'input',
                name: 'contributions',
                message: questions[4]
            },
            {
                type: 'input',
                name: 'testing',
                message: questions[5]
            },
            {
                type: 'list',
                name: 'license',
                message: questions[6],
                choices: ['MIT', 'GNU', 'Eclipse Public License', 'IBM Public License']
            },
            {
                type: 'input',
                name: 'github',
                message: questions[7]
            },
            {
                type: 'input',
                name: 'email',
                message: questions[8]
            }
        ])
        .then(data => {
            //write to file using data
            writeToFile('README.md', data)
        });
        return result;
}


//initializer function
function init() {
    collectData();
}

//initializer call
init();
