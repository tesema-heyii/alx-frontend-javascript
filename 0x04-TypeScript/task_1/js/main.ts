// --- Interfaces Section ---

/**
 * Represents a Teacher's data profile.
 * Allows for any additional properties.
 */
interface TeacherProfile {
  readonly firstName: string;
  readonly lastName:string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

/**
 * Represents a Director's data profile, who is also a Teacher but with reports.
 */
interface DirectorProfile extends TeacherProfile {
  numberOfReports: number;
}

/**
 * Describes the shape of the printTeacher function.
 */
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}


// --- Functions Section ---

/**
 * Creates a formatted string from a teacher's name.
 * @param firstName - The first name of the teacher.
 * @param lastName - The last name of the teacher.
 * @returns A string in the format "F. LastName".
 */
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};


// --- Execution Section ---

// Create a Teacher instance
const teacher3: TeacherProfile = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

// Create a Director instance
const director1: DirectorProfile = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

// --- Output ---

console.log("Teacher:");
console.log(teacher3);

console.log("\nDirector:");
console.log(director1);

console.log("\nFormatted Teacher Name:");
console.log(printTeacher('John', 'Doe'));

// --- StudentClass Section ---

/**
 * Describes the constructor for a StudentClass.
 */
interface StudentClassConstructor {
  new(firstName: string, lastName: string): StudentClassInterface;
}

/**
 * Describes the instance of a StudentClass.
 */
interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

/**
 * Represents a student.
 */
class StudentClass implements StudentClassInterface {
  constructor(
    public firstName: string,
    public lastName: string
  ) {}

  workOnHomework = (): string => 'Currently working';

  displayName = (): string => this.firstName;
}

console.log('\n--- Student ---');
const student = new StudentClass('Ada', 'Lovelace');
console.log(student.displayName());
console.log(student.workOnHomework());

// --- Employee Creation Section ---

interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Working on director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

console.log('\n--- Employee Creation ---');
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));
// Let's leave my project here for today, and I will continue tomorrow.