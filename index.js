var inquirer = require('inquirer');
var consoleTable = require('console.table');
var mysql = require('mysql2');

// add connection
var connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'UTbootcampcorona19',
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
    .then(function (answer) {
        console.log(answer.action);
        switch (answer.action) {
          case "View All Departments":
            viewDepartments();
            break;
  
          case "View All Roles":
            viewRoles();
            break;
  
          case "View All Employees":
            viewEmployees();
            break;
  
          case "Add Department":
            addDepartment();
            break;
  
          case "Add Role":
            addRole();
            break;
  
          case "Add Employee":
            addEmployee();
            break;
  
          case "Update Employee Role":
            updateEmployee();
            break;
        }
      });
}

runSearch();


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
    connection.query('SELECT * FROM roles', function (err, results) {
        console.table(results);
        if (err) throw err;
    });
    runSearch();
}

// add function to view all employees
function viewEmployees() {
    var query = 'SELECT employee.id, employee.first_name, roles.title, department.name AS department, roles.salary FROM employee LEFT JOIN roles on employee.roles_id = roles.id LEFT JOIN department on roles.department_id = department.id';
    connection.query(query, function(err, results) {
        console.table(results);
        if (err) throw err;
    });
    runSearch();
}

// add function to add department
function addDepartment() {
    inquirer
    .prompt({
        type: 'input',
        message: 'Enter Department Name',
        name: 'department'
    })
    .then(function(answer) {
        connection.query(
            'INSERT INTO department SET ?',
            {name: answer.department},
            function(err, answer) {
                if (err) {
                    throw err;
                }
            }
        ),
        console.table(answer);
        runSearch();
    })
}

// add function to add role
function addRole() {
    inquirer
    .prompt([
    {
        type: 'input',
        message: 'Enter employee role',
        name: 'addrole'
    },
    {
        type: 'input',
        message: 'Enter employee salary',
        name: 'addsalary'
    },
    {
        type: 'input',
        message: 'Enter employee department id',
        name: 'addDeptId'
    }
    ])
    .then(function(answer) {
        connection.query(
            'INSERT INTO role SET ?',
            {
                title: answer.addrole,
                salary: answer.addsalary,
                department_id: answer.addDeptId
            }
        ),
        console.log(answer);
        runSearch();
    })
}

// add function to add employee
function addEmployee() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter employee first name',
            name: 'firstname'
        },
        {
            type: 'input',
            message: 'Enter employee last name',
            name: 'lastname'
        }
    ])
    .then(function(answer) {
        connection.query(
            'INSERT INTO employee SET?',
            {
                first_name: answer.firstname,
                last_name: answer.lastname,
                role_id: null,
                manager_id: null
            },
            function(err, answer) {
                if (err) {
                    throw err;
                }
                console.table(answer);
            }
        );
        runSearch();
    });
}

// add function to update an employee role





