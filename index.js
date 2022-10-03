const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const inquirer = require('inquirer');
const fs = require('fs');

const team = [];

function init() {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'Enter the team managers name.',
        name: 'name'
      },
      {
        type: 'input',
        message: 'Enter the team managers employee id.',
        name: 'id'
      },
      {
        type: 'input',
        message: 'Enter the team managers email address.',
        name: 'email'
      },
      {
        type: 'input',
        message: 'Enter the team managers office number',
        name: 'officeNum'
      }
    ])
    .then((answers) => {
      let manager = new Manager(answers.name, answers.id, answers.email, answers.officeNum);
      team.push(manager);
      next();
    });
}

function createEngineer() {
  inquirer
    .prompt([
     {
        type: 'input',
        message: 'Enter the engineers name.',
        name: 'name'
      },
     {
        type: 'input',
        message: 'Enter the engineers employee id.',
        name: 'id'
      },
      {
        type: 'input',
        message: 'Enter the engineers email address.',
        name: 'email'
      },
     {
        type: 'input',
        message: 'Enter the engineers Github username.',
        name: 'github'
      }
    ])
    .then((answers) => {
      let engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
      team.push(engineer);
      next();
    });
}

function createIntern() {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'Enter the interns name.',
        name: 'name'
      },
      {
        type: 'input',
        message: 'Enter interns employee id.',
        name: 'id'
      },
      {
        type: 'input',
        message: 'Enter interns email adress.',
        name: 'email'
      },
      {
        type: 'input',
        message: 'Enter interns school.',
        name: 'school'
      }
    ])
    .then((answers) => {
      let intern = new Intern(answers.name, answers.id, answers.email, answers.school);
      team.push(intern);
      next();
    });
}

function next() {
  inquirer
    .prompt([
      {
        type: 'list',
        message: 'What would you like to do next?',
        choices: ['Create new engineer', 'Create new Intern', 'Finish building my team'],
        name: 'next'
      }
    ])
    .then((answers) => {
      switch(answers.next) {
        case 'Create new engineer':
          createEngineer();
          break;

        case 'Create new Intern':
          createIntern();
          break;

        case 'Finish building my team':
          generateHTML();
          console.log('Your HTML file has been generated!')
          break;

        default:
          console.error('Error: No choice was excepted.')
      }
    });
}

function generateHTML() {
  console.log(team);
  // function generateEmployeeCard() {

  // }

  // const HTML = ``;

  // fs.writeFile('dist/index.html', HTML, (err) => 
  //   err ? console.error('Error: Failed to generate index.html', err) 
  //   : console.log('index.html was successfully created!'));
}



init();