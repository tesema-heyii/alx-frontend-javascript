// task_4/js/subjects/Cpp.ts

/// <reference path="./Subject.ts" />

namespace Subjects {
  // Use declaration merging to add an optional property to the Teacher interface.
  export interface Teacher {
    experienceTeachingC?: number;
  }

  // Cpp class extends the base Subject class.
  export class Cpp extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }

    getAvailableTeacher(): string {
      // Check if the assigned teacher has experience in teaching C.
      if (this.teacher && this.teacher.experienceTeachingC > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return "No available teacher";
    }
  }
}
