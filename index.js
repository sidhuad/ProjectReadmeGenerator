// TODO: Include packages needed for this application
import fs from 'fs'
import inquirer from 'inquirer';

// TODO: Create an array of questions for user input
const questions = [`What is the Name of Your Project? `
                ,'What was your Motivation? '
                ,'Why did you build this Project? '
                ,`What Problem's does it Solve? `
                ,'What did you learn? '
                ,'What makes your Project stand-out? '
                ,'Add an Installation Guide for Your Project: '
                ,'How can someone use your Project? '
                ,`Credit's: `
                ,`License's used: `
                ,`Features or Future Add-on's: `
                ,'How can anyone Contribute to this Project? '
                ,`Test's: `
                ,`Github User name: `
                ,"Email: "];

// TODO: Create a function to write README file
function writeToFile(data) {
    const {ques1,ques2,ques3,ques4,ques5,ques6,ques7,ques8,ques9,ques10,ques11,ques12,ques13,ques14,ques15} = data;

    let license;
    if (ques10 == 'MIT') {
        license = `A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code. https://choosealicense.com/licenses/mit/`
    }
    else if (ques10 == 'GNU GPLv3') {
        license = `Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. https://choosealicense.com/licenses/gpl-3.0/`
    }
    else if (ques10 == 'Apache License 2.0') {
        license = `A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code. https://choosealicense.com/licenses/apache-2.0/`
    }
    else{
        license = `A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code. https://choosealicense.com/licenses/unlicense/`
    }


    const readmeTemplate = `
![Static Badge](https://img.shields.io/badge/${ques10}-green)

# ${ques1}

## Description

- **Motivation**: ${ques2}
- **Why build This Project**: ${ques3}
- **What problem's did it solve**: ${ques4}
- **Lesson's Learned**: ${ques5}
- **What makes your project stand-out**: ${ques6}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${ques7}

## Usage
${ques8}

## Credits
${ques9}

## License
${license}

## Features
${ques11}

## How to Contribute
${ques12}

## Tests
${ques13}

## Questions
- For Further Questions and Bug reports Please reach out to me at
- ![Static Badge](https://img.shields.io/badge/Github-green) [![Static Badge](https://img.shields.io/badge/${ques14}-blue)](https://github.com/${ques14})
- ![Static Badge](https://img.shields.io/badge/Email-purple) ${ques15}
`;

    fs.writeFile('README.md',readmeTemplate,(err) => {
        err ? console.error(err) : console.log(`README.md file Created !`);
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'ques1',
        },
        {
            type: 'input',
            message: questions[1],
            name: 'ques2',
        },
        {
            type: 'input',
            message: questions[2],
            name: 'ques3',
        },
        {
            type: 'input',
            message: questions[3],
            name: 'ques4',
        },
        {
            type: 'input',
            message: questions[4],
            name: 'ques5',
        },
        {
            type: 'input',
            message: questions[5],
            name: 'ques6',
        },
        {
            type: 'input',
            message: questions[6],
            name: 'ques7',
        },
        {
            type: 'input',
            message: questions[7],
            name: 'ques8',
        },
        {
            type: 'input',
            message: questions[8],
            name: 'ques9',
        },
        {
            type: 'list',
            message: questions[9],
            name: 'ques10',
            choices:['MIT','GNU GPLv3','The Unlicense','Apache License 2.0']
        },
        {
            type: 'input',
            message: questions[10],
            name: 'ques11',
        },
        {
            type: 'input',
            message: questions[11],
            name: 'ques12',
        },
        {
            type: 'input',
            message: questions[12],
            name: 'ques13',
        },
        {
            type: 'input',
            message: questions[13],
            name: 'ques14',
        },
        {
            type: 'input',
            message: questions[14],
            name: 'ques15',
        },
    ])
    .then((answers) => writeToFile(answers));
}

// Function call to initialize app
init();
