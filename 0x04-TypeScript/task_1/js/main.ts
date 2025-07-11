// --- Interfaces ---

// Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// Directors interface
interface Directors extends Teacher {
  numberOfReports: number;
}

// printTeacher function interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// --- Functions ---

// printTeacher function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// --- Student Data ---

const student1: Student = {
  firstName: "Alice",
  lastName: "Smith",
  age: 20,
  location: "New York",
};

const student2: Student = {
  firstName: "Bob",
  lastName: "Johnson",
  age: 22,
  location: "London",
};

const studentsList: Student[] = [student1, student2];

// --- Render Table in Vanilla JS ---

const table = document.createElement("table");
const headerRow = document.createElement("tr");
const th1 = document.createElement("th");
th1.textContent = "First Name";
const th2 = document.createElement("th");
th2.textContent = "Location";
headerRow.appendChild(th1);
headerRow.appendChild(th2);
table.appendChild(headerRow);

studentsList.forEach((student) => {
  const row = document.createElement("tr");
  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

document.body.appendChild(table);

// --- Teacher and Director Example ---

const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false,
};

const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(printTeacher("John", "Doe"));

// --- StudentClass ---

// Describes the constructor for the StudentClass.
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Describes the instance of a StudentClass.
interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

// Represents a student.
class StudentClass implements StudentClassInterface {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework = (): string => "Currently working";

  displayName = (): string => this.firstName;
}

// Create an instance of StudentClass and log its methods' output.
const student = new StudentClass("Ada", "Lovelace");
console.log(student.displayName());
console.log(student.workOnHomework());
