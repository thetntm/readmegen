const inquirer = require("inquirer");
const api = require("./api");

async function getData() {
    const data = await inquirer.prompt([{
        type: 'input',
        name: 'title',
        message: 'What is your project called? >'
    },
    {
        type: 'input',
        name: 'desc',
        message: 'Describe your project >'
    },
    {
        type: 'input',
        name: 'install',
        message: 'What command will the user run to install the project? >',
        default: 'npm i'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What command should the user type to run the program? >',
        default: 'node index.js'
    },
    {
        type: 'input',
        name: 'license',
        message: 'What license does your project use? >',
        default: 'MIT'
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Finish the sentence: Before contributing to the repo, make sure... >'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command will the user run to test the project? >',
        default: 'npm test'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?',
        default: 'thetntm'   
    }]);

    const apiData = await api(data.github);

    return [data,apiData]
}

module.exports = getData;