// task_5/js/main.ts

// Defines an interface for MajorCredits.
export interface MajorCredits {
  credits: number; // The number of credits.
  __brand: "MajorCredits"; // A unique brand to enable nominal typing.
}

// Defines an interface for MinorCredits.
export interface MinorCredits {
  credits: number; // The number of credits.
  __brand: "MinorCredits"; // A unique brand to enable nominal typing.
}

// A function that sums the credits of two MajorCredits objects.
export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  // Returns a new MajorCredits object with the total credits.
  return { credits: subject1.credits + subject2.credits } as MajorCredits;
}

// A function that sums the credits of two MinorCredits objects.
export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  // Returns a new MinorCredits object with the total credits.
  return { credits: subject1.credits + subject2.credits } as MinorCredits;
}

// Example Usage (for demonstration):

// const major1: MajorCredits = { credits: 3, __brand: 'MajorCredits' };
// const major2: MajorCredits = { credits: 4, __brand: 'MajorCredits' };

// const minor1: MinorCredits = { credits: 1, __brand: 'MinorCredits' };
// const minor2: MinorCredits = { credits: 2, __brand: 'MinorCredits' };

// const totalMajor = sumMajorCredits(major1, major2);
// console.log(`Total Major Credits: ${totalMajor.credits}`); // 7

// const totalMinor = sumMinorCredits(minor1, minor2);
// console.log(`Total Minor Credits: ${totalMinor.credits}`); // 3

// The following would cause a TypeScript error because the brands do not match:
// sumMajorCredits(major1, minor1);
