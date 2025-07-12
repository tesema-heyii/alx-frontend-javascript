// task_4/js/subjects/Java.ts

/// <reference path="./Subject.ts" />

namespace Subjects {
  // Use declaration merging to add an optional property to the Teacher interface.
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  // Java class extends the base Subject class.
  export class Java extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Java";
    }

    getAvailableTeacher(): string {
      // Check if the assigned teacher has experience in teaching Java.
      if (this.teacher && this.teacher.experienceTeachingJava > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return "No available teacher";
    }
  }
}
