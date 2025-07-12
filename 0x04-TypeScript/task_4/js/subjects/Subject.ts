// task_4/js/subjects/Subject.ts

/// <reference path="./Teacher.ts" />

// Continue defining entities within the Subjects namespace.
namespace Subjects {
  // The Subject class holds a reference to a Teacher.
  export class Subject {
    teacher: Teacher;

    // Setter method to assign a teacher to the subject.
    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}
