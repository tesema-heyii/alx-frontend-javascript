// Defines the interface for a Director's responsibilities.
interface DirectorInterface {
  workFromHome(): string;
  getToWork(): string;
  workDirectorTasks(): string;
}

// Defines the interface for a Teacher's responsibilities.
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Represents a Director, implementing their specific tasks.
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getToWork(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Represents a Teacher, implementing their specific tasks.
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

// A factory function that creates an employee (either a Director or a Teacher)
// based on the provided salary.
// @param salary - The salary of the employee, which can be a number or a string.
// @returns A new instance of a Director or a Teacher.
function createEmployee(salary: number | string): Director | Teacher {
  let numericSalary: number;
  if (typeof salary === "string") {
    // Remove non-numeric characters (except dot) and parse
    numericSalary = parseFloat(salary.replace(/[^0-9.]/g, ""));
  } else {
    numericSalary = salary;
  }

  // Check if parsing was successful and if salary is below the threshold
  if (!isNaN(numericSalary) && numericSalary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// A type predicate function to check if an employee is a Director.
// It returns a boolean and informs TypeScript of the employee's type.
function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// Executes tasks based on the employee's role.
// It uses the isDirector type predicate to safely call the correct method.
function executeWork(employee: Director | Teacher): void {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

// --- Example Execution ---
console.log("--- Executing Work ---");
executeWork(createEmployee(200));
executeWork(createEmployee(1000));

// --- Subjects Section ---

// A string literal type that only allows "Math" or "History".
type Subjects = "Math" | "History";

// Returns a specific teaching message based on the subject.
function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else {
    return "Teaching History";
  }
}

// --- Example Execution for teachClass ---
console.log(teachClass("Math"));
console.log(teachClass("History"));
