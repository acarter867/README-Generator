// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = ['Enter the title of the project', 'Enter description', 'Enter installation instructions',
'Enter usage information', 'Enter contribution guidelines', 'Enter testing instructions',
'Select a license', 'Enter github username', 'Enter email address'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const answers = [data.projectName, data.description, data.install, data.usage, data.contributions, 
    data.testing, data.license, data.github, data.email];
    
    for(let i = 0; i < answers.length; i++){
        fs.writeFile(fileName, JSON.stringify(answers[i], null, '\n'), (err) =>
        err ? console.log(err) : console.log('Success!')
    );
    }
    
}

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
                choices: ['MIT', 'Microsoft Public License', 'Academic Free License v3.0', 'Artistic license 2.0']
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
            writeToFile('README.md', data)
        });
        return result;
}


// TODO: Create a function to initialize app
function init() {
    collectData();
}

// Function call to initialize app
init();
