// task_4/js/subjects/React.ts

/// <reference path="./Subject.ts" />

namespace Subjects {
  // Use declaration merging to add an optional property to the Teacher interface.
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  // React class extends the base Subject class.
  export class React extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for React";
    }

    getAvailableTeacher(): string {
      // Check if the assigned teacher has experience in teaching React.
      if (this.teacher && this.teacher.experienceTeachingReact > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return "No available teacher";
    }
  }
}
