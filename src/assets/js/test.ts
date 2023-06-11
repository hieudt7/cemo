interface Employee {
    uniqueId: number;
    name: string;
    subordinates: Employee[];
}
interface IEmployeeOrgApp {
    ceo: Employee;
    /**
    * Moves the employee with employeeID (uniqueId) under a supervisor
    (another employee) that has supervisorID (uniqueId).
    * E.g. move Bob (employeeID) to be subordinate of Georgina
    (supervisorID). * @param employeeID
    * @param supervisorID
    */
    move(employeeID: number, supervisorID: number): void;
    /** Undo last move action */
    undo(): void;
    /** Redo last undone action */
    redo(): void;
}
function moveEmployee(employeeID: number, supervisorID: number): void {
    console.log('move Employee: key = ' + employeeID + ', value = ' + supervisorID);
}

function updateKeyValue(key: number, value: string): void {
    console.log('updateKeyValue: key = ' + key + ', value = ' + value);
}
// const foo: Foo = {
//     foo() {
//         return 'bar';
//     }
// };
class EmployeeClass implements IEmployeeOrgApp { 
    ceo: Employee;
    constructor(ceo: Employee) { 
                this.ceo = ceo;
    }
    move(employeeID: number, supervisorID: number): void {
        console.log('move Employee: key = ' + employeeID + ', value = ' + supervisorID);
    }
    undo(): void {
        console.log('undo action');
    }
    redo(): void {
        console.log('redo action');
    }
}
const ceo: Employee = {
    uniqueId: 1,
    name: 'Mark Zuckerberg',
    subordinates: []
    }
let emp = new EmployeeClass(ceo);
emp.move(1,1)