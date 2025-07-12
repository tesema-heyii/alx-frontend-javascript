// Defines the interface for a Director.
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Defines the interface for a Teacher.
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Implements the DirectorInterface.
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Implements the TeacherInterface.
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// Creates an employee instance (Director or Teacher) based on salary.
function createEmployee(salary: number | string): Director | Teacher {
  let numericSalary: number;

  if (typeof salary === "string") {
    numericSalary = parseInt(salary.replace(/\D/g, ""), 10);
  } else {
    numericSalary = salary;
  }

  if (numericSalary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// Type predicate to check if an employee is a Director.
function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// Executes work tasks based on the employee's role.
function executeWork(employee: Director | Teacher): void {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

// A string literal type for subjects.
type Subjects = "Math" | "History";

// Returns a string indicating which class is being taught.
function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  }
  return "Teaching History";
}

// --- Expected Results ---

console.log("--- createEmployee results ---");
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee("$500"));

console.log("\n--- executeWork results ---");
executeWork(createEmployee(200));
executeWork(createEmployee(1000));

console.log("\n--- teachClass results ---");
console.log(teachClass("Math"));
// Expected output: Teaching Math
console.log(teachClass("History"));
// Expected output: Teaching History
