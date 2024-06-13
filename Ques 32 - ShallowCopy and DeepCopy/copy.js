/*
    JavaScript is High level, dynamically typed client-side 
    scripting language.

    Shallow Copy - When a reference variable is copied into a new
                    reference variable using the assignment operator,
                    a shallow copy of the reference object is created.
*/

let employee = {
    eid: "E102",
    ename: "Rovid",
    eaddress: "New delhi",
    salary: 50000
}

console.log("Employee => ", employee);
let newEmployee = employee;             // Shallow Copy
console.log("New Employee => ",newEmployee);

console.log("-------- After Modification --------");
newEmployee.ename = "Kashyap";
console.log("Employee => ",employee);
console.log("New Employee => ",newEmployee);

// Name of the employee and NewEmployee will be changed becuase
// it there shared the same memory address.

/*
    Deep Copy - It makes a copy of all the members of the old objects,
                allocates a seperate memory location for the new
                object, and then assigns the copied members to the
                new object.
*/

let emp = {
    eid: "E101",
    ename: "RVD",
    eaddress: "Gurgaon",
    salary: 80000
}

console.log("-------- Deep Copy ----------");
let newEmp = JSON.parse(JSON.stringify(emp));   // Deep Copy

console.log("Emp => ", emp);
console.log("New Emp => ", newEmp);

console.log("-------- After Modification ----------");
newEmp.ename = "Kash";
newEmp.salary = 90000;
console.log("Emp => ", emp);
console.log("New Emp => ", newEmp);

// Changes occured only in the new Copy of Employees because
// they share seperate memory space in memory.