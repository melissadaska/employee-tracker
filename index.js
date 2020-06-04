var inquirer = require('inquirer');
var consoleTable = require('console.table');
var mysql = require('mysql');

// add connection
var connection = mysql.createConnection({
    host: 'localhost',
    port: '3001',
    user: 'root',
    password: 'root',
    database: 'employees_db'
});

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
function viewDepartments() {
    connection.query('SELECT * FROM department', function (err, results) {
        console.table(results);
        if (err) throw err;
    });   
    runSearch();
}

// add function to view all roles
function viewRoles() {
    connection.query('SELECT * FROM role', function (err, results) {
        console.table(results);
        if (err) throw err;
    });
    runSearch();
}

// add function to view all employees
function viewEmployees() {
    var query = 'SELECT employee.id, employee.first_name, role.title, department.department_name AS department, role.salary FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id';
    connection.query(query, function(err, results) {
        console.table(results);
        if (err) throw err;
    });
    runSearch();
}

// add function to add department

// add function to add role

// add function to add employee

// add function to update an employee role





