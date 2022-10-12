const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const inquirer = require('inquirer');
const fs = require('fs');

const team = [];

//init runs when the program starts, inquirer prompts for manager.
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

//inquirer prompts for engineer
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

//inquirer prompts for intern
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

//logic and inquirer for next choice
function next() {
  inquirer
    .prompt([
      {
        type: 'list',
        message: 'What would you like to do next?',
        choices: ['Create new engineer', 'Create new intern', 'Finish building my team'],
        name: 'next'
      }
    ])
    .then((answers) => {
      switch(answers.next) {
        case 'Create new engineer':
          createEngineer();
          break;

        case 'Create new intern':
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

//Creates HTML
function generateHTML() {
  //Creates HTML employee cards
  function generateEmployeeCard(employee) {

    if (employee.getRole() === "Manager") {
      var info = `Office Number: ${employee.officeNum}`;
    } else if (employee.getRole() === "Engineer") {
      var info = `Github: <a href="${employee.getGithub()}" class="card-link">${employee.github}</a>`;
    } else {
      var info = `School: ${employee.school}`;
    }

    const card = `
    <div class="col-12 col-sm-6 col-lg-4 col-xxl-3 mb-3">
      <div class="card">
        <div class="card-header text-bg-primary">
          <h5 class="card-title">${employee.name}</h5>
          ${employee.getRole()}    
        </div>
        <div class="card-body">
          <ul class="list-group">
            <li class="list-group-item">ID: ${employee.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${employee.email}" class="card-link">${employee.email}</a></li>
            <li class="list-group-item">${info}</li>
          </ul>
        </div>
      </div>
    </div>`;

    return card;
  }

  var cards = "";

  for (employee of team) {
    cards = cards + generateEmployeeCard(employee);
  }

  const HTML = 
  `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>My Team</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet">
      <link rel="stylesheet" href="./style.css">
    </head>
    <body>
      <header class="text-bg-success p-3 mb-3">
        <h1>My Team</h1>
      </header>
      <main class="container">
        <div class="row">
                ${cards}
        </div>
      </main>
    </body>
  </html>`;

  //Creates new file
  fs.writeFile('dist/index.html', HTML, (err) => 
    err ? console.error('Error: Failed to generate index.html', err) 
    : console.log('index.html was successfully created!'));
}

init();