INSERT INTO department (name) 
VALUES ("Sales"), ("Engineering"), ("Finance"), ("Legal");

INSERT INTO roles (title, salary, department_id)
VALUES 
("Sales Lead", 100000 ,1),  
("Software Engineer", 120000, 2),
("Lawyer", 190000, 4),
("Accountant", 65000, 3),
("Salesperson", 80000 , 1),
("Lead Engineer", 150000, 2);



INSERT INTO employee (first_name, last_name, roles_id)
VALUES 
("Dean", "Daska", 6),
("Tom", "Nick", 5),
("Mamie", "Aoughston", 3),
("Mary", "Ross", 4),
("Melissa", "Daska", 2),
("Mike", "Ross", 1);
