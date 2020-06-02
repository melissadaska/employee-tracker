var inquirer = require('inquirer');
// add consoleTable
// add mysql

// add connection

function runSearch() {
    inquirer
    .prompt({
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: ['View All Departments', 
            'View All Roles',
            'View All Employees',
            'Add Department',
            'Add Role',
            'Add Employee',
            'Update Employee Role',
        ]
    })
    // add switch statements based on what user selects
}

// call runSearch()



// add function to view all departments

// add function to view all roles

// add function to view all employees

// add function to add department

// add function to add role

// add function to add employee

// add function to update an employee role





