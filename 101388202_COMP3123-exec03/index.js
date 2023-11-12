var http = require("http");
//TODO - Use Employee Module here
var empMod = require("./Employee.js");
const Employee = require("./Employee.js");
const { employees } = require("./Employee.js");
const employeesJSON = JSON.stringify(employees, null, 2);

console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8082

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
            res.write("<h1> Welcome to Lab Exercise 03 </h1>")
        } else if (req.url === '/employee') {
            //TODO - Display all details for employees in JSON format
            res.write("<h1>Employees</h1>")
            res.write(`<pre>${employeesJSON}</pre>`);

        } else if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
            res.write("<h1>Employees - Ascending Order</h1>")
            const employeeNames = employees.map((employee) => `${employee.firstName} ${employee.lastName}`);
            employeeNames.sort();
            const employeeNamesJSON = JSON.stringify(employeeNames);
            res.write(employeeNamesJSON);
            
        } else if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format 
            //e.g. { "total_salary" : 100 }  
            res.write("<h1>Employee Salary Total</h1>")
            const totalSalary = employees.reduce((sum, employee) => sum + employee.Salary, 0);
            const totalSalaryJSON = JSON.stringify({ total_salary: totalSalary });
            res.write(totalSalaryJSON);
        } else {
            res.end(`{"error": "${http.STATUS_CODES[404]}"}`)
        }
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})